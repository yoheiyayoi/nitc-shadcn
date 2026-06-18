import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/registry/new-york-v4/ui/alert";
import { Button } from "@/registry/new-york-v4/ui/button";
import { InfoIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <img
        src="/nitc_banner.png"
        alt="NITC Banner"
        className="sm:w-full sm:mt-0 md:max-w-6xl md:mt-6 h-auto mb-4 md:rounded-lg shadow-md mx-auto"
      />

      <div className="container max-w-6xl px-4 py-6 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to NITC Documentation</h1>
        <p className="text-lg mb-6">
          This documentation is for showcasing NITC-Shadcn components, made for NTUNISo (NTUN IT Solutions)
          <br />
          ps. NITC stands for "NTUN IT Components"
        </p>

        <Alert className="border-amber-300 bg-amber-100 dark:bg-amber-200 text-amber-900">
          <InfoIcon />
          <AlertTitle>This is shadcn/ui version! if you looking for heroui version please go to (link)</AlertTitle>
        </Alert>
      </div>
    </div>
  );
}
