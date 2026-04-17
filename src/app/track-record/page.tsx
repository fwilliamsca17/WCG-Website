import type { Metadata } from "next";
import TrackRecordContent from "./TrackRecordContent";

export const metadata: Metadata = {
  title: "Track Record — $170M+ Deployed, Zero Principal Loss",
  description:
    "Williams Capital Group's aggregate firm activity since inception — over $170M deployed across 400+ transactions with no reported month of principal loss. Historical; not a guarantee of future results.",
  alternates: { canonical: "https://wcapitalgroupllc.com/track-record" },
  openGraph: {
    title: "Track Record — Williams Capital Group",
    description:
      "$170M+ deployed, 400+ transactions, 11+ years in operation. Aggregate, historical firm figures. Past performance is not indicative of future results.",
    url: "https://wcapitalgroupllc.com/track-record",
  },
};

export default function TrackRecordPage() {
  return <TrackRecordContent />;
}
