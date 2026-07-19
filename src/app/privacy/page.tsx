"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Globe, ArrowLeft } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen">
      <GridBackground />

      {/* Header / Hero */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:text-primary-hover transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider mb-2"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Legal & Data Protection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl text-foreground"
          >
            Privacy Policy
          </motion.h1>

          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Effective Date: July 18, 2026
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="py-8 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlowCard className="p-8 sm:p-12 space-y-10 leading-relaxed text-sm text-foreground/90">
          <div>
            <h2 className="font-heading font-bold text-xl text-foreground mb-3">Privacy Policy for SakDha</h2>
            <p className="text-muted-foreground leading-relaxed">
              At <strong>SakDha</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our products.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              By accessing our website or using our services, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 1 */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-primary">1. Information We Collect</h3>
            <p className="text-muted-foreground">We may collect the following information:</p>

            <div className="space-y-4 pt-2">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground list-disc list-inside">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Job Title</li>
                  <li>Billing Information</li>
                  <li>Communication Preferences</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground list-disc list-inside">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Device Information</li>
                  <li>Operating System</li>
                  <li>Pages Visited</li>
                  <li>Date and Time of Access</li>
                  <li>Cookies and Analytics Data</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Information You Provide</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground list-disc list-inside">
                  <li>Contact form submissions</li>
                  <li>Support requests</li>
                  <li>Project requirements</li>
                  <li>Career applications</li>
                  <li>Product feedback</li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-border/40" />

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">2. How We Use Your Information</h3>
            <p className="text-muted-foreground">We use your information to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground list-disc list-inside pt-1">
              <li>Respond to inquiries</li>
              <li>Provide requested services</li>
              <li>Manage client projects</li>
              <li>Deliver software products</li>
              <li>Improve our website and services</li>
              <li>Process payments</li>
              <li>Send important updates</li>
              <li>Provide customer support</li>
              <li>Maintain security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">3. Cookies</h3>
            <p className="text-muted-foreground">Our website may use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pt-1">
              <li>Improve website functionality</li>
              <li>Remember user preferences</li>
              <li>Analyze website traffic</li>
              <li>Enhance user experience</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-2">
              You may disable cookies through your browser settings; however, some website features may not function properly.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">4. Data Sharing</h3>
            <p className="text-muted-foreground font-semibold">We do not sell your personal information.</p>
            <p className="text-muted-foreground">We may share information with:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pt-1">
              <li>Trusted service providers</li>
              <li>Cloud hosting providers</li>
              <li>Payment processors</li>
              <li>Analytics providers</li>
              <li>Legal authorities where required by law</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              All third parties are expected to maintain appropriate security measures.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">5. Data Security</h3>
            <p className="text-muted-foreground">
              We implement reasonable administrative, technical, and organizational safeguards to protect your personal information. While we strive to use commercially acceptable security practices, no method of electronic transmission or storage is completely secure.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 6 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">6. Data Retention</h3>
            <p className="text-muted-foreground">We retain personal information only for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pt-1">
              <li>Provide our services</li>
              <li>Meet legal requirements</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* Section 7 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">7. Your Rights</h3>
            <p className="text-muted-foreground">Depending on applicable law, you may have the right to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground list-disc list-inside pt-1">
              <li>Access your information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion</li>
              <li>Restrict processing</li>
              <li>Withdraw consent where applicable</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="text-xs text-muted-foreground pt-2">
              To exercise these rights, please contact us.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 8 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">8. Third-Party Services</h3>
            <p className="text-muted-foreground">
              Our website or products may contain links to third-party websites or integrate with third-party services. We are not responsible for their privacy practices or content.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 9 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">9. Children's Privacy</h3>
            <p className="text-muted-foreground">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 10 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">10. Changes to This Privacy Policy</h3>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically. Changes become effective when posted on this page with an updated effective date.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 11 */}
          <div className="space-y-4 pt-2">
            <h3 className="font-heading font-bold text-lg text-primary">11. Contact Us</h3>
            <p className="text-muted-foreground">
              For any questions regarding this Privacy Policy, please contact us.
            </p>

            <div className="p-5 rounded-2xl bg-muted/40 border border-border/50 space-y-2">
              <h4 className="font-heading font-bold text-base text-foreground">SakDha</h4>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>Email: </span>
                <a href="mailto:contact@sakdha.com" className="text-primary hover:underline font-semibold">
                  contact@sakdha.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Globe className="h-4 w-4 text-secondary" />
                <span>Website: </span>
                <a href="http://www.sakdha.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                  www.sakdha.com
                </a>
              </div>
            </div>
          </div>
        </GlowCard>
      </section>
    </div>
  );
}
