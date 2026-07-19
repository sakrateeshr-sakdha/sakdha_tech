"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Building2,
  Globe
} from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/BrandIcons";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const { [name]: removed, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: ""
        });
      } else {
        setErrors({ submit: data.error || "Failed to send message. Please check details." });
      }
    } catch (err) {
      setErrors({ submit: "A network error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const servicesOptions = [
    "Custom Web Development",
    "QA Testing Services",
    "UI/UX Design",
    "API Integration",
    "Website Maintenance & Support",
    "MyBoutiqueManager Demo Inquiry",
    "Other Services / General Inquiry"
  ];

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <span>Let's collaborate</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Have a product concept or need external QA automation assistance? Tell us about your project requirements and budget scale, and receive a proposal within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Company Information Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">Contact Information</h2>
              <p className="text-sm text-muted-foreground">Get in touch directly or visit our virtual coworking networks.</p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 rounded-2xl border border-border/40 bg-background/55">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase">Email Address</h4>
                  <a href="mailto:contact@sakdha.com" className="text-sm font-semibold text-foreground hover:text-primary transition-colors mt-1 block">
                    contact@sakdha.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl border border-border/40 bg-background/55">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase">Phone Number</h4>
                  <a href="tel:7539993876" className="text-sm font-semibold text-foreground hover:text-primary transition-colors mt-1 block">
                    7539993876
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl border border-border/40 bg-background/55">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase">Office Location</h4>
                  <p className="text-sm font-semibold text-foreground mt-1 leading-relaxed">
                    Registered Office : 282/9 Rasi Nagar CAK Road Karur - 639001, Tamilnadu - India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl border border-border/40 bg-background/55">
                <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-muted-foreground uppercase">Business Hours</h4>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    Monday – Friday: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links (Hidden as of now) */}
            {/*
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-muted-foreground uppercase">Connect with us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: TwitterIcon, url: "https://twitter.com" },
                  { icon: LinkedinIcon, url: "https://linkedin.com" },
                  { icon: GithubIcon, url: "https://github.com" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-border/50 glass hover:bg-muted/50 text-foreground flex items-center justify-center transition-all cursor-pointer"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
            */}

            {/* Google Map Mockup (Hidden as of now) */}
            {/*
            <div className="border border-border/40 rounded-2xl overflow-hidden bg-muted/30 p-1">
              <div className="relative h-44 rounded-xl bg-card border border-border/30 overflow-hidden flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5" />
                <div className="relative z-10 space-y-2">
                  <Globe className="h-8 w-8 text-primary mx-auto animate-spin" style={{ animationDuration: "12s" }} />
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Interactive Map Placeholder</p>
                  <p className="text-[9px] text-muted-foreground">Map data displays live in cloud servers</p>
                </div>
              </div>
            </div>
            */}
          </div>

          {/* Inquiry Form Right Column */}
          <div className="lg:col-span-7">
            <GlowCard className="p-8 md:p-10 h-full">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle className="h-10 w-10 animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-extrabold text-2xl text-foreground">Message Sent Successfully!</h3>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Thank you for reaching out. We have logged your request and assigned a senior technician to compile an initial scoping proposal. We will respond within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all cursor-pointer shadow-md"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground block">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.name ? "border-rose-500 focus:ring-rose-500/50" : "border-border focus:ring-primary/50"
                          }`}
                          placeholder="Your Name"
                        />
                        {errors.name && (
                          <p className="text-[10px] text-rose-500 flex items-center space-x-1 font-semibold">
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground block">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.email ? "border-rose-500 focus:ring-rose-500/50" : "border-border focus:ring-primary/50"
                          }`}
                          placeholder="name@company.com"
                        />
                        {errors.email && (
                          <p className="text-[10px] text-rose-500 flex items-center space-x-1 font-semibold">
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Company */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground block">Company (Optional)</label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="e.g. Acme Corp"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-foreground block">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground block">Project / Service Interest *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.service ? "border-rose-500 focus:ring-rose-500/50" : "border-border focus:ring-primary/50"
                        }`}
                      >
                        <option value="">Select a Category</option>
                        {servicesOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-[10px] text-rose-500 flex items-center space-x-1 font-semibold">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground block">Message / Scope Description *</label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-card text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.message ? "border-rose-500 focus:ring-rose-500/50" : "border-border focus:ring-primary/50"
                        }`}
                        placeholder="Briefly describe your project requirements..."
                      />
                      {errors.message && (
                        <p className="text-[10px] text-rose-500 flex items-center space-x-1 font-semibold">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {errors.submit && (
                      <p className="text-[11px] text-rose-500 flex items-center space-x-1 font-semibold justify-center bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{errors.submit}</span>
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
}
