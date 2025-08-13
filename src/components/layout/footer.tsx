

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-8 pb-4 px-4 bg-gray-100 text-center">
      <Separator />
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>
          © {currentYear} Brennanswave. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="hover:underline transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:underline transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;