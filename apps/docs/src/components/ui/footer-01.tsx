import { cn } from "@/lib/utils";
import Image from "next/image";

interface FooterProps {
    className?: string;
}

function InstragramIcon() {
    return (
        <img
            src="https://thesvg.org/icons/instagram/default.svg"
            alt="Instagram"
            className="size-4"
        />
    )
}

export default function Footer01({ className }: FooterProps) {
    const year = new Date().getFullYear();

    return (
        <footer className={cn("mt-auto w-full border-t border-border bg-card", className)}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-7 sm:flex-row sm:items-center sm:justify-between items-center">
                <div className="flex items-center gap-2.5">
                    <Image src="/logos/ntun.svg" width={20} height={20} alt="" aria-hidden />
                    <p className="text-sm font-medium text-foreground">
                        โรงเรียนนวมินทราชินูทิศ เตรียมอุดมศึกษาน้อมเกล้า
                    </p>
                </div>

                <div className="flex justify-center sm:block">
                    <a
                        href="https://instagram.com/ntuniso"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:self-auto"
                    >
                        <InstragramIcon />
                        ติดต่อหรือรายงานปัญหา @ntuniso
                    </a>
                </div>
            </div>

            <div className="border-t border-border/60">
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        พัฒนาและดูแลระบบโดย{" "}
                        <span className="font-medium text-foreground">NTUNISo.</span>
                    </p>
                    <p>&copy; {year} NTUNISo. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
