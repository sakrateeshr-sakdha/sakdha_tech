"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle,
  AlertCircle,
  FileUp,
  Loader2,
  DollarSign,
  TrendingUp,
  Percent,
  Check,
  Award,
  BookOpen,
  Users
} from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function Careers() {
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "Freelance Sales & Marketing Partner",
    coverLetter: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const partnerBenefits = [
    { icon: Percent, title: "50% Commission", desc: "Earn half of the customer's first subscription payment upon successful conversion." },
    { icon: Clock, title: "Flexible Working", desc: "No core hours, no micromanagement. Promote and sell entirely on your own schedule." },
    { icon: MapPin, title: "100% Remote Opportunity", desc: "Work from anywhere. Identify and contact boutique leads digitally or locally." },
    { icon: TrendingUp, title: "Unlimited Earnings", desc: "No ceiling on commissions. The more boutique subscribers you convert, the more you earn." }
  ];

  const responsibilities = [
    "Identify, approach, and engage boutique owners digitally or in person.",
    "Generate qualified leads of fashion boutique owners, custom tailors, and designers.",
    "Demonstrate the features and benefits of My Boutique Manager software.",
    "Schedule software product demonstrations with our technical team when required.",
    "Follow up with leads and convert them into paid active subscribers.",
    "Maintain professional, polite, and clear communication throughout the sales process."
  ];

  const requirements = [
    "Prior experience in sales, digital marketing, or business development roles.",
    "Strong communication, interpersonal, and negotiation skills.",
    "Confidence in approaching small business owners and pitch SaaS capabilities.",
    "Self-motivated, target-driven, and capable of working independently.",
    "Familiarity or experience selling SaaS software products is a strong plus."
  ];

  const idealCandidates = [
    "Freelance Sales Executives",
    "Digital Marketing Professionals",
    "Business Development Specialists",
    "Lead Generation Agencies",
    "Independent Sales Consultants / Representatives"
  ];

  const whyJoinUs = [
    "Attractive 50% first-subscription commission payouts.",
    "Complete flexible hours control.",
    "True location independence (work remotely from anywhere).",
    "Unlimited earning potential.",
    "Potential for long-term strategic partnership as our platform scales."
  ];

  const productFeatures = [
    "Customer Management & Loyalty CRM",
    "Stitching Orders & Tailor Measurements Tracker",
    "Dresses, Fabrics & Accessories Inventory Control",
    "GST Automated Billing & PDF Invoice Sharing",
    "Employee Access Control Roles",
    "Real-time Reports & Operations Analytics",
    "Secure Cloud Sync & Automated Daily Backups"
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, resume: "File size must be less than 5MB" }));
        setFile(null);
      } else {
        setErrors((prev) => {
          const { resume, ...rest } = prev;
          return rest;
        });
        setFile(selectedFile);
      }
    }
  };

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

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.position) newErrors.position = "Please select a position";
    if (!file) newErrors.resume = "Please upload your resume or profile doc";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("position", formData.position);
      data.append("coverLetter", formData.coverLetter);
      if (file) {
        data.append("resume", file);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", position: "Freelance Sales & Marketing Partner", coverLetter: "" });
        setFile(null);
      } else {
        setErrors({ submit: result.error || "Failed to submit application. Please check details." });
      }
    } catch (err) {
      setErrors({ submit: "A network error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <span>Partner Opportunity</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground max-w-5xl mx-auto leading-tight"
          >
            Freelance Sales & Marketing Partner –{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              My Boutique Manager
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Promote our all-in-one cloud boutique management platform. Introduce business owners to the software, convert them to paying subscribers, and earn a 50% commission.
          </motion.p>
        </div>
      </section>

      {/* Partner Benefits Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerBenefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <GlowCard key={idx} className="h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </GlowCard>
            );
          })}
        </div>
      </section>

      {/* Detailed Opportunity Breakdown & Application */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Job Details */}
          <div className="lg:col-span-7 space-y-10">
            {/* Job Overview */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-foreground flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Job Overview</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We are looking for motivated, target-driven freelance Sales & Marketing professionals to promote <strong>My Boutique Manager</strong>, a premium SaaS platform designed to help boutique owners efficiently manage their business operations. Your role is to identify potential boutique owners, demonstrate the product (or introduce them to our technical team), and convert them into paying subscribers.
              </p>
            </div>

            {/* About the Product */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>About My Boutique Manager</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                My Boutique Manager is an all-in-one boutique management solution that helps fashion and retail business owners simplify inventory, log customer purchases, record stitching details, and print invoices. Core features include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                {productFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-foreground/90 font-medium">
                    <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-foreground flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Responsibilities</span>
              </h2>
              <ul className="space-y-2.5 pl-2">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compensation Structure */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-foreground flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span>Compensation</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a <strong>commission-based opportunity</strong>.
              </p>
              
              <ul className="space-y-2 pl-2">
                <li className="flex items-start space-x-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>You will receive <strong>50% of the customer's first subscription payment</strong> after the company successfully receives the amount.</span>
                </li>
                <li className="flex items-start space-x-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Commission is paid only for successfully converted paying customers.</span>
                </li>
                <li className="flex items-start space-x-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>There is <strong>no limit</strong> to the number of clients you can enroll. The more subscriptions you bring, the more you earn.</span>
                </li>
              </ul>

              {/* Commission Example Box */}
              <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/2 max-w-md space-y-3">
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Example Scenario</h4>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>1. Customer purchases subscription:</span>
                    <span className="font-semibold text-foreground">₹2,000</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>2. Company receives the payment:</span>
                    <span className="font-semibold text-foreground">Success</span>
                  </div>
                  <div className="flex justify-between border-t border-border/20 pt-2 font-bold text-foreground">
                    <span>Your Earned Commission (50%):</span>
                    <span className="text-primary">₹1,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements & Ideal Candidates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg text-foreground">Requirements</h3>
                <ul className="space-y-2">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                      <span className="text-primary">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-bold text-lg text-foreground">Ideal Candidates</h3>
                <ul className="space-y-2">
                  {idealCandidates.map((cand, idx) => (
                    <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5 leading-relaxed">
                      <span className="text-secondary">•</span>
                      <span>{cand}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Why Join Us */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-2xl text-foreground flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Why Join Us?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                {whyJoinUs.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Application Form */}
          <div ref={formRef} className="lg:col-span-5 lg:sticky lg:top-28">
            <GlowCard className="p-8">
              <div className="text-center mb-6">
                <h3 className="font-heading font-extrabold text-xl text-foreground">Apply as Partner</h3>
                <p className="text-xs text-muted-foreground mt-1">Submit your profile and share your sales or client acquisition experience.</p>
              </div>

              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-foreground">Application Received</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      Thank you for applying. We will review your client acquisition background and get back to you with login assets and demo files in 1-2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-5 py-2 rounded-full border border-border/50 text-xs font-bold hover:bg-muted/50 cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-card text-xs focus:outline-none focus:ring-2 transition-all ${
                          errors.name ? "border-rose-500 focus:ring-rose-500/50" : "border-border focus:ring-primary/50"
                        }`}
                        placeholder="Your Name"
                      />
                      {errors.name && (
                        <p className="text-[9px] text-rose-500 flex items-center space-x-1 font-semibold">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground block">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-card text-xs focus:outline-none focus:ring-2 transition-all ${
                          errors.email ? "border-rose-500 focus:ring-rose-500/50" : "border-border focus:ring-primary/50"
                        }`}
                        placeholder="name@example.com"
                      />
                      {errors.email && (
                        <p className="text-[9px] text-rose-500 flex items-center space-x-1 font-semibold">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Position Display */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground block">Role Profile</label>
                      <input
                        type="text"
                        name="position"
                        disabled
                        value={formData.position}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-xs text-foreground/80 cursor-not-allowed"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground block">Upload Profile / Resume *</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div
                          className={`w-full px-4 py-2.5 rounded-xl border bg-card text-xs flex items-center justify-between border-dashed cursor-pointer ${
                            errors.resume ? "border-rose-500 bg-rose-500/2" : "border-border bg-card/40"
                          }`}
                        >
                          <span className="text-[11px] text-muted-foreground truncate max-w-[170px]">
                            {file ? file.name : "Resume / CV (Max 5MB)"}
                          </span>
                          <FileUp className="h-4.5 w-4.5 text-muted-foreground" />
                        </div>
                      </div>
                      {errors.resume && (
                        <p className="text-[9px] text-rose-500 flex items-center space-x-1 font-semibold">
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{errors.resume}</span>
                        </p>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-foreground block">Cover Note / Experience Summary</label>
                      <textarea
                        name="coverLetter"
                        rows={4}
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-card text-xs focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Tell us about your experience in sales, marketing, or boutique client acquisition..."
                      />
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
                      className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20 flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending Application...</span>
                        </>
                      ) : (
                        <span>Apply Now</span>
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
