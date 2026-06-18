import { Icons } from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "yoheiyayoi",
  repo: "nitc-shadcn",
  branch: "main",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      enabled: true,
      title: (
        <>
          <Icons.logo className="size-5 text-[#07080F] dark:text-[#EFF1F8]" />
          <span className="font-medium in-[.uwu]:hidden max-md:hidden">NITC</span>
        </>
      )
    },
    links: [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: "Docs",
        url: "/docs",
        active: "none",
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
