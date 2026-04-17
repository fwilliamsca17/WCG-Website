import type { Metadata } from "next";
import TrackRecordContent from "./TrackRecordContent";

export const metadata: Metadata = {
  title: "Approach & Experience",
  description:
    "Williams Capital Group's approach to real estate-secured lending — conservative LTV targets, senior and second-lien positions, and a disciplined underwriting process. Informational only.",
  alternates: { canonical: "https://wcapitalgroupllc.com/track-record" },
  openGraph: {
    title: "Approach & Experience — Williams Capital Group",
    description:
      "Conservative underwriting, real asset collateral, and a capital preservation focus. Detailed historical activity data available to verified accredited investors.",
    url: "https://wcapitalgroupllc.com/track-record",
  },
};

export default function TrackRecordPage() {
  return <TrackRecordContent />;
}
