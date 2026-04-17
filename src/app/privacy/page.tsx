import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Williams Capital Group privacy policy describing how we collect, use, and protect personal information submitted through our website.",
  alternates: { canonical: "https://wcapitalgroupllc.com/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="January 1, 2026">
      <p>
        Williams Capital Group, LLC (&quot;WCG,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) respects your privacy. This Privacy Policy explains what
        information we collect through{" "}
        <a href={SITE_CONFIG.url}>wcapitalgroupllc.com</a> (the
        &quot;Site&quot;), how we use it, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        When you submit an inquiry through our contact form, we collect
        information you provide voluntarily, which may include: your name, email
        address, telephone number, company or entity name, accredited-investor
        status, and the contents of your message.
      </p>
      <p>
        We also collect limited technical information automatically when you
        visit the Site, such as your IP address, browser type, device
        information, referring URL, and pages viewed. This information is used
        for security, analytics, and to improve the Site.
      </p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To respond to your inquiry and provide requested information</li>
        <li>To evaluate whether you may qualify as an accredited investor</li>
        <li>To maintain records of communications</li>
        <li>To improve, secure, and administer the Site</li>
        <li>To comply with legal, regulatory, and record-keeping obligations</li>
      </ul>
      <p>
        We do not sell your personal information. We do not use your information
        for third-party marketing.
      </p>

      <h2>3. Information Sharing</h2>
      <p>We may share your information only with:</p>
      <ul>
        <li>
          Our employees, affiliates, and service providers (such as hosting,
          analytics, and form-processing vendors) who assist us in operating the
          Site and responding to inquiries
        </li>
        <li>
          Professional advisors (legal, accounting, compliance) bound by
          confidentiality obligations
        </li>
        <li>
          Governmental or regulatory authorities when required by law, subpoena,
          or other legal process
        </li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain information only for as long as necessary to fulfill the
        purposes described above, comply with our legal obligations, resolve
        disputes, and enforce our agreements.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement commercially reasonable administrative, technical, and
        physical safeguards designed to protect your information. No method of
        transmission over the Internet or electronic storage is fully secure,
        however, and we cannot guarantee absolute security.
      </p>

      <h2>6. California Privacy Rights (CCPA / CPRA)</h2>
      <p>
        If you are a California resident, you have the right to:
      </p>
      <ul>
        <li>Know what personal information we collect and how it is used</li>
        <li>Request deletion of your personal information</li>
        <li>Request correction of inaccurate personal information</li>
        <li>Opt out of the sale or sharing of personal information (WCG does not sell or share personal information for cross-context behavioral advertising)</li>
        <li>Not be discriminated against for exercising your privacy rights</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        <a href={`mailto:${SITE_CONFIG.contact.email}`}>
          {SITE_CONFIG.contact.email}
        </a>
        . We may request information reasonably necessary to verify your
        identity before responding.
      </p>

      <h2>7. Cookies &amp; Analytics</h2>
      <p>
        The Site may use cookies and similar technologies to operate core
        functionality and measure traffic. You can configure your browser to
        decline cookies, although portions of the Site may not function
        properly.
      </p>

      <h2>8. Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites. We are not
        responsible for the privacy practices of those websites. Review their
        privacy policies before providing information.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        The Site is not directed to children under 18 and we do not knowingly
        collect personal information from children.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The effective date
        above indicates when this policy was last revised. Continued use of the
        Site after changes become effective constitutes acceptance.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        For questions about this Privacy Policy or our privacy practices:
        <br />
        Williams Capital Group, LLC
        <br />
        {SITE_CONFIG.contact.address}
        <br />
        {SITE_CONFIG.contact.city}, {SITE_CONFIG.contact.state}{" "}
        {SITE_CONFIG.contact.zip}
        <br />
        <a href={`mailto:${SITE_CONFIG.contact.email}`}>
          {SITE_CONFIG.contact.email}
        </a>
      </p>
    </LegalPage>
  );
}
