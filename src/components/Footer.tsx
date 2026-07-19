"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/BrandIcons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-heading font-extrabold text-2xl tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SakDha
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Building Digital Solutions That Power Modern Businesses. We help startups, SMEs, and enterprises transform ideas into scalable digital products.
            </p>
            
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-2.5 rounded-l-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground"
                />
                <button
                  type="submit"
                  className="px-4 rounded-r-xl bg-primary hover:bg-primary-hover text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  {subscribed ? <CheckCircle2 className="h-5 w-5 text-emerald-400" /> : <ArrowRight className="h-5 w-5" />}
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-500 font-medium animate-pulse">Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#qa-testing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  QA Testing
                </Link>
              </li>
              <li>
                <Link href="/services#uiux-design" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#api-integration" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  API Integration
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance-support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Products</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link href="/products#myboutiquemanager" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                  MyBoutiqueManager
                </Link>
              </li>
            </ul>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-border/45 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} SakDha. All rights reserved. Built with precision for the modern web.
          </p>
          {/* Social Icons (Hidden as of now) */}
          {/*
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}
