import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Investor Inquiry",
  description:
    "Contact Williams Capital Group for investor materials, fund information, or to discuss investment opportunities in our private real estate debt fund.",
};

export default function ContactPage() {
  return <ContactContent />;
}
