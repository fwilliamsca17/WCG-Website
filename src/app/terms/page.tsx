import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing use of the Williams Capital Group website, including disclaimers, intellectual property rights, and limitations of liability.",
  alternates: { canonical: "https://wcapitalgroupllc.com/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" effectiveDate="January 1, 2026">
      <p>
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of{" "}
        <a href={SITE_CONFIG.url}>wcapitalgroupllc.com</a> (the
        &quot;Site&quot;), operated by Williams Capital Group, LLC
        (&quot;WCG&quot;). By accessing the Site, you agree to these Terms. If
        you do not agree, do not use the Site.
      </p>

      <h2>1. No Offer of Securities</h2>
      <p>
        <strong>
          Nothing on the Site constitutes an offer to sell, or a solicitation of
          an offer to buy, any security or investment product.
        </strong>{" "}
        Any such offer will be made only through definitive offering documents
        delivered to qualified accredited investors. The Site is for
        informational purposes only.
      </p>

      <h2>2. Informational Purposes Only</h2>
      <p>
        Content on the Site is general in nature and does not constitute
        investment, legal, tax, or accounting advice. You should consult your
        own advisors before making any investment decision. WCG does not
        warrant that the information on the Site is accurate, complete, or
        current.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        Information about WCG&apos;s private lending activities is directed
        exclusively to accredited investors as defined under Rule 501(a) of
        Regulation D promulgated under the Securities Act of 1933. By
        submitting an inquiry, you represent that, to the best of your
        knowledge, you meet the definition of an accredited investor or are
        inquiring for informational purposes only.
      </p>

      <h2>4. Forward-Looking Statements</h2>
      <p>
        The Site may contain forward-looking statements regarding WCG&apos;s
        strategy, objectives, and expectations. Forward-looking statements are
        based on current beliefs and assumptions and are subject to risks and
        uncertainties that could cause actual results to differ materially from
        those expressed or implied. WCG undertakes no obligation to update any
        forward-looking statement.
      </p>

      <h2>5. Past Performance</h2>
      <p>
        References to historical activity, including capital deployed, number
        of transactions, and performance metrics, are presented for
        informational purposes. <strong>Past performance is not indicative of future
        results.</strong> All investments involve risk, including the potential loss
        of principal. There is no assurance that any WCG investment strategy or
        objective will be achieved.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All content on the Site — including text, graphics, logos, and
        trademarks — is owned by or licensed to WCG and is protected by
        applicable intellectual property laws. You may not reproduce,
        distribute, or create derivative works without our prior written
        consent, except as permitted by fair use.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        The Site may link to third-party websites. WCG does not control and is
        not responsible for the content, privacy practices, or availability of
        third-party websites.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
        WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
        WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, WCG AND ITS AFFILIATES,
        MEMBERS, OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY
        DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE
        DAMAGES ARISING FROM OR RELATED TO YOUR USE OF THE SITE, EVEN IF
        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless WCG and its affiliates from any
        claim, liability, or expense (including reasonable attorneys&apos; fees)
        arising from your use of the Site or breach of these Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of California, without
        regard to its conflict-of-laws provisions. Any dispute shall be resolved
        in the state or federal courts located in Los Angeles County,
        California.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        WCG may revise these Terms at any time by posting an updated version.
        Continued use of the Site after changes become effective constitutes
        acceptance.
      </p>

      <h2>13. Contact</h2>
      <p>
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
