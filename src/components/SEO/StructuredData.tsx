import { SITE_CONFIG } from "@/lib/constants";

const BASE_URL = SITE_CONFIG.url;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Williams Capital Group LLC",
  alternateName: ["WCG", "Williams Capital Group", "W Capital Group LLC"],
  legalName: "Williams Capital Group, LLC",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Williams Capital Group LLC is a California-based private lending firm focused on short-term loans secured by residential, multifamily, and commercial real estate. WCG seeks to deliver consistent income to accredited investors while emphasizing capital preservation through disciplined underwriting and a conservative margin of safety.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.contact.address,
    addressLocality: SITE_CONFIG.contact.city,
    addressRegion: SITE_CONFIG.contact.state,
    postalCode: SITE_CONFIG.contact.zip,
    addressCountry: "US",
  },
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  areaServed: {
    "@type": "State",
    name: "California",
    sameAs: "https://en.wikipedia.org/wiki/California",
  },
  knowsAbout: [
    "Private lending",
    "Real estate secured lending",
    "Bridge loans",
    "Multifamily bridge lending",
    "Commercial real estate lending",
    "Capital preservation strategies",
    "Accredited investor fund management",
    "Loan origination and servicing",
    "California real estate finance",
    "Senior secured lending",
    "Second lien lending",
    "Alternative lending",
    "Real estate-backed transactions",
    "Private investment management",
  ],
  sameAs: [SITE_CONFIG.social.linkedin],
  slogan: "Capital Preservation Through Disciplined Lending",
  keywords:
    "private lending, real estate lending, bridge loans, California, accredited investors, capital preservation, alternative lending, multifamily lending, commercial lending, West Covina, Los Angeles, Southern California",
};

const franciscoWilliamsSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/team#francisco-williams`,
  name: "Francisco Williams",
  givenName: "Francisco",
  familyName: "Williams",
  jobTitle: "Managing Principal",
  description:
    "Francisco Williams, CCIM is the founding member and Managing Principal of Williams Capital Group LLC, and serves as President and Broker of Record at Capital Direct Funding, Inc. He holds the CCIM designation, is an Associate of the Royal Institute of Chartered Surveyors, and is a licensed California real estate broker.",
  url: `${BASE_URL}/team`,
  image: `${BASE_URL}/team/francisco-williams.png`,
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Williams Capital Group LLC",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Irvine",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Designation",
      name: "Certified Commercial Investment Member (CCIM)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Designation",
      name: "Associate of the Royal Institute of Chartered Surveyors",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "License",
      name: "California Real Estate Broker License",
      description: "DRE #02030467",
    },
  ],
  memberOf: [
    { "@type": "Organization", name: "CCIM Institute" },
    { "@type": "Organization", name: "Urban Land Institute (ULI)" },
    {
      "@type": "Organization",
      name: "International Council of Shopping Centers (ICSC)",
    },
  ],
  sameAs: ["https://www.linkedin.com/in/francisco-williams-ccim"],
};

const frankWilliamsSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/team#frank-williams`,
  name: "Frank Williams",
  givenName: "Frank",
  familyName: "Williams",
  jobTitle: "Chief Investment Officer",
  description:
    "Frank Williams is the Chief Investment Officer of Williams Capital Group LLC and Co-Founder of Capital Direct Funding, Inc. With more than 25 years of experience in the mortgage banking industry, Frank leads investor relations and credit program development.",
  url: `${BASE_URL}/team`,
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Williams Capital Group LLC",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Williams Capital Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Williams Capital Group LLC (WCG) is a California-based private lending firm focused on short-term real estate-secured loans. The firm's strategy emphasizes capital preservation through conservative underwriting and a disciplined margin of safety.",
      },
    },
    {
      "@type": "Question",
      name: "Who can invest with WCG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG's private lending activities are available exclusively to accredited investors as defined by the U.S. Securities and Exchange Commission. Interested parties should contact WCG for information on eligibility and the applicable offering. Nothing on this website constitutes an offer to sell securities; any such offer would be made only through definitive offering documents.",
      },
    },
    {
      "@type": "Question",
      name: "What types of loans does WCG focus on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG focuses on short-term loans secured by California real estate across three primary asset classes: residential (including fix-and-flip and ground-up), multifamily bridge, and commercial bridge. Target parameters such as loan-to-value and term vary by transaction and are set by the firm's underwriting guidelines.",
      },
    },
    {
      "@type": "Question",
      name: "How does WCG approach risk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG's investment philosophy emphasizes capital preservation through conservative loan-to-value ratios, rigorous underwriting, diversified portfolio construction, and in-house loan servicing and asset management. All investments involve risk, including the potential loss of principal, and there is no assurance that WCG's objectives will be achieved.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Williams Capital Group located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Williams Capital Group LLC is headquartered at ${SITE_CONFIG.contact.address}, ${SITE_CONFIG.contact.city}, ${SITE_CONFIG.contact.state} ${SITE_CONFIG.contact.zip}. The firm focuses on real estate-secured lending activity throughout California.`,
      },
    },
    {
      "@type": "Question",
      name: "What is WCG's track record?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Historical activity figures, including capital deployed and number of transactions, are disclosed in offering documents and are available to qualified accredited investors upon request. Past performance is not indicative of future results.",
      },
    },
    {
      "@type": "Question",
      name: "Who manages Williams Capital Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Williams Capital Group is led by Francisco Williams, CCIM (Managing Principal and founding member) and Frank Williams (Chief Investment Officer). Francisco holds the CCIM designation and is a licensed California real estate broker (DRE #02030467). Frank brings over 25 years of mortgage banking experience and is the founder of Capital Direct Funding.",
      },
    },
    {
      "@type": "Question",
      name: "Does WCG offer income distributions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG's private lending strategy seeks to provide income distributions to investors, subject to the terms of the applicable offering. Distribution amounts and frequency are not guaranteed and are described in the fund's offering documents.",
      },
    },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Williams Capital Group",
  url: BASE_URL,
  publisher: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
  },
  description:
    "Williams Capital Group LLC — California private lending firm focused on real estate-secured lending for accredited investors.",
  inLanguage: "en-US",
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(franciscoWilliamsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(frankWilliamsSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
}
