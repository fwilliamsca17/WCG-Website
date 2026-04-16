import type { Metadata } from "next";
import TrackRecordContent from "./TrackRecordContent";

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "Over $170M deployed across 400+ transactions with zero months of principal loss. 11 years of consistent performance through disciplined real estate lending.",
};

export default function TrackRecordPage() {
  return <TrackRecordContent />;
}
