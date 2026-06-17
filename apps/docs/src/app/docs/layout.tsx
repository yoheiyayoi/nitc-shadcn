import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type * as React from "react";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={source.pageTree}>
      {children}
    </DocsLayout>
  );
}
