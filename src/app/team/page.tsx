import type { Metadata } from "next";
import TeamContent from "./TeamContent";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the leadership team behind Williams Capital Group. Experienced professionals dedicated to capital preservation and investor success.",
};

export default function TeamPage() {
  return <TeamContent />;
}
