import { Quote } from "lucide-react";

// COMPONENTS
import { Reveal } from "../../../../components/reveal";

// ENTITIES
import { TESTIMONIALS_METRICS, TESTIMONIALS_QUOTES } from "../../entities/constants";
import type { TYPE_TESTIMONIALS_METRICS, TYPE_TESTIMONIALS_QUOTES } from "../../entities/types";

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="scroll-mt-24 py-20 lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal className="max-w-2xl">
                    <p className="text-xs font-semibold tracking-[0.2em] text-jade-700 uppercase">
                        Testimonials
                    </p>
                    <h2 className="font-heading mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                        Small teams, loudly calmer.
                    </h2>
                </Reveal>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {TESTIMONIALS_METRICS.map((m: TYPE_TESTIMONIALS_METRICS, i) => (
                        <Reveal key={m.value} delay={i * 0.1}>
                            <div
                                className="rounded-2xl border border-gray-200 bg-white p-6 text-center"
                            >
                                <p className="font-mono text-3xl font-bold tracking-tight text-jade-700 sm:text-4xl">
                                    {m.value}
                                </p>
                                <p className="mt-2 text-sm text-ink-muted">{m.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {TESTIMONIALS_QUOTES.map((q: TYPE_TESTIMONIALS_QUOTES, i) => (
                        <Reveal key={q.id} delay={0.1 + i * 0.1}>
                            <figure
                                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(13,92,70,0.04)] transition-shadow hover:shadow-[0_20px_40px_-16px_rgba(13,92,70,0.2)]"
                            >
                                <Quote className="size-6 text-jade-300" />
                                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                                    “{q.quote}”
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-4">
                                    <span
                                        className={`grid size-10 place-items-center rounded-full text-xs font-bold ${q.cls}`}
                                    >
                                        {q.initials}
                                    </span>
                                    <div>
                                        <p className="text-sm font-bold text-ink">{q.name}</p>
                                        <p className="text-xs text-ink-muted">{q.role}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}