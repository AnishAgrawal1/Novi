import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

// COMPONENTS
import { Reveal } from "../../../../components/reveal";

// ENTITIES
import { PRICING_PLANS } from "../../entities/constants";
import type { Plan } from "../../entities/types";

export const Pricing = () => {
    const [annual, setAnnual] = useState(true);

    return (
        <section id="pricing" className="scroll-mt-24 border-t border-gray-200 bg-neutral-50 py-20 lg:py-28">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-jade-700 uppercase">Pricing</p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                        Priced for teams, not procurement.
                    </h2>
                    <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                        Start free. Upgrade when the whole team is in.
                    </p>

                    <div className="mt-4 inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                        {(["Monthly", "Annual"] as const).map((label) => {
                            const isAnnual = label === "Annual";
                            const active = annual === isAnnual;
                            return (
                                <button
                                    key={label}
                                    onClick={() => setAnnual(isAnnual)}
                                    className="relative cursor-pointer rounded-full px-5 py-2 text-sm font-semibold"
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="pricing-thumb"
                                            className="absolute inset-0 rounded-full bg-jade-700"
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        />
                                    )}
                                    <span className={`relative flex items-center gap-1 ${active ? "text-white" : "text-ink-muted"}`}>
                                        {label}
                                        {isAnnual && (
                                            <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-bold ${active ? "bg-white/20 text-white" : "bg-jade-100 text-jade-800"}`}>
                                                −25%
                                            </span>
                                        )}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
                    {PRICING_PLANS.map((plan: Plan, i) => (
                        <Reveal key={plan.name} delay={i * 0.1} className="h-full">
                            <div
                                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 ${plan.highlighted
                                    ? "border-jade-700/30 bg-jade-950 text-white"
                                    : "border-gray-200 bg-white text-ink"
                                    }`}
                            >
                                {plan.highlighted && (
                                    <div className="absolute -top-24 -right-24 size-64 rounded-full bg-jade-500/20 blur-3xl" aria-hidden="true" />
                                )}

                                <div className="relative flex h-full flex-col">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-heading text-lg font-semibold">{plan.name}</h3>
                                        {plan.highlighted && (
                                            <span className="rounded-full bg-jade-500/20 px-3 py-1 text-[10px] font-bold tracking-wider text-jade-300 uppercase">
                                                Most popular
                                            </span>
                                        )}
                                    </div>
                                    <p className={`mt-1 text-sm ${plan.highlighted ? "text-jade-200/80" : "text-ink-muted"}`}>
                                        {plan.description}
                                    </p>

                                    <p className="mt-6 flex items-end gap-2">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={annual ? "annual" : "monthly"}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="font-heading text-5xl font-extrabold tracking-tight"
                                            >
                                                ${annual ? plan.price.annual : plan.price.monthly}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span className={`pb-1 text-sm ${plan.highlighted ? "text-neutral-300" : "text-ink-muted"}`}>
                                            {plan.priceSuffix}
                                            {plan.highlighted && annual ? ", billed annually" : ""}
                                        </span>
                                    </p>

                                    <ul className="mt-8 flex flex-1 flex-col gap-3">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-center gap-2 text-sm">
                                                <Check className={`size-4 shrink-0 ${plan.highlighted ? "text-jade-400" : "text-jade-600"}`} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => { }}
                                        className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${plan.highlighted
                                            ? "bg-white font-bold text-jade-900 hover:bg-jade-100"
                                            : "border border-gray-200 bg-white text-ink hover:bg-gray-100"
                                            }`}
                                    >
                                        {plan.cta}
                                        {plan.highlighted && <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
                                    </button>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs text-ink-muted">Prices in USD. Cancel anytime, keep your data.</p>
            </div>
        </section>
    );
};