"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  ShieldAlert,
  Layers,
  Link as LinkIcon,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers3,
  Flame,
  Check,
  Code
} from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function Services() {
  const servicesList = [
    {
      id: "web-development",
      title: "Custom Web Application Development",
      description: "We build scalable, low-latency web platforms, enterprise software, and custom business applications that support large traffic volumes and drive conversions.",
      features: [
        "Server-Side Rendering (SSR) & Static Generation",
        "Type-Safe code architectures",
        "Responsive fluid grids",
        "Custom administrative panels & user portals"
      ],
      benefits: [
        "90+ Lighthouse performance scores out of the box",
        "Highly secure database connections and endpoints",
        "Scalable architectures optimized for AWS/Vercel serverless"
      ],
      techs: ["React 19", "Next.js 15", "TypeScript", "NodeJS", "NestJS", "PostgreSQL"],
      illustration: "web-dev"
    },
    {
      id: "qa-testing",
      title: "QA & Software Testing Services",
      description: "Ensure your software is stable, bug-free, and secure. We offer comprehensive manual and automated end-to-end validation across browsers and mobile systems.",
      features: [
        "E2E automated testing scripts",
        "API functional & edge-case testing",
        "Security validation & vulnerability checkups",
        "Performance stress load testing"
      ],
      benefits: [
        "Catch critical logical errors before production deploy",
        "Eliminate manual testing bottlenecks with CI/CD scripts",
        "Ensure layout stability across safari, chrome, iOS, and android"
      ],
      techs: ["Playwright", "Selenium", "Postman", "JMeter", "Appium", "GitHub Actions"],
      illustration: "qa-testing"
    },
    {
      id: "uiux-design",
      title: "UI/UX & Interface Design",
      description: "We craft modern, premium user interfaces that reduce interaction complexity, build trust, and reflect brand quality.",
      features: [
        "High-fidelity responsive UI mockups",
        "Design systems & component documentation",
        "User flow maps & visual storyboarding",
        "Interactive animation designs"
      ],
      benefits: [
        "Reduce user onboarding friction",
        "Establish cohesive modern brand aesthetics",
        "Optimized layout hierarchy for high conversion rates"
      ],
      techs: ["Figma", "Adobe Suite", "Tailwind CSS", "Prototyping", "Design System"],
      illustration: "ui-ux"
    },
    {
      id: "api-integration",
      title: "Custom API Integration",
      description: "Connect your core system with popular payment gateways, inventory platforms, CRMs, and third-party accounting applications.",
      features: [
        "Secure Stripe, PayPal & Adyen gateways",
        "Salesforce, HubSpot & ERP data sync",
        "Webhooks and real-time database relays",
        "Custom REST and GraphQL wrapper creation"
      ],
      benefits: [
        "Automate manual business reports and billing syncs",
        "Secure auth structures using OAuth 2.0 & JWT token layers",
        "Low-latency data synchronization without rate-limiting issues"
      ],
      techs: ["REST API", "GraphQL", "Webhooks", "Stripe SDK", "OAuth2", "JSON/XML"],
      illustration: "api"
    },
    {
      id: "maintenance-support",
      title: "Website Maintenance & 24/7 Support",
      description: "Periodic server optimizations, bug fixing, dependencies updates, and feature upgrades to ensure continuous project health.",
      features: [
        "24/7 active application monitoring",
        "Continuous security patch implementation",
        "Database defragmentation & cleaning",
        "CI/CD pipeline and server scale maintenance"
      ],
      benefits: [
        "Guaranteed 99.9% uptime SLA options",
        "Rapid bug patching via direct engineer channels",
        "Ensure system package versions remain modern and secure"
      ],
      techs: ["AWS EC2/RDS", "Docker", "Sentry", "NewRelic", "Terraform", "Linux"],
      illustration: "maintenance"
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
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <span>Our Service Capabilities</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground"
          >
            Custom Engineering for the{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Modern Enterprise
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Explore our end-to-end software development and quality assurance services. We build secure, reliable, and user-centric products using high-velocity agile sprints.
          </motion.p>
        </div>
      </section>

      {/* Services Grid List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {servicesList.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-border/20 first:border-0`}
            >
              {/* Service Info */}
              <div className={`space-y-6 ${!isEven ? "lg:order-2" : ""}`}>
                <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-foreground">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features & Benefits */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Core Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-foreground/90 font-medium">
                          <Check className="h-4 w-4 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Business Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techs.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-muted text-foreground border border-border/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-all shadow-md shadow-primary/10 flex items-center justify-center sm:inline-flex space-x-1.5 group cursor-pointer"
                  >
                    <span>Request Quote for {service.title.split(" ").slice(-1)[0]}</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Service Mockup Illustration */}
              <div className={`relative ${!isEven ? "lg:order-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/10 blur-xl rounded-3xl" />
                <GlowCard className="p-6">
                  {service.illustration === "web-dev" && (
                    <div className="bg-card/50 rounded-xl p-4 border border-border/40 space-y-4">
                      <div className="flex items-center space-x-1.5 border-b border-border/30 pb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <div className="font-mono text-xs space-y-2 text-muted-foreground">
                        <p className="text-primary font-bold">// Next.js App Router Structure</p>
                        <p className="text-foreground"><span className="text-purple-400">export default async function</span> <span className="text-blue-400">Page</span>() &#123;</p>
                        <p className="pl-4">const data = await <span className="text-yellow-400">fetchData</span>();</p>
                        <p className="pl-4">return &lt;<span className="text-teal-400">Dashboard</span> data=&#123;data&#125; /&gt;;</p>
                        <p className="text-foreground">&#125;</p>
                      </div>
                      <div className="p-4 bg-muted/40 rounded-xl flex items-center justify-between">
                        <span className="text-xs font-bold text-foreground">API status check</span>
                        <span className="text-[10px] font-extrabold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded">200 OK</span>
                      </div>
                    </div>
                  )}

                  {service.illustration === "qa-testing" && (
                    <div className="bg-card/50 rounded-xl p-4 border border-border/40 space-y-4">
                      <div className="flex justify-between items-center border-b border-border/30 pb-3">
                        <span className="text-xs font-bold text-foreground">Automation Run Results</span>
                        <span className="text-[9px] font-bold text-muted-foreground uppercase">Playwright</span>
                      </div>
                      <div className="font-mono text-xs space-y-1.5">
                        <div className="flex justify-between items-center text-emerald-500">
                          <span>✓ login_with_valid_credentials</span>
                          <span className="text-[10px]">12ms</span>
                        </div>
                        <div className="flex justify-between items-center text-emerald-500">
                          <span>✓ add_item_to_checkout_cart</span>
                          <span className="text-[10px]">48ms</span>
                        </div>
                        <div className="flex justify-between items-center text-emerald-500">
                          <span>✓ verify_api_endpoint_payload</span>
                          <span className="text-[10px]">15ms</span>
                        </div>
                        <div className="flex justify-between items-center text-rose-500 border-y border-rose-500/10 py-1">
                          <span>✗ session_expiry_timer_retrigger</span>
                          <span className="text-[10px] font-bold underline">Fixed in PR #42</span>
                        </div>
                      </div>
                      <div className="p-3 bg-emerald-500/5 rounded-xl flex items-center justify-between text-xs text-emerald-500 font-bold border border-emerald-500/10">
                        <span>All Tests Passed after rebuild</span>
                        <span>100%</span>
                      </div>
                    </div>
                  )}

                  {service.illustration === "ui-ux" && (
                    <div className="bg-card/50 rounded-xl p-6 border border-border/40 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-muted-foreground uppercase">Design Token Swatch</span>
                        <Layers3 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white text-[10px] font-bold">#2563EB</div>
                        <div className="w-10 h-10 rounded-xl bg-secondary shadow-lg shadow-secondary/20 flex items-center justify-center text-white text-[10px] font-bold">#06B6D4</div>
                        <div className="w-10 h-10 rounded-xl bg-accent shadow-lg shadow-accent/20 flex items-center justify-center text-white text-[10px] font-bold">#7C3AED</div>
                      </div>
                      {/* Grid layouts mock */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-10 bg-muted/50 rounded-lg border border-dashed border-border" />
                        <div className="h-10 bg-muted/50 rounded-lg border border-dashed border-border" />
                        <div className="h-10 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">Active</div>
                      </div>
                    </div>
                  )}

                  {service.illustration === "api" && (
                    <div className="bg-card/50 rounded-xl p-4 border border-border/40 space-y-4">
                      <div className="flex justify-between items-center border-b border-border/30 pb-3">
                        <span className="text-xs font-bold text-foreground">API Sync Status</span>
                        <LinkIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-2.5 bg-muted/30 rounded-lg text-xs">
                          <span className="font-semibold text-foreground">Stripe Gateway</span>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-extrabold">Active</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 bg-muted/30 rounded-lg text-xs">
                          <span className="font-semibold text-foreground">Salesforce ERP Sync</span>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-extrabold">Active</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 bg-muted/30 rounded-lg text-xs">
                          <span className="font-semibold text-foreground">AWS Cloud Sync</span>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded font-extrabold">Active</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.illustration === "maintenance" && (
                    <div className="bg-card/50 rounded-xl p-4 border border-border/40 space-y-4">
                      <div className="flex justify-between items-center border-b border-border/30 pb-3">
                        <span className="text-xs font-bold text-foreground">System Health Metrics</span>
                        <span className="text-[10px] font-bold text-emerald-500">Live</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-muted/40 rounded-xl text-center">
                          <span className="text-[9px] font-bold text-muted-foreground uppercase">Uptime</span>
                          <p className="text-base font-extrabold text-emerald-500 mt-1">99.98%</p>
                        </div>
                        <div className="p-3 bg-muted/40 rounded-xl text-center">
                          <span className="text-[9px] font-bold text-muted-foreground uppercase">Response Avg</span>
                          <p className="text-base font-extrabold text-foreground mt-1">72ms</p>
                        </div>
                      </div>
                    </div>
                  )}
                </GlowCard>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
