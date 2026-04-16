import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team — Francisco Williams CCIM & Frank Williams",
  description:
    "Meet the leadership of Williams Capital Group. Francisco Williams, CCIM (Managing Principal) and Frank Williams (CIO) bring decades of combined experience in real estate lending, fund management, and mortgage banking.",
  alternates: { canonical: "https://wcapitalgroupllc.com/team" },
  openGraph: {
    title: "Leadership Team — Williams Capital Group",
    description:
      "Francisco Williams, CCIM (Managing Principal) and Frank Williams (CIO). Decades of experience in private real estate lending and fund management.",
    url: "https://wcapitalgroupllc.com/team",
  },
};

export default function TeamPage() {
  return <TeamContent />;
}
