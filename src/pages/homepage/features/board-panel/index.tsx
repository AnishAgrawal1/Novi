import { useState } from "react";
import { motion } from "motion/react";

// ENTITIES
import { BOARD_COLUMNS, INITIAL_TASKS, TAG_STYLES, WHO_STYLES } from "../../entities/constants";
import type { TYPE_TASK } from "../../entities/types";

export const BoardPanel = () => {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    const advanceTask = (id: string) =>
        setTasks((ts) => ts.map((t) => (t.id === id ? { ...t, col: Math.min(t.col + 1, 2) } : t)));

    return (
        <div className="grid h-full grid-cols-3 gap-2 sm:gap-3">
            {BOARD_COLUMNS.map((column: string, columnIndex: number) => (
                <div key={column} className="flex min-h-0 flex-col gap-2 rounded-xl bg-neutral-100 p-2">
                    <div className="flex items-center justify-between px-1 pt-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                            {column}
                        </span>
                        <span className="text-[10px] text-ink-muted">
                            {tasks.filter((t) => t.col === columnIndex).length}
                        </span>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto scrollbar-none">
                        {tasks
                            .filter((t) => t.col === columnIndex)
                            .map((task: TYPE_TASK) => (
                                <motion.button
                                    layoutId={task.id}
                                    layout
                                    key={task.id}
                                    title="Click to move forward"
                                    onClick={() => advanceTask(task.id)}
                                    className="cursor-pointer rounded-lg border border-gray-200 bg-white p-2 text-left shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <p className="text-[11px] leading-snug font-semibold text-ink">
                                        {task.title}
                                    </p>
                                    <div className="mt-2 flex items-center justify-between">
                                        <span
                                            className={`rounded-full px-2 py-1 text-[9px] font-bold ${TAG_STYLES[task.tag]}`}
                                        >
                                            {task.tag}
                                        </span>
                                        <span
                                            className={`grid size-4.5 place-items-center rounded-full text-[8px] font-bold ${WHO_STYLES[task.who]}`}
                                        >
                                            {task.who}
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
