import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "footer-01-demo",
    type: "registry:example",
    files: [
      {
        path: "examples/footer-01-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
