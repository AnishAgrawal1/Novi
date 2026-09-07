import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// ENTITIES
import { THREADS, WHO_STYLES } from "../../entities/constants";
import type { TYPE_THREAD, TYPE_THREAD_REPLY } from "../../entities/types";

export const ThreadsPanel = () => {
    const [openId, setOpenId] = useState<string | null>("th1");

    return (
        <div className="flex h-full flex-col gap-2 overflow-y-auto pr-1">
            {THREADS.map((thread: TYPE_THREAD) => {
                const isOpen = openId === thread.id;
                return (
                    <div
                        key={thread.id}
                        className={`rounded-xl border p-3 transition-colors border-gray-200 ${isOpen ? "bg-neutral-50" : "bg-white"
                            }`}
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : thread.id)}
                            className="flex w-full cursor-pointer items-center gap-3 text-left"
                        >
                            <span
                                className={`grid size-6 shrink-0 place-items-center rounded-full text-[9px] font-bold ${WHO_STYLES[thread.who]}`}
                            >
                                {thread.who}
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block truncate text-xs font-semibold text-ink">
                                    {thread.title}
                                </span>
                                <span className="block text-[10px] text-ink-muted">
                                    {thread.author} · {thread.ago}
                                </span>
                            </span>
                            <span className="shrink-0 rounded-full bg-jade-100 px-2 py-0.5 text-[10px] font-semibold text-jade-800">
                                {thread.replies.length}
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-2.5 flex flex-col gap-1.5 border-l-2 border-jade-200 pl-3">
                                        {thread.replies.map((reply: TYPE_THREAD_REPLY, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span
                                                    className={`mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full text-[8px] font-bold ${WHO_STYLES[reply.who]}`}
                                                >
                                                    {reply.who}
                                                </span>
                                                <p className="rounded-lg rounded-tl-none bg-white px-3 py-2 text-[11px] leading-snug text-ink shadow-sm">
                                                    {reply.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
