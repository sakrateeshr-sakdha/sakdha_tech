"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  CheckCircle2,
  Layers,
  Link as LinkIcon,
  Wrench,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Shield,
  Zap,
  DollarSign,
  Clock,
  HeartHandshake,
  TrendingUp,
  Cpu,
  Smartphone,
  Sparkles
} from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  const services = [
    {
      icon: Laptop,
      title: "Custom Web Development",
      description: "We build scalable websites, business applications, and enterprise software tailored to your specific business goals.",
      techs: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      icon: Shield,
      title: "QA Testing Services",
      description: "Rigorous software testing including Manual, Automation, API, Regression, Performance, Security, and Cross-Browser/Mobile.",
      techs: ["Selenium", "Playwright", "Postman", "JMeter"]
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "Beautiful, interactive, and responsive interfaces designed with a user-first approach to maximize conversions.",
      techs: ["Figma", "Design Systems", "Prototyping", "UX Audit"]
    },
    {
      icon: LinkIcon,
      title: "API Integration",
      description: "Seamless connection of Payment Gateways, ERPs, CRMs, Cloud systems, and third-party SaaS tools into your stack.",
      techs: ["RESTful APIs", "GraphQL", "Webhooks", "OAuth"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "24/7 support, active bug fixing, continuous deployment, and periodic feature enhancements to keep apps running perfectly.",
      techs: ["CI/CD", "AWS", "Monitoring", "Performance Tuning"]
    }
  ];

  const whyChooseUs = [
    { icon: Users, title: "Experienced Team", desc: "Top-tier developers and QA engineers with years of industry experience." },
    { icon: Cpu, title: "Modern Technology", desc: "We build with Next.js, React, Node, and utilize modern automation pipelines." },
    { icon: DollarSign, title: "Affordable Pricing", desc: "Enterprise-grade digital solutions optimized for mid-market budgets." },
    { icon: Zap, title: "Agile Development", desc: "Bi-weekly sprints, clear communication, and rapid iteration cycles." },
    { icon: Clock, title: "Fast Delivery", desc: "Optimized pipelines allow us to deploy high-quality software rapidly." },
    { icon: HeartHandshake, title: "Dedicated Support", desc: "Continuous uptime support and direct Slack/Teams workspace integration." },
    { icon: Shield, title: "Quality Assurance", desc: "A dedicated QA engineer tests every single line of code before launch." },
    { icon: TrendingUp, title: "100% Client Satisfaction", desc: "We pride ourselves on long-term relationships and high retention." }
  ];

  const processSteps = [
    { step: "01", name: "Discover", desc: "Understanding your business goals, user needs, and scoping system requirements." },
    { step: "02", name: "Plan", desc: "Creating technical specifications, software architecture, wireframes, and timelines." },
    { step: "03", name: "Design", desc: "Developing premium UI design systems and interactive prototypes for your review." },
    { step: "04", name: "Develop", desc: "Agile software coding using clean, modular code bases and scalable databases." },
    { step: "05", name: "Test", desc: "Rigorous QA testing cycle including automation, regression, load, and security testing." },
    { step: "06", name: "Launch", desc: "Deploying secure builds into cloud environments (AWS/Vercel) and configuring domain DNS." },
    { step: "07", name: "Support", desc: "Monitoring uptime, analyzing user feedback, performing bug-fixes, and scaling up." }
  ];

  const testimonials = [
    {
      quote: "SakDha delivered our complex web platform 2 weeks ahead of schedule. Their development speed is remarkable, but their attention to detail and rigorous testing is what blew us away.",
      author: "Sarah Jenkins",
      role: "CTO, SaaSify Labs",
      rating: 5
    },
    {
      quote: "MyBoutiqueManager has completely transformed our retail business. Billing is twice as fast, stock counts are automated, and cloud backup keeps our data safe. Best investment we made this year.",
      author: "Aditi Sharma",
      role: "Founder, Label Aditi",
      rating: 5
    },
    {
      quote: "Their QA automation services are world-class. SakDha's team caught critical edge cases and API security concerns in our system before it went live to 50k users. Unbelievably thorough.",
      author: "Michael Vance",
      role: "VP of Engineering, FinFlow Inc",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "What types of custom development do you specialize in?",
      answer: "We specialize in modern web apps (using React and Next.js), enterprise systems, cloud-native platforms, API integrations, and robust boutique management tools like MyBoutiqueManager."
    },
    {
      question: "How does your QA & Testing process work?",
      answer: "We offer both standalone and integrated QA. Our process starts with manual testing of user stories, followed by API validation using Postman, automation scripts using Playwright or Selenium, regression checks, and performance load testing."
    },
    {
      question: "Can we hire a dedicated developer or QA team?",
      answer: "Yes, we offer flexible engagement models. You can hire dedicated developer/QA teams on a monthly retainer, or partner with us for project-based development."
    },
    {
      question: "What is MyBoutiqueManager and who is it for?",
      answer: "MyBoutiqueManager is our proprietary, all-in-one cloud platform built specifically for fashion boutiques, custom tailors, and designers. It streamlines inventory, billing (including GST), customer tracking, tailors/orders management, and metrics analysis."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <div className="relative min-h-screen">
      <GridBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-28 overflow-hidden">
        {/* Floating gradient decorative shapes */}
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[90px] animate-pulse-slow pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-accent/15 blur-[120px] animate-slow-spin pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-6 cursor-default"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Introducing 2026 Digital Engineering Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-none text-foreground max-w-5xl mx-auto"
          >
            Building Digital Products That{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Drive Business Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            SakDha delivers custom software development, web applications, quality assurance, and scalable digital solutions that help startups and enterprises grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border/50 glass hover:bg-muted/50 text-foreground text-base font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Book Consultation</span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20 flex justify-center"
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            Our Core Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            We provide full-lifecycle engineering, from stunning visual designs to highly secure backend infrastructures and rigorous QA automation.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <GlowCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/10">
                    {service.techs.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-primary-hover group"
          >
            <span>Explore all capabilities</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Choose SakDha Section */}
      <section className="py-24 border-t border-border/40 bg-card/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
              Why Partner With SakDha?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              We align modern architectures, rigorous QA automation pipelines, and transparent pricing to build products clients love.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl border border-border/40 bg-background/50 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {reason.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            Our Agile Engineering Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            From scoping to 24/7 post-release support, we ensure zero communication gaps and premium code.
          </p>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden lg:grid grid-cols-7 gap-4 relative">
          <div className="absolute top-[30px] left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent -z-10 opacity-30" />
          
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center relative group"
            >
              {/* Timeline dot */}
              <div className="w-14 h-14 rounded-full bg-card border-2 border-border text-foreground flex items-center justify-center font-heading font-bold text-lg mx-auto mb-6 group-hover:border-primary group-hover:scale-105 transition-all shadow-md">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.name}
              </h3>
              <p className="text-xs text-muted-foreground px-2 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline Mobile */}
        <div className="lg:hidden space-y-8 relative pl-6 border-l-2 border-border/80">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative"
            >
              <div className="absolute -left-[39px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center" />
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-extrabold text-primary uppercase">{step.step}</span>
                <h3 className="font-heading font-bold text-lg text-foreground">{step.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 border-t border-border/40 bg-card/25 backdrop-blur-xs relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
              Featured Product Spotlight
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              A glimpse of SaaS products built in-house and deployed to clients.
            </p>
          </div>

          <GlowCard className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold uppercase tracking-wider">
                  <span>Fashion Retail ERP</span>
                </div>
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground">
                  MyBoutiqueManager
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  An all-in-one boutique management platform designed to simplify inventory management, GST billing, customer management, order tracking, sales reporting, and operations for boutique owners.
                </p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Inventory Control",
                    "Sales & Invoicing",
                    "GST Invoicing support",
                    "Customer Loyalty CRM",
                    "Order Tailor Tracker",
                    "Multi-user Roles",
                    "Analytics & Graphs",
                    "Cloud Backup & Sync"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/products"
                    className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-all shadow-md shadow-primary/10 flex items-center justify-center space-x-1.5 group cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full border border-border/50 glass hover:bg-muted/50 text-foreground text-sm font-bold transition-all flex items-center justify-center cursor-pointer"
                  >
                    <span>Book Demo</span>
                  </Link>
                </div>
              </div>

              {/* Product Dashboard Visual Preview */}
              <div className="relative">
                {/* Background glow behind dashboard */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/15 blur-2xl rounded-3xl" />
                
                {/* Simulated Web Dashboard UI */}
                <div className="relative border border-border/60 rounded-2xl bg-card p-6 shadow-2xl space-y-6">
                  {/* Window Controls */}
                  <div className="flex items-center justify-between border-b border-border/40 pb-4">
                    <div className="flex space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="text-xs font-semibold text-muted-foreground bg-muted/50 px-4 py-1 rounded-md">
                      myboutiquemanager.com/dashboard
                    </div>
                    <div className="w-8" />
                  </div>

                  {/* Header Row */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Sales Report</h4>
                      <p className="text-[10px] text-muted-foreground">July 2026</p>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                      +18.4%
                    </span>
                  </div>

                  {/* Graph Columns */}
                  <div className="h-32 flex items-end justify-between gap-2.5 pt-4">
                    {[35, 60, 45, 80, 55, 95, 70, 110, 85].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`w-full rounded-t-md ${
                            idx === 7 ? "bg-primary shadow-lg shadow-primary/30" : "bg-muted-foreground/20 dark:bg-muted/30"
                          }`}
                        />
                        <span className="text-[8px] font-medium text-muted-foreground">W{idx + 1}</span>
                      </div>
                    ))}
                  </div>

                  {/* Cards inside dashboard */}
                  <div className="grid grid-cols-3 gap-3 border-t border-border/40 pt-4">
                    <div className="p-3 bg-muted/40 rounded-xl">
                      <span className="text-[8px] font-bold text-muted-foreground uppercase">Inventory</span>
                      <p className="text-sm font-bold mt-1 text-foreground">1,248 pcs</p>
                    </div>
                    <div className="p-3 bg-muted/40 rounded-xl">
                      <span className="text-[8px] font-bold text-muted-foreground uppercase">Orders</span>
                      <p className="text-sm font-bold mt-1 text-foreground">42 Active</p>
                    </div>
                    <div className="p-3 bg-muted/40 rounded-xl">
                      <span className="text-[8px] font-bold text-muted-foreground uppercase">Revenue</span>
                      <p className="text-sm font-bold mt-1 text-foreground">$12.4K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Testimonials Section (Hidden as of now) */}
      {/*
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Read stories of business scalability and engineering excellence directly from our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border/40 bg-background/50 hover:bg-card/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground leading-relaxed mb-6">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-border/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm uppercase">
                  {test.author.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{test.author}</h4>
                  <p className="text-[10px] text-muted-foreground">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Statistics Section */}
      <section className="py-20 border-t border-border/40 bg-primary/5 dark:bg-primary/2 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">
                <AnimatedCounter value={50} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm font-bold text-muted-foreground mt-2 uppercase tracking-wider">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">
                <AnimatedCounter value={20} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm font-bold text-muted-foreground mt-2 uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">
                <AnimatedCounter value={5} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm font-bold text-muted-foreground mt-2 uppercase tracking-wider">
                In-house Products
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">
                <AnimatedCounter value={99} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm font-bold text-muted-foreground mt-2 uppercase tracking-wider">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Find answers to common questions about our technical scoping, development process, and support services.
          </p>
        </div>

        <FAQ items={faqItems} />
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/40 bg-card/25 backdrop-blur-xs relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Partner with SakDha to launch secure, scalable, and responsive custom applications. Let's discuss your roadmap today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center space-x-2 group cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-border/50 glass hover:bg-muted/50 text-foreground text-base font-bold transition-all flex items-center justify-center cursor-pointer"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
