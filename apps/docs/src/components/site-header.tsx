import Link from "next/link";
import { GitHubLink } from "@/components/github-link";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Separator } from "@/registry/new-york-v4/ui/separator";

export function SiteHeader() {
  const pageTree = source.pageTree;

  return (
    <header className="fixed py-2 top-0 z-50 w-full bg-background border-b">
      <div className="container-wrapper px-6 3xl:fixed:px-0">
        <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! 3xl:fixed:container">
          <MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <Button variant="ghost" size="icon" className="hidden size-8 lg:flex">
            <Link href="/">
              <Icons.logo className="size-5 text-[#07080F] dark:text-[#EFF1F8]" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <GitHubLink />
            <Separator orientation="vertical" className="hidden 3xl:flex" />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
