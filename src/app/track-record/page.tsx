import type { Metadata } from "next";
import TrackRecordContent from "./TrackRecordContent";

export const metadata: Metadata = {
  title: "Track Record — $170M+ Deployed, Zero Principal Loss",
  description:
    "Williams Capital Group has deployed over $170M across 400+ transactions with zero months of principal loss over an 11-year track record. Performance through disciplined real estate lending in California.",
  alternates: { canonical: "https://wcapitalgroupllc.com/track-record" },
  openGraph: {
    title: "Track Record — Williams Capital Group",
    description:
      "$170M+ deployed, 400+ transactions, 11+ year track record with zero months of principal loss. Consistent performance through market cycles.",
    url: "https://wcapitalgroupllc.com/track-record",
  },
};

export default function TrackRecordPage() {
  return <TrackRecordContent />;
}
