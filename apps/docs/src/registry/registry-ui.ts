import type { Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "ui/button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "footer-01",
    type: "registry:ui",
    dependencies: ["radix-ui"],
    files: [
      {
        path: "ui/footer-01.tsx",
        type: "registry:ui",
      },
    ],
  },
];
