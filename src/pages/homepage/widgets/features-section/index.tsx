import { motion } from "motion/react";
import { ArrowRight, Columns3, FileSpreadsheet, MessagesSquare, Milestone } from "lucide-react";

// COMPONENTS
import { Reveal } from "../../../../components/reveal";

// ENTITIES
import type { TYPE_FEATURE } from "../../entities/types";

const BoardVisual = () => {
    return (
        <div className="mt-6">
            <div className="flex items-center justify-between text-[11px] font-semibold">
                <span className="text-ink">Sprint 12</span>
                <span className="text-ink-muted">18/24</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-jade-100">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-jade-600"
                />
            </div>
        </div>
    );
}

const ThreadsVisual = () => {
    return (
        <div className="mt-6 flex flex-col gap-2">
            <div className="w-4/5 rounded-xl rounded-tl-sm bg-jade-50 px-3 py-2 text-[10px] font-medium text-ink-muted">
                Decision lives here, not in chat
            </div>
            <div className="ml-auto w-3/5 rounded-xl rounded-tr-sm bg-jade-700 px-3 py-2 text-[10px] font-medium text-white">
                Attached to the task itself
            </div>
        </div>
    );
}

const TimelineVisual = () => {
    return (
        <div className="mt-6">
            <div className="relative h-px bg-jade-950/15">
                {["12%", "48%", "84%"].map((left, i) => (
                    <span
                        key={left}
                        style={{ left }}
                        className={`absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-white ${i === 1 ? "bg-jade-500" : "bg-jade-700"
                            }`}
                    />
                ))}
            </div>
            <div className="mt-2 flex justify-between text-[9px] tracking-wider text-ink-muted uppercase">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
            </div>
        </div>
    );
}

const ImportVisual = () => {
    return (
        <div className="mt-6 flex items-center gap-2 text-[10px] font-bold">
            <span className="rounded-lg bg-sky-100 px-2.5 py-1.5 text-sky-700">Trello</span>
            <ArrowRight className="size-3.5 text-jade-600" />
            <span className="rounded-lg bg-jade-700 px-2.5 py-1.5 text-white">Novi</span>
            <span className="ml-auto text-[10px] font-semibold text-jade-700">2 min</span>
        </div>
    );
}

const FEATURES: TYPE_FEATURE[] = [
    {
        id: "boards",
        icon: Columns3,
        title: "Boards that move at your speed",
        desc: "Plan sprints and track tasks without hunting through spreadsheets.",
        visual: <BoardVisual />,
    },
    {
        id: "threads",
        icon: MessagesSquare,
        title: "Threads, not another inbox",
        desc: "Keep project conversations attached to the work itself.",
        visual: <ThreadsVisual />,
    },
    {
        id: "timeline",
        icon: Milestone,
        title: "One timeline for the whole team",
        desc: "Every deadline and milestone in one shared view.",
        visual: <TimelineVisual />,
    },
    {
        id: "import",
        icon: FileSpreadsheet,
        title: "Works the way you already do",
        desc: "Import from Trello, Asana, or a spreadsheet in minutes.",
        visual: <ImportVisual />,
        cta: true,
    },
];

export const FeatureSection = () => {
    return (
        <section id="features" className="scroll-mt-24 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal className="max-w-2xl flex flex-col gap-4">
                    <p className="text-xs font-semibold tracking-[0.2em] text-jade-700 uppercase">
                        Features
                    </p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                        Designed for clarity, engineered for speed.
                    </h2>
                    <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                        Everything a small team needs to ship, nothing that gets in the way.
                    </p>
                </Reveal>
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {FEATURES.map((f: TYPE_FEATURE, i) => (
                        <Reveal key={f.id} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(13,92,70,0.04)] transition-shadow hover:shadow-[0_20px_40px_-16px_rgba(13,92,70,0.22)]"
                            >
                                <span className="grid size-10 place-items-center rounded-xl bg-jade-100 text-jade-700 transition-colors duration-200 group-hover:bg-jade-700 group-hover:text-white">
                                    <f.icon className="size-5" />
                                </span>
                                <h3 className="font-heading mt-4 text-lg font-semibold tracking-tight text-ink">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
                                <div className="mt-auto">
                                    {f.visual}
                                    {f.cta && (
                                        <button
                                            onClick={() => { }}
                                            className="mt-4 inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-jade-700 transition-colors hover:text-jade-800"
                                        >
                                            Try the importer
                                            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}