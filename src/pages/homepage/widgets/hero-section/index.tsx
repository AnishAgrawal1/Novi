import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";

// FEATURES
import { WorkspaceMockup } from "../workspace-mockup";

const EASE = [0.24, 1, 0.36, 1] as const;

const AVATARS = [
    { initials: "AK", cls: "bg-rose-200 text-rose-800" },
    { initials: "JM", cls: "bg-sky-200 text-sky-800" },
    { initials: "RS", cls: "bg-amber-200 text-amber-800" },
    { initials: "MO", cls: "bg-jade-200 text-jade-800" },
];

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pt-32 pb-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pt-40 lg:pb-24">
                <div className="flex flex-col items-start gap-6 lg:col-span-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
                        className="font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl"
                    >
                        Run your team without the{" "}
                        <span className="relative text-jade-700">
                            tab switching.
                            <svg
                                viewBox="0 0 260 12"
                                className="absolute -bottom-1 left-0 w-full"
                                aria-hidden="true"
                            >
                                <motion.path
                                    d="M4 9C70 3 190 3 256 8"
                                    stroke="#00a878"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                                />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
                        className="max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
                    >
                        Novi brings tasks, docs, and conversations into one calm workspace built for
                        small, fast moving teams.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
                        className="flex flex-wrap items-center gap-3"
                    >
                        <button
                            onClick={() => { }}
                            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-jade-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(13,92,70,0.55)] transition-[background-color,box-shadow] duration-200 hover:bg-jade-800 hover:shadow-[0_16px_32px_-10px_rgba(13,92,70,0.6)]"
                        >
                            Start free
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </button>
                        <button
                            onClick={() => { }}
                            className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition-[border-color,background-color] duration-200 hover:border-jade-700/30 hover:bg-jade-50"
                        >
                            <span className="grid size-6 place-items-center rounded-full bg-jade-700 text-white">
                                <Play className="size-3 fill-current" />
                            </span>
                            See how it works
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.32, ease: EASE }}
                        className="flex flex-wrap items-center gap-x-5 gap-y-3"
                    >
                        <div className="flex -space-x-2">
                            {AVATARS.map((a) => (
                                <span
                                    key={a.initials}
                                    className={`grid size-8 place-items-center rounded-full text-[10px] font-bold ring-2 ring-white ${a.cls}`}
                                >
                                    {a.initials}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-ink-muted">
                            Loved by 400+ small teams
                            <span className="mx-2 text-jade-300">·</span>
                            No credit card required
                            <span className="mx-2 text-jade-300">·</span>
                            Import in 2 mins
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 32, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                    className="relative w-full lg:col-span-6"
                >
                    <WorkspaceMockup />
                    <div
                        className="animate-float absolute -top-6 -left-4 hidden rounded-2xl border border-gray-200 bg-white/95 p-3.5 shadow-[0_16px_40px_-16px_rgba(13,92,70,0.35)] backdrop-blur sm:block lg:-left-10"
                    >
                        <p className="text-[11px] font-bold text-ink">Sprint 12</p>
                        <div className="mt-1.5 h-1.5 w-36 overflow-hidden rounded-full bg-jade-100">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ delay: 1.1, duration: 1, ease: EASE }}
                                className="h-full rounded-full bg-jade-600"
                            />
                        </div>
                        <p className="mt-1.5 text-[10px] text-ink-muted">18/24 done · on track</p>
                    </div>
                    <div
                        className="animate-float-late absolute -right-3 -bottom-6 hidden items-center gap-2 rounded-2xl border border-gray-200 bg-white/95 p-3.5 shadow-[0_16px_40px_-16px_rgba(13,92,70,0.35)] backdrop-blur sm:flex lg:-right-8"
                    >
                        <CheckCircle2 className="size-5 text-jade-600" />
                        <div>
                            <p className="text-[11px] font-bold text-ink">Maya completed “Homepage v2”</p>
                            <p className="text-[10px] text-ink-muted">just now · #launch</p>
                        </div>
                    </div>
                    <p className="mt-8 text-xs text-ink-muted">
                        Live preview. Switch tabs, click cards, toggle the checklist
                    </p>
                </motion.div>
            </div>
        </section>
    );
}