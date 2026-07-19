"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Mail, Globe, ArrowLeft } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";
import { GridBackground } from "@/components/GridBackground";

export default function TermsAndConditions() {
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
            <Scale className="h-3.5 w-3.5" />
            <span>Terms of Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl text-foreground"
          >
            Terms & Conditions
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
            <h2 className="font-heading font-bold text-xl text-foreground mb-3">Terms and Conditions for SakDha</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions govern your access to and use of the SakDha website, products, and services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              By accessing or using our website or services, you agree to these Terms.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">1. Services</h3>
            <p className="text-muted-foreground">SakDha provides technology services including, but not limited to:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground list-disc list-inside pt-1">
              <li>Custom Software Development</li>
              <li>Web Application Development</li>
              <li>Quality Assurance Testing</li>
              <li>Software Testing Services</li>
              <li>Technical Consulting</li>
              <li>SaaS Products</li>
              <li>Product Maintenance and Support</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">2. Project Engagement</h3>
            <p className="text-muted-foreground">
              Project timelines, deliverables, pricing, and milestones will be governed by separate proposals, quotations, or service agreements where applicable.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">3. User Responsibilities</h3>
            <p className="text-muted-foreground">You agree to:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pt-1">
              <li>Provide accurate information</li>
              <li>Use our services lawfully</li>
              <li>Protect your account credentials</li>
              <li>Not misuse our website or products</li>
              <li>Not interfere with system security or operations</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">4. Intellectual Property</h3>
            <p className="text-muted-foreground">Unless otherwise agreed in writing:</p>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground pt-1">
              <li>SakDha retains ownership of its proprietary tools, software frameworks, methodologies, branding, and website content.</li>
              <li>Clients retain ownership of content and materials they provide.</li>
              <li>Ownership of custom-developed software will be governed by the applicable project agreement.</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">5. Payments</h3>
            <p className="text-muted-foreground">
              Clients agree to make payments according to the agreed quotation or contract.
            </p>
            <p className="text-xs text-muted-foreground pt-1">Late payments may result in:</p>
            <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pt-0.5">
              <li>Suspension of services</li>
              <li>Delayed project delivery</li>
              <li>Additional fees where permitted by law</li>
            </ul>
          </div>

          <hr className="border-border/40" />

          {/* Section 6 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">6. Confidentiality</h3>
            <p className="text-muted-foreground">
              Both parties agree to maintain the confidentiality of non-public information shared during the course of the engagement, except where disclosure is required by law.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 7 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">7. Warranties</h3>
            <p className="text-muted-foreground">
              We aim to deliver services with reasonable skill and care. Except where required by law or expressly agreed, services are provided on an "as is" and "as available" basis, without guarantees of uninterrupted operation or fitness for a particular purpose.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 8 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">8. Limitation of Liability</h3>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, SakDha shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities arising from the use of our website, products, or services.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 9 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">9. Third-Party Services</h3>
            <p className="text-muted-foreground">
              Our products or services may integrate with third-party platforms. SakDha is not responsible for the availability, security, or policies of those third-party services.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 10 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">10. Termination</h3>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate access to our website, products, or services if these Terms are violated or where required to protect our systems, users, or legal interests.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 11 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">11. Governing Law</h3>
            <p className="text-muted-foreground">
              These Terms shall be governed by and interpreted in accordance with the laws of <strong>India</strong>, without regard to conflict of law principles.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 12 */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-lg text-primary">12. Changes to These Terms</h3>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <hr className="border-border/40" />

          {/* Section 13 */}
          <div className="space-y-4 pt-2">
            <h3 className="font-heading font-bold text-lg text-primary">13. Contact Information</h3>

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
