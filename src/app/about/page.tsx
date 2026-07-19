"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Eye,
  Award,
  Users,
  Target,
  Code2,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle,
  Lightbulb,
  Workflow
} from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function About() {
  const coreValues = [
    {
      icon: Target,
      title: "Quality First",
      desc: "We embed automated and manual QA in every phase of development, ensuring zero-defect deliverables."
    },
    {
      icon: Compass,
      title: "Innovation",
      desc: "Staying ahead of trends. We use Next.js, React, and server-side paradigms to build 2026-ready SaaS products."
    },
    {
      icon: Users,
      title: "Client-Centricity",
      desc: "Your success is our success. We integrate directly into client Slack channels for open, real-time collaboration."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Trust",
      desc: "Complete code transparency, documented specifications, and strict compliance with project deadlines."
    }
  ];

  const timelineEvents = [
    { year: "2021", title: "Foundation", desc: "SakDha was established with a focus on custom web development and QA testing." },
    { year: "2022", title: "QA Division Expansion", desc: "Launched dedicated QA Automation and API Testing teams, catering to international fintech startups." },
    { year: "2023", title: "Launch of MyBoutiqueManager", desc: "Incepted our boutique retail ERP platform, signing up over 50 boutique clients in the first 6 months." },
    { year: "2024", title: "Scale to Enterprise", desc: "Partnered with enterprise clients for full-cycle custom application engineering and heavy stress load testing." },
    { year: "2025", title: "Cloud Native Adaptations", desc: "Fully migrated all pipelines to Next.js App Router and serverless AWS architectures for maximum speed." },
    { year: "2026", title: "Future Vision", desc: "Expanding team scale, incorporating AI automation, and shipping products globally." }
  ];

  const team = [
    { name: "Dharshini M", role: "CEO & Co-Founder", bio: "Steering corporate vision, strategic growth, and operations at SakDha.", init: "DM" },
    { name: "Sakrateesh R", role: "Founder", bio: "Leading core technology architecture, software development, and product engineering.", init: "SR" },
    { name: "Balaji N", role: "QA Operation Lead", bio: "Directing quality assurance automation, testing frameworks, and delivery reliability across projects.", init: "BN" }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: Code2,
      techs: ["React 19", "Next.js 15 (App Router)", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
    },
    {
      category: "Backend & DB",
      icon: Cpu,
      techs: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      category: "QA & Automation",
      icon: ShieldCheck,
      techs: ["Playwright", "Selenium WebDriver", "Postman / RestAssured", "JMeter", "Appium", "CI/CD automated runs"]
    },
    {
      category: "DevOps & Cloud",
      icon: Workflow,
      techs: ["AWS (S3, EC2, Lambda)", "Docker", "Vercel / Netlify", "GitHub Actions", "Terraform", "Nginx"]
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
    hidden: { opacity: 0, y: 25 },
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
      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <span>Our Journey & Purpose</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-foreground"
          >
            Empowering Companies With{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Precision Engineering
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            SakDha was built on the core principle that software should not just run; it should scale, perform flawlessly, and delight users. We bridge the gap between creative visual design and bulletproof QA automation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlowCard className="p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-foreground">Our Mission</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To deliver premium, highly tested custom software products that optimize operations and accelerate growth for startups and mid-market organizations. We aim to remove technical friction so business owners can focus on core strategies.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-primary">
                <span>Driven by execution</span>
                <span>✦</span>
                <span>Measured by results</span>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlowCard className="p-8 h-full flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="font-heading font-extrabold text-2xl text-foreground">Our Vision</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To become a globally recognized tech partner for enterprise-grade digital development, renowned for our bulletproof QA standards, clean code structures, and our boutique retail operations solution, MyBoutiqueManager.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-secondary">
                <span>Shaping the future</span>
                <span>✦</span>
                <span>Building trust</span>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-t border-border/40 bg-card/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              The fundamental guidelines that drive our communication, our developer sprints, and our product design.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div key={idx} variants={itemVariants}>
                  <GlowCard className="h-full">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{val.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Company Journey Timeline */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            Our Journey So Far
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            From a two-developer workshop to an agile engineering firm working with international clients.
          </p>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative border-l-2 border-border/80 ml-4 md:ml-0 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-border/80">
          {timelineEvents.map((event, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:justify-between">
                {/* Connector dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:-translate-x-1/2" />
                
                {/* Year display */}
                <div className="pl-6 md:pl-0 md:w-1/2 md:pr-12 md:text-right flex items-center md:justify-end mb-2 md:mb-0">
                  <span className="font-heading font-extrabold text-2xl text-primary">{event.year}</span>
                </div>

                {/* Event Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="pl-6 md:pl-12 md:w-1/2 md:pr-0"
                >
                  <div className="p-6 rounded-2xl border border-border/40 bg-background/55 backdrop-blur-xs max-w-md shadow-md">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{event.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Stack Grid */}
      <section className="py-20 border-t border-border/40 bg-card/15 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
              Our Technology Stack
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              We leverage modern and robust developer tooling to deliver lightning-fast web, cloud, and QA solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border/40 bg-background/50 hover:bg-background/80 transition-colors shadow-sm"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground">{group.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.techs.map((tech, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-muted-foreground font-medium">
                        <span className="text-primary">•</span>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="team">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-foreground">
            Meet Our Leadership
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            The engineering minds steering our product development, QA standards, and operations workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl border border-border/40 bg-background/55 text-center group"
            >
              {/* Profile Circle Placeholder */}
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary font-heading font-extrabold text-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                {member.init}
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-1">{member.name}</h3>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards & Vision */}
      <section className="py-20 border-t border-border/40 bg-card/25 backdrop-blur-xs relative z-10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="flex justify-center text-amber-400 mb-2">
            <Award className="h-12 w-12 animate-bounce" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl text-foreground">Awards & Future Vision</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            While we take pride in our certifications, QA badges, and regional startup portfolio recognitions, our eyes are fixed firmly on the horizon. We are investing heavily in automated AI code analysis and LLM-assisted testing structures to bring client shipping times down to hours rather than weeks, with 100% test coverage.
          </p>
          <div className="pt-4 flex justify-center items-center space-x-6 text-xs text-muted-foreground font-semibold">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span>Certified Agile Studio</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
