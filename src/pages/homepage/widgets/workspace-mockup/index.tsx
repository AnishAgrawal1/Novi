import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";

// ENTITIES
import { TABS } from "../../entities/constants";
import type { TYPE_TAB_ID } from "../../entities/types";

// FEATURES
import { BoardPanel } from "../../features/board-panel";
import { ThreadsPanel } from "../../features/threads-panel";
import { TimelinePanel } from "../../features/timeline-panel";
import { DocsPanel } from "../../features/docs-panel";

const PANELS: Record<TYPE_TAB_ID, React.ComponentType> = {
    board: BoardPanel,
    threads: ThreadsPanel,
    timeline: TimelinePanel,
    docs: DocsPanel,
};

export const WorkspaceMockup = () => {
    const [tab, setTab] = useState<TYPE_TAB_ID>("board");
    const ActivePanel = PANELS[tab];

    return (
        <div className="relative rounded-2xl border border-gray-200 bg-white shadow-[0_1px_2px_rgba(13,92,70,0.04),0_8px_24px_-4px_rgba(13,92,70,0.08),0_28px_56px_-12px_rgba(13,92,70,0.14)]">
            <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                    <span className="size-2.5 rounded-full bg-rose-300" />
                    <span className="size-2.5 rounded-full bg-amber-300" />
                    <span className="size-2.5 rounded-full bg-jade-400" />
                </div>
                <div className="flex-1">
                    <span className="mx-auto block w-fit rounded-full bg-jade-50 px-3 py-1 text-[10px] text-jade-800">
                        novi.app/studio
                    </span>
                </div>
                <button
                    aria-label="New task"
                    className="grid size-6 cursor-pointer place-items-center rounded-full bg-jade-700 text-white transition-transform hover:scale-110"
                >
                    <Plus className="size-4" />
                </button>
            </div>

            <div className="flex gap-1 overflow-x-auto overflow-y-hidden px-4 pt-3 scrollbar-none">
                {TABS.map((t) => {
                    const active = tab === t.id;
                    return (
                        <button
                            key={t.id}
                            onClick={() => setTab(t.id)}
                            className={`relative flex cursor-pointer items-center gap-2 rounded-t-lg px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors ${active ? "text-jade-800" : "text-ink-muted hover:text-ink"
                                }`}
                        >
                            <t.icon className="size-3.5" />
                            {t.label}
                            {active && (
                                <motion.span
                                    layoutId="mockup-tab-underline"
                                    className="absolute inset-x-2 -bottom-px h-1 rounded-full bg-jade-600"
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="h-80 border-t border-gray-200 p-3 sm:h-85 sm:p-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full"
                    >
                        <ActivePanel />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}