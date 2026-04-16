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
    "Williams Capital Group LLC is a California-based private debt fund specializing in short-term, senior and second-lien loans secured by residential, multifamily, and commercial real estate assets. WCG delivers stable, consistent income to accredited investors while prioritizing capital preservation through disciplined lending with a healthy margin of safety.",
  foundingDate: "2013",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.contact.address,
    addressLocality: SITE_CONFIG.contact.city,
    addressRegion: SITE_CONFIG.contact.state,
    postalCode: SITE_CONFIG.contact.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0689,
    longitude: -117.9389,
  },
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  areaServed: {
    "@type": "State",
    name: "California",
    sameAs: "https://en.wikipedia.org/wiki/California",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 34.0522,
      longitude: -118.2437,
    },
    geoRadius: "500 mi",
  },
  knowsAbout: [
    "Private debt fund management",
    "Real estate secured lending",
    "Bridge loans",
    "Fix and flip financing",
    "Multifamily bridge lending",
    "Commercial real estate lending",
    "Capital preservation strategies",
    "Accredited investor fund management",
    "Loan origination and servicing",
    "California real estate finance",
    "Senior secured lending",
    "Second lien lending",
    "Private alternative lending",
    "Real estate-backed transactions",
    "Investment fund management",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "WCG Lending Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "FinancialProduct",
          name: "Residential Bridge Loans",
          description:
            "Short-term bridge loans for residential property acquisitions, fix-and-flip projects, and ground-up construction in California. Up to 70% LTV, 6-24 month terms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "FinancialProduct",
          name: "Multifamily Bridge Loans",
          description:
            "Transitional financing for value-add multifamily acquisitions and repositioning strategies across California. Up to 65% LTV, 12-36 month terms.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "FinancialProduct",
          name: "Commercial Bridge Loans",
          description:
            "Short-term financing for commercial property acquisitions, refinances, and value-add business plans. Up to 60% LTV, 12-24 month terms.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
    bestRating: "5",
  },
  sameAs: [SITE_CONFIG.social.linkedin],
  slogan: "Capital Preservation Through Disciplined Lending",
  keywords:
    "private debt fund, real estate lending, bridge loans, California, accredited investors, capital preservation, private lending, alternative lending, fix and flip loans, multifamily lending, commercial lending, West Covina, Los Angeles, Southern California",
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
    "Francisco Williams is the founding member and Managing Principal of Williams Capital Group LLC, a California-based private debt fund. He is an accomplished fund manager with expertise in capital formation, real estate lending, and commercial real estate advisory. Francisco holds the CCIM designation, is an Associate of the Royal Institute of Chartered Surveyors, and is a licensed California real estate broker (DRE #02030467). He has advised and completed over $100 million in commercial real estate transactions.",
  url: `${BASE_URL}/team`,
  image: `${BASE_URL}/team/francisco-williams.jpg`,
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Williams Capital Group LLC",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Irvine",
    sameAs: "https://en.wikipedia.org/wiki/University_of_California,_Irvine",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Designation",
      name: "Certified Commercial Investment Member (CCIM)",
      recognizedBy: {
        "@type": "Organization",
        name: "CCIM Institute",
        sameAs: "https://www.ccim.com",
      },
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
    { "@type": "Organization", name: "CCIM Greater Los Angeles Chapter" },
    { "@type": "Organization", name: "Urban Land Institute (ULI)" },
    {
      "@type": "Organization",
      name: "International Council of Shopping Centers (ICSC)",
    },
  ],
  knowsAbout: [
    "Private debt fund management",
    "Capital formation",
    "Commercial real estate brokerage",
    "Real estate lending",
    "Investment analysis",
    "Fund management",
    "Loan origination",
    "California commercial real estate",
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
    "Frank Williams is the Chief Investment Officer of Williams Capital Group LLC with over 25 years of experience in the mortgage banking industry. He founded Capital Direct Funding in 2009 and previously served as Area Sales Manager for New Century Mortgage Corp., securing over $500 million in funding. Frank develops loan programs and oversees investment strategy for WCG's private debt fund.",
  url: `${BASE_URL}/team`,
  worksFor: {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Williams Capital Group LLC",
  },
  knowsAbout: [
    "Mortgage banking",
    "Wholesale mortgage lending",
    "Loan program development",
    "Real estate finance",
    "Capital Direct Funding",
    "Private lending",
    "Investment management",
  ],
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
        text: "Williams Capital Group LLC (WCG) is a California-based private debt fund specializing in short-term, senior and second-lien loans secured by residential, multifamily, and commercial real estate. WCG has deployed over $170M across 400+ transactions with zero months of principal loss over an 11-year track record.",
      },
    },
    {
      "@type": "Question",
      name: "Who can invest in the WCG fund?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG's private debt fund is available exclusively to accredited investors as defined by the SEC — individuals with income exceeding $200,000 ($300,000 jointly) in each of the two most recent years, or net worth exceeding $1,000,000 excluding primary residence.",
      },
    },
    {
      "@type": "Question",
      name: "What types of loans does WCG originate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG originates short-term bridge loans secured by California real estate across three asset classes: Residential (up to 70% LTV, 6-24 month terms), Multifamily (up to 65% LTV, 12-36 month terms), and Commercial (up to 60% LTV, 12-24 month terms).",
      },
    },
    {
      "@type": "Question",
      name: "How does WCG protect investor capital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WCG prioritizes capital preservation through conservative loan-to-value ratios (55-70% weighted average), rigorous underwriting standards, diversified portfolio construction, in-house loan servicing and asset management, and a focus on senior secured lending positions. This disciplined approach has produced 11+ years of performance with zero months of principal loss.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Williams Capital Group located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Williams Capital Group LLC is headquartered at ${SITE_CONFIG.contact.address}, ${SITE_CONFIG.contact.city}, ${SITE_CONFIG.contact.state} ${SITE_CONFIG.contact.zip}. The firm focuses on real estate-secured lending throughout California.`,
      },
    },
    {
      "@type": "Question",
      name: "What is WCG's track record?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Williams Capital Group has deployed over $170 million across more than 400 transactions since inception. The fund has maintained an 11+ year track record with zero months of principal loss, demonstrating consistent performance through multiple market cycles including the COVID-19 disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Who manages Williams Capital Group?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Williams Capital Group is led by Francisco Williams, CCIM (Managing Principal & Founder) and Frank Williams (Chief Investment Officer). Francisco holds the CCIM designation and has completed over $100 million in CRE transactions. Frank brings 25+ years of mortgage banking experience and previously secured over $500 million in funding as Area Sales Manager at New Century Mortgage Corp.",
      },
    },
    {
      "@type": "Question",
      name: "Does WCG provide monthly distributions to investors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Williams Capital Group's private debt fund is structured to provide monthly income distributions to investors, delivering a stable and consistent income stream backed by a diversified portfolio of performing real estate-secured loans.",
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
    "Williams Capital Group LLC — California private debt fund specializing in real estate secured lending for accredited investors. Capital preservation through disciplined lending.",
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
