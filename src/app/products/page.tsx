"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Package,
  FileText,
  Scissors,
  Users,
  BarChart3,
  DollarSign,
  UserCheck,
  CloudLightning,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  CreditCard,
  Sliders,
  Lock,
  User,
  Smartphone,
  Globe,
  ChevronRight
} from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function Products() {
  const [activeTab, setActiveTab] = useState<"measurements" | "orders" | "spooler" | "analytics">("measurements");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const atelierFeatures = [
    {
      icon: Layers,
      name: "Order Registry",
      desc: "Manage custom lehengas, suits, blouses with integrated progress logs, fitting dates, and status tracking."
    },
    {
      icon: CreditCard,
      name: "Billing & Receipts",
      desc: "Generate professional custom spools, print receipts, and track deposits, advances, and pending ledgers."
    },
    {
      icon: Scissors,
      name: "Measurement Library",
      desc: "Store and customize client measurements with dynamic templates for different apparel and fitting styles."
    },
    {
      icon: Sliders,
      name: "Designer Workspace",
      desc: "Assign tailoring works at item levels to specific design experts and monitor live status changes."
    },
    {
      icon: BarChart3,
      name: "Income Analytics",
      desc: "Analyze business metrics, revenue summaries, collections, outstanding payments, and GST tax filings."
    },
    {
      icon: Lock,
      name: "Strict Tenant Isolation",
      desc: "Keep all client configurations, directories, and roles partition-secured using database RLS policies."
    },
    {
      icon: User,
      name: "Role Configurations",
      desc: "Specify allowed screens and system capabilities for store tailors, managers, cutting masters, or salesmen."
    },
    {
      icon: Smartphone,
      name: "Anytime Cloud Spooling",
      desc: "Access your design patterns and customer logs seamlessly from any desktop, tablet, or smartphone."
    }
  ];

  const valueProps = [
    {
      badge: "No More Bill Books",
      title: "Zero Paperwork",
      desc: "Digitalize customer records, design files, measurements, and order details inside one secure cloud registry."
    },
    {
      badge: "Due Date Spooler",
      title: "Never Miss Delivery",
      desc: "Track scheduling, order statuses, and due dates effortlessly. Deliver custom garments exactly on promise."
    },
    {
      badge: "High-Fashion CRM",
      title: "Premium Customer Care",
      desc: "Keep records of design templates, custom fittings, payment histories, and preferences per customer."
    }
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "₹0",
      period: "month",
      desc: "For independent tailors getting started.",
      features: [
        "50 Customers Registry",
        "1 Employee Account",
        "25 Inventory Items Catalog",
        "100 Stitching Orders / Mo",
        "25 Custom Design Profiles",
        "Assign Designer Module"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Basic",
      price: "₹199",
      period: "month",
      desc: "For growing boutique stores & custom ateliers.",
      features: [
        "150 Customers Registry",
        "5 Employee Accounts",
        "75 Inventory Items Catalog",
        "Unlimited Stitching Orders",
        "75 Custom Design Profiles",
        "Assign Designer Module"
      ],
      cta: "Go Basic",
      popular: true
    },
    {
      name: "Pro",
      price: "₹249",
      period: "month",
      desc: "For larger ateliers needing calendar schedules.",
      features: [
        "Unlimited Customers Registry",
        "15 Employee Accounts",
        "150 Inventory Items Catalog",
        "Unlimited Stitching Orders",
        "150 Custom Design Profiles",
        "Interactive Order Calendar",
        "Payments Ledger & Review"
      ],
      cta: "Go Pro",
      popular: false
    },
    {
      name: "Premium",
      price: "₹299",
      period: "month",
      desc: "The ultimate power plan with full reporting.",
      features: [
        "Unlimited Customers Registry",
        "Unlimited Employees & Staff",
        "Unlimited Inventory Catalog",
        "Unlimited Stitching Orders",
        "Unlimited Design Profiles",
        "Interactive Order Calendar",
        "Payments Ledger & Review",
        "Advanced Reports & Analytics"
      ],
      cta: "Go Premium",
      popular: false
    }
  ];

  const faqs = [
    {
      q: "What is tailoring business management software?",
      a: "Tailoring business management software is a specialized cloud platform designed to digitize custom tailoring operations. It manages customer measurements, order statuses, tailor assignments, thermal billing, GST invoicing, and inventory from a single centralized dashboard."
    },
    {
      q: "Is it suitable for custom boutiques with multiple designers?",
      a: "Yes! MyBoutiqueManager is specifically engineered for multi-designer ateliers and boutiques. You can assign specific garments or alteration tasks to individual tailors or cutting masters and track progress in real-time."
    },
    {
      q: "How does the system ensure data isolation for my boutique?",
      a: "Our architecture utilizes strict Row-Level Security (RLS) policies and tenant-isolated databases. Your boutique's measurement sheets, client lists, and financial logs are completely segregated and encrypted."
    },
    {
      q: "Can I try the system before committing?",
      a: "Absoluty. We offer a 14-day free trial with no credit card required so you can experience the live atelier simulator and test all features firsthand."
    }
  ];

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
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 text-secondary text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <Scissors className="h-3.5 w-3.5" />
            <span>High-End Tailoring Software</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground"
          >
            Scale Your Boutique. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Not Your Workload.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <strong>MyBoutiqueManager</strong> is the ultimate boutique management software and tailor shop management system that digitizes custom tailoring from customer measurements to receipt spools, built exclusively for modern ateliers, garment shops, and fashion labels.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground font-bold uppercase tracking-wider pt-2">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Free Trial</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>No Card Required</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Cancel Anytime</span>
            </span>
          </div>
        </div>
      </section>

      {/* Product Highlight: MyBoutiqueManager Main Overview */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="myboutiquemanager">
        <div className="space-y-20">
          
          {/* 3 Core Value Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => (
              <GlowCard key={idx} className="p-8 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary block">
                  {prop.badge}
                </span>
                <h3 className="font-heading font-bold text-xl text-foreground">{prop.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{prop.desc}</p>
              </GlowCard>
            ))}
          </div>

          {/* Interactive Atelier Workspace Simulator Section */}
          <div className="space-y-8 bg-card/40 border border-border/50 rounded-3xl p-6 sm:p-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-foreground">
                Features Tailored for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ateliers</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Click through our interactive workspace decks to preview how we help streamline custom tailoring workflows.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center border-b border-border/40 pb-3 gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: "measurements", label: "Measurements" },
                { id: "orders", label: "Tailor Queue" },
                { id: "spooler", label: "Thermal Spooler" },
                { id: "analytics", label: "Income Analytics" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "border border-border/40 glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Interactive Tab Panel */}
            <GlowCard className="p-6 bg-card min-h-[340px] max-w-4xl mx-auto flex flex-col justify-between">
              {activeTab === "measurements" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Measurement Coordinate Sheet</h4>
                      <p className="text-[10px] text-muted-foreground">Client: Priyanka Sharma (Custom Bridal Lehenga)</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      Active Profile
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Chest / Bust</span>
                      <span className="font-extrabold text-foreground text-sm">36.5 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Waist</span>
                      <span className="font-extrabold text-foreground text-sm">30.0 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Hips</span>
                      <span className="font-extrabold text-foreground text-sm">39.5 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Waist to Knee</span>
                      <span className="font-extrabold text-foreground text-sm">24.0 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Neck Front</span>
                      <span className="font-extrabold text-foreground text-sm">7.0 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Sleeve Length</span>
                      <span className="font-extrabold text-foreground text-sm">18.5 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Arm Hole</span>
                      <span className="font-extrabold text-foreground text-sm">15.0 in</span>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl border border-border/30">
                      <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Shoulder Width</span>
                      <span className="font-extrabold text-foreground text-sm">14.5 in</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Live Tailor Queue & Assignment</h4>
                      <p className="text-[10px] text-muted-foreground">Order #2041 • Silk Evening Gown</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      In Progress
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-xl">
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-foreground">Cutting & Pattern Drafting</span>
                        <p className="text-[10px] text-muted-foreground">Assigned to: Master Ji (Unit A)</p>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-xl">
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-foreground">Hand Zardozi Stitching</span>
                        <p className="text-[10px] text-muted-foreground">Assigned to: Embroidery Specialist</p>
                      </div>
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                        Stitching
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/40 rounded-xl opacity-60">
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-foreground">Final Fitting & Dispatch</span>
                        <p className="text-[10px] text-muted-foreground">Pending Stitching Completion</p>
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground bg-muted p-1 rounded">
                        Queued
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "spooler" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <span className="text-xs font-bold text-foreground">Automated Thermal Receipt Spooler</span>
                    <span className="text-[10px] text-muted-foreground font-mono">BILL-2026-894</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono bg-muted/30 p-4 rounded-xl border border-border/20">
                    <div className="flex justify-between border-b border-border/20 pb-2 text-muted-foreground">
                      <span>CLIENT: Ananya Rao</span>
                      <span>DATE: 18-JUL-2026</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Custom Bridal Lehenga Set</span>
                      <span className="font-bold text-foreground">₹28,500.00</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-muted-foreground">
                      <span>CGST (2.5%)</span>
                      <span>₹712.50</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-muted-foreground">
                      <span>SGST (2.5%)</span>
                      <span>₹712.50</span>
                    </div>
                    <div className="flex justify-between border-t border-border/30 pt-2 font-extrabold text-sm text-foreground">
                      <span>GRAND TOTAL</span>
                      <span className="text-primary">₹29,925.00</span>
                    </div>
                    <div className="text-[9px] text-emerald-500 font-bold pt-1">
                      Advance Paid: ₹15,000.00 | Pending Ledger: ₹14,925.00
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <span className="text-xs font-bold text-foreground">Boutique Income & Growth Analytics</span>
                    <span className="text-[10px] text-emerald-500 font-extrabold flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>+24.8% monthly revenue growth</span>
                    </span>
                  </div>
                  <div className="h-32 flex items-end gap-3 pt-4">
                    {[45, 60, 50, 85, 75, 110, 95].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-primary/20 rounded-md relative h-24 flex items-end">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${val}%` }}
                            className="w-full bg-gradient-to-t from-primary via-secondary to-accent rounded-md"
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                        <span className="text-[8px] font-bold text-muted-foreground">M{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-border/20 flex justify-between items-center text-[10px] text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  <span>Encrypted RLS Database Isolation</span>
                </span>
                <span>MyBoutiqueManager Cloud Engine</span>
              </div>
            </GlowCard>
          </div>

          {/* Detailed 8 Atelier System Features Grid */}
          <div className="space-y-10 pt-12 border-t border-border/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-heading font-extrabold text-3xl text-foreground">
                Complete Atelier System Features
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Everything required to run professional custom tailoring, garment production, and boutique retail.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {atelierFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-border/40 bg-background/50 hover:bg-card/60 transition-all duration-300 shadow-sm space-y-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-heading font-bold text-base text-foreground">{feat.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Worldwide Serving Regions */}
          <div className="py-12 border-t border-b border-border/20 text-center space-y-4">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center justify-center space-x-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>Serving Creative Fashion Brands Worldwide</span>
            </h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-foreground">
              <span className="px-4 py-2 rounded-full bg-muted/40 border border-border/30">🇺🇸 United States</span>
              <span className="px-4 py-2 rounded-full bg-muted/40 border border-border/30">🇬🇧 United Kingdom</span>
              <span className="px-4 py-2 rounded-full bg-muted/40 border border-border/30">🇦🇪 United Arab Emirates</span>
              <span className="px-4 py-2 rounded-full bg-muted/40 border border-border/30">🇮🇳 India</span>
            </div>
          </div>

          {/* Pricing Tiers Section */}
          <div className="space-y-12" id="pricing">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-heading font-extrabold text-3xl text-foreground">Transparent, Flat Pricing</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                No setup fees or hidden surprises. Scale seamlessly as your boutique grows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border relative flex flex-col justify-between ${
                    tier.popular
                      ? "border-primary bg-primary/5 dark:bg-primary/2 shadow-2xl shadow-primary/10 scale-105"
                      : "border-border/60 bg-background/55"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      Most Popular
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-heading font-bold text-xl text-foreground">{tier.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1 min-h-[32px]">{tier.desc}</p>
                    </div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-heading font-extrabold text-foreground">{tier.price}</span>
                      <span className="text-xs text-muted-foreground">/{tier.period}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-center space-x-2 text-xs text-foreground/80">
                          <CheckCircle2 className="h-4.5 w-4.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <a
                      href="https://myboutiquemanager.com/register"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full text-center text-xs font-bold transition-all block ${
                        tier.popular
                          ? "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/10"
                          : "border border-border/50 glass hover:bg-muted/50 text-foreground"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-4xl mx-auto space-y-8 pt-8">
            <div className="text-center">
              <h3 className="font-heading font-extrabold text-3xl text-foreground">Frequently Asked Questions</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                Everything you need to know about MyBoutiqueManager software.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-border/40 rounded-2xl bg-background/50 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex justify-between items-center text-sm font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronRight
                        className={`h-4 w-4 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-muted-foreground leading-relaxed border-t border-border/20 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
