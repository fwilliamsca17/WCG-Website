import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Investor Inquiries & Fund Information",
  description:
    "Contact Williams Capital Group for investor materials, fund information, or financing inquiries. Located at 100 N Citrus St, Suite 530, West Covina, CA 91791. Phone: (626) 796-1680.",
  alternates: { canonical: "https://wcapitalgroupllc.com/contact" },
  openGraph: {
    title: "Contact Williams Capital Group",
    description:
      "Request investor materials, fund information, or discuss financing opportunities. West Covina, California.",
    url: "https://wcapitalgroupllc.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
