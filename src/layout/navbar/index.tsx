import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

// COMPONENTS
import { Logo } from "../../components/logo";

const LINKS: { label: string; href: string }[] = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-4 z-1 px-4">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-white/30 bg-white/50 px-4 shadow-lg backdrop-blur-xl sm:px-6">
                <Logo />
                <nav className="hidden items-center gap-1 md:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-jade-200 hover:text-jade-800"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div className="hidden items-center gap-2 md:flex">
                    <button className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-jade-700 cursor-pointer">
                        Sign in
                    </button>
                    <button className="group cursor-pointer inline-flex items-center gap-1 rounded-full bg-jade-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-jade-800">
                        Start free
                        <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                </div>
                <button
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="grid cursor-pointer size-10 place-items-center rounded-full bg-white/50 text-ink md:hidden"
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-white/30 bg-white/60 shadow-lg backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 py-4">
                            {LINKS.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-jade-200"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <div className="mt-3 flex flex-col gap-2 border-t border-gray-300 pt-4">
                                <button className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-ink cursor-pointer">
                                    Sign in
                                </button>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="inline-flex items-center justify-center gap-1 rounded-xl bg-jade-700 px-4 py-3 text-sm font-semibold text-white cursor-pointer"
                                >
                                    Start free <ArrowRight className="size-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </header >
    );
};