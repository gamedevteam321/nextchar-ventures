import Footer from '@/components/Footer';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slider text-white">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-3xl font-bold mb-6">Privacy and Cookie Policy</h1>
        <p className="text-white-600 mb-6">Last Updated: 7th August 2024</p>
        
        <p className="mb-6">
          Welcome to Nexchar. Your privacy is important to us. This Privacy and Cookie Policy explains how we collect, use, and share information about you when you visit our website. This policy is designed to comply with the General Data Protection Regulation (GDPR) and other relevant European regulations.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Nexchar ("we", "us", "our") is committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This policy outlines how we collect, use, disclose, and protect your information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information Collection</h2>
          <h3 className="text-xl font-medium mb-2">Personal Information:</h3>
          <p className="mb-4">We collect personal information that you provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Register an account</li>
            <li>Place an order</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us</li>
          </ul>
          <p className="mb-4">This information may include your name, email address, mailing address, phone number, and payment information.</p>

          <h3 className="text-xl font-medium mb-2">Automatically Collected Information:</h3>
          <p className="mb-4">When you visit Nexchar, we may collect information automatically through cookies and similar technologies, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit</li>
            <li>Time and date of your visit</li>
            <li>Referring URL</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Use of Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and manage our services</li>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you, including sending newsletters and promotional materials</li>
            <li>Personalize your experience on our website</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service Providers: Third-party companies that perform services on our behalf, such as payment processing, shipping, and email distribution.</li>
            <li>Business Partners: Trusted partners for marketing and promotional purposes, in compliance with applicable laws.</li>
            <li>Legal Requirements: Authorities or legal bodies if required by law or to protect our rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <h3 className="text-xl font-medium mb-2">What are Cookies?</h3>
          <p className="mb-4">Cookies are small text files stored on your device that help us enhance your experience on Nexchar. We use the following types of cookies:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential Cookies: Necessary for the website to function properly.</li>
            <li>Performance Cookies: Help us understand how visitors use our website.</li>
            <li>Functionality Cookies: Remember your preferences and settings.</li>
            <li>Targeting Cookies: Used for advertising purposes.</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">Managing Cookies</h3>
          <p>You can manage or disable cookies through your browser settings. However, please note that disabling cookies may affect the functionality of our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. User Rights</h2>
          <p className="mb-4">Under the GDPR, you have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access: You can request a copy of the personal data we hold about you.</li>
            <li>Correction: You can request correction of any inaccurate or incomplete data.</li>
            <li>Deletion: You can request the deletion of your personal data.</li>
            <li>Restriction: You can request the restriction of processing your personal data.</li>
            <li>Portability: You can request the transfer of your data to another organization.</li>
            <li>Objection: You can object to the processing of your data for certain purposes.</li>
          </ul>
          <p>To exercise these rights, please contact us at: <a href="mailto:info@nexcharventures.com" className="text-blue-600 hover:underline">info@nexcharventures.com</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, or misuse. These measures include encryption, access controls, and regular security assessments.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to read their privacy policies before providing any personal information.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to the Policy</h2>
          <p>We may update this policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website and updating the date at the top of this page.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
          <p>If you have any questions or concerns about this policy or our data practices, please contact us at: <a href="mailto:info@nexcharventures.com" className="text-blue-600 hover:underline">info@nexcharventures.com</a></p>
        </section>

        
      </div>

      <Footer />
    </div>
  );
} 