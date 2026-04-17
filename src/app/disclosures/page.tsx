import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Important Disclosures",
  description:
    "Important disclosures regarding Williams Capital Group, including forward-looking statements, past performance, accredited investor requirements, and risk factors.",
  alternates: { canonical: "https://wcapitalgroupllc.com/disclosures" },
  robots: { index: true, follow: true },
};

export default function DisclosuresPage() {
  return (
    <LegalPage title="Important Disclosures" effectiveDate="January 1, 2026">
      <h2>No Offer of Securities</h2>
      <p>
        This website is for informational purposes only. It does not constitute
        an offer to sell or a solicitation of an offer to buy any security or
        investment product. Any offer of securities by Williams Capital Group,
        LLC (&quot;WCG&quot;) will be made only through definitive offering
        documents delivered to qualified, accredited investors — including, as
        applicable, a Private Placement Memorandum, Operating Agreement, and
        Subscription Documents. Prospective investors should read those
        documents in full, including all risk factors, before considering any
        investment.
      </p>

      <h2>Accredited Investor Requirement</h2>
      <p>
        Participation in any WCG private investment vehicle is limited to
        &quot;accredited investors&quot; as defined in Rule 501(a) of Regulation
        D promulgated under the Securities Act of 1933, as amended.
        Representations concerning accredited-investor status may be subject to
        verification in accordance with applicable law.
      </p>

      <h2>Past Performance</h2>
      <p>
        References on this website to historical activity — including capital
        deployed, number of transactions, time in operation, and performance
        metrics such as principal-loss history — reflect aggregate activity
        since the firm&apos;s inception and are presented for informational
        purposes. Such historical figures have not been independently audited
        except as specifically disclosed in offering documents. Individual
        investor outcomes may differ based on the timing of investment, class
        of interest, fees, and other factors.
      </p>
      <p>
        <strong>
          Past performance is not indicative of, and does not guarantee, future
          results. All investments involve risk, including the potential loss
          of principal.
        </strong>
      </p>

      <h2>Forward-Looking Statements</h2>
      <p>
        This website contains forward-looking statements regarding WCG&apos;s
        strategy, objectives, expectations, and beliefs. Words such as
        &quot;seek,&quot; &quot;target,&quot; &quot;anticipate,&quot;
        &quot;plan,&quot; &quot;expect,&quot; &quot;believe,&quot; and similar
        expressions are intended to identify forward-looking statements.
        Forward-looking statements are based on current information and
        assumptions and are subject to known and unknown risks, uncertainties,
        and other factors that could cause actual results to differ materially.
        WCG undertakes no obligation to update any forward-looking statement.
      </p>

      <h2>Risk Factors — Summary</h2>
      <p>
        Private real estate lending involves significant risks, including but
        not limited to:
      </p>
      <ul>
        <li>
          <strong>Credit / borrower default risk</strong> — borrowers may fail
          to perform on loan obligations
        </li>
        <li>
          <strong>Collateral value risk</strong> — real estate values may
          decline, reducing the protection afforded by the collateral
        </li>
        <li>
          <strong>Liquidity risk</strong> — interests in private lending
          vehicles are generally illiquid and may not be redeemed on demand
        </li>
        <li>
          <strong>Market and economic risk</strong> — broader economic
          conditions, interest rates, and real estate cycles may adversely
          affect performance
        </li>
        <li>
          <strong>Concentration risk</strong> — a geographic focus on
          California subjects investments to regional economic factors
        </li>
        <li>
          <strong>Regulatory risk</strong> — changes in federal, state, or
          local laws, including lending and securities regulation, may affect
          operations
        </li>
        <li>
          <strong>Management risk</strong> — returns depend substantially on
          the judgment of WCG&apos;s investment team
        </li>
      </ul>
      <p>
        A complete discussion of risk factors is provided in the applicable
        offering documents. Prospective investors should review those
        documents carefully and consult their own legal, tax, and investment
        advisors.
      </p>

      <h2>Third-Party Information</h2>
      <p>
        Where this website references third-party information, WCG believes
        such information to be reliable but has not independently verified it
        and makes no representation as to its accuracy or completeness.
      </p>

      <h2>No Advice</h2>
      <p>
        Nothing on this website constitutes investment, legal, tax, or
        accounting advice. Readers should consult their own professional
        advisors before making any investment decision.
      </p>

      <h2>Jurisdictional Matters</h2>
      <p>
        The information on this website is not intended for distribution to, or
        use by, any person or entity in any jurisdiction where such
        distribution or use would be contrary to law or regulation. Offers and
        sales of interests will be made only where permitted under applicable
        law.
      </p>
    </LegalPage>
  );
}
