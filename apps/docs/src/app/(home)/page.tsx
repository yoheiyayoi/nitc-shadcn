import { Button } from "@/registry/new-york-v4/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-linear-to-br from-violet-600 to-blue-500 opacity-60 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-linear-to-br from-teal-400 to-cyan-500 opacity-50 rounded-full blur-[110px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[32rem] h-[32rem] bg-linear-to-tr from-fuchsia-500 to-pink-500 opacity-50 rounded-full blur-[120px]"></div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent pointer-events-none"></div>
      </div>

      <div className="container max-w-6xl px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4 mx-auto z-10">
        <div className="w-full text-center">
          <h1 className="leading-tighter text-3xl font-semibold tracking-tight text-balance text-primary lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
            Template Components
          </h1>
        </div>

        <p className="text-base text-balance text-foreground sm:text-lg mt-6 mb-6">
          A set of template components built with shadcn/ui for NTUNISo projects by yohei_yayoi!
          <br />
          ps. NITC stands for "NTUN IT Components" :D
        </p>

        <div className="flex flex-row items-center justify-center gap-4">
          <Link href="/docs" className="w-full sm:w-auto">
            <Button size="lg" className="w-full">
              View Documentation <ArrowRight />
            </Button>
          </Link>

          <Link href="/" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              View HeroUI version <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
