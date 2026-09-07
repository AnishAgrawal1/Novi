import { useState } from "react";
import { motion } from "motion/react";

// ENTITIES
import { MILESTONES, TIMELINE_FILTERS } from "../../entities/constants";
import type { TYPE_MILESTONE, TYPE_TEAM_FILTER } from "../../entities/types";

export const TimelinePanel = () => {
    const [filter, setFilter] = useState<TYPE_TEAM_FILTER>("All");

    return (
        <div className="flex h-full flex-col">
            <div className="flex gap-1.5">
                {TIMELINE_FILTERS.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-semibold transition-colors ${filter === f
                            ? "bg-jade-700 text-white"
                            : "bg-jade-50 text-ink-muted hover:bg-jade-100"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="mt-4 flex-1">
                <div className="flex justify-between text-[10px] tracking-wider text-ink-muted uppercase">
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                </div>
                <div className="relative mt-2 flex flex-col gap-3 border-t border-gray-200 pt-3">
                    {MILESTONES.map((milestone: TYPE_MILESTONE) => {
                        const dimmed = filter !== "All" && milestone.team !== filter;
                        return (
                            <div key={milestone.label} className="relative h-8">
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        left: milestone.left,
                                        width: milestone.width,
                                        transformOrigin: "left",
                                    }}
                                    className={`absolute top-0 flex h-8 items-center rounded-lg px-3 transition-opacity duration-300 ${milestone.bar
                                        } ${dimmed ? "opacity-15" : "opacity-100"}`}
                                >
                                    <span className="truncate text-[10px] font-bold whitespace-nowrap text-white">
                                        {milestone.label}
                                    </span>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <p className="mt-2 text-[10px] text-ink-muted">
                Every deadline and milestone in one shared view.
            </p>
        </div>
    );
}
