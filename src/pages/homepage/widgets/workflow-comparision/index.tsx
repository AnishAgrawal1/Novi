import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, FileWarning } from "lucide-react";

// COMPONENTS
import { Reveal } from "../../../../components/reveal";

// ENTITIES
import type { TYPE_MESSY_SPRINT, TYPE_NOVI_SPRINT } from "../../entities/types";
import { MESSY_SPRINT, NOVI_SPRINT } from "../../entities/constants";

export const WorkflowComparison = () => {
    const [mode, setMode] = useState<"before" | "after">("before");

    return (
        <section
            id="workflow"
            className="scroll-mt-24 border-y border-gray-200 bg-neutral-50 py-20 lg:py-28"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.2em] text-jade-700 uppercase">
                        Workflow
                    </p>
                    <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                        From fourteen tabs to one calm workspace.
                    </h2>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
                        Your work is not scattered. Your tools are. Flip the switch and see what
                        consolidation feels like.
                    </p>
                    <div
                        className="mt-8 inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm"
                        role="tablist"
                        aria-label="Workflow comparison"
                    >
                        {(["before", "after"] as const).map((m) => (
                            <button
                                key={m}
                                role="tab"
                                aria-selected={mode === m}
                                onClick={() => setMode(m)}
                                className="relative cursor-pointer rounded-full px-5 py-3 text-sm font-semibold"
                            >
                                {mode === m && (
                                    <motion.span
                                        layoutId="workflow-thumb"
                                        className="absolute inset-0 rounded-full bg-jade-700"
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                )}
                                <span
                                    className={`relative transition-colors ${mode === m ? "text-white" : "text-ink-muted"}`}
                                >
                                    {m === "before" ? "Before Novi" : "With Novi"}
                                </span>
                            </button>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="relative min-h-95">
                        <AnimatePresence mode="wait">
                            {mode === "before" ? (
                                <motion.div
                                    key="before"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-3xl border-2 border-dashed border-gray-200 bg-white/60 p-6"
                                >
                                    <p className="text-xs tracking-wider text-ink-muted">
                                        Your browser right now · 14 tabs open
                                    </p>
                                    <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                                        {MESSY_SPRINT.map((m: TYPE_MESSY_SPRINT, i) => (
                                            <motion.div
                                                key={m.title}
                                                initial={{ opacity: 0, y: 14 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.06 * i, duration: 0.35 }}
                                                className={`rounded-xl border p-3 shadow-sm ${m.tint} ${m.rotate}`}
                                            >
                                                <div className="flex items-start gap-2">
                                                    <FileWarning className="mt-1 size-4 shrink-0 opacity-70" />
                                                    <div className="min-w-0">
                                                        <p className="truncate text-xs font-bold">{m.title}</p>
                                                        <p className="mt-1 text-[10px] opacity-75">{m.note}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-center text-xs font-semibold text-rose-700">
                                        3 lost threads · 1 missed deadline · 0 single sources of truth
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="after"
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
                                    className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_24px_48px_-16px_rgba(13,92,70,0.25)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs tracking-wider text-jade-700">
                                            novi.app/studio · 1 tab
                                        </p>
                                        <span className="rounded-full bg-jade-100 px-3 py-1 text-[10px] font-bold text-jade-800">
                                            Calm
                                        </span>
                                    </div>
                                    <div className="mt-4 flex flex-col gap-3">
                                        {NOVI_SPRINT.map((c: TYPE_NOVI_SPRINT, i) => (
                                            <motion.div
                                                key={c}
                                                initial={{ opacity: 0, x: -14 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.08 * i, duration: 0.35 }}
                                                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-neutral-50 px-4 py-3"
                                            >
                                                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-jade-700 text-white">
                                                    <Check className="size-3.5" />
                                                </span>
                                                <p className="text-sm font-semibold text-ink">{c}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-center text-xs font-semibold text-jade-700">
                                        1 workspace · 0 lost threads · everything on track
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}