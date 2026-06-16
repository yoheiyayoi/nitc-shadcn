import type { Registry } from "shadcn/schema";
import { examples } from "./registry-examples";
import { ui } from "./registry-ui";

// Shared between index and style for backward compatibility.
export const TEMPLATE_STYLE = {
  type: "registry:style" as const,
  dependencies: ["class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  files: [],
};

export const registry = {
  name: "nitc-shadcn/ui",
  homepage: "https://nitc-shadcn.vercel.app/",
  items: [
    {
      name: "index",
      ...TEMPLATE_STYLE,
    },
    {
      name: "style",
      ...TEMPLATE_STYLE,
    },
    ...ui,
    ...examples,
  ] satisfies Registry["items"],
} satisfies Registry;
