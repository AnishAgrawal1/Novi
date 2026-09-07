import { useState } from "react";
import { Check } from "lucide-react";

// ENTITIES
import { DOC_EDITORS, DOC_ITEMS, WHO_STYLES } from "../../entities/constants";
import type { TYPE_DOC_ITEM } from "../../entities/types";

export const DocsPanel = () => {
    const [items, setItems] = useState(DOC_ITEMS);

    const toggleItem = (id: string) =>
        setItems((xs) => xs.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

    return (
        <div className="h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <p className="font-heading text-sm font-bold text-ink">Launch plan v2.0</p>
                <span className="text-[10px] text-ink-muted">edited 2m ago</span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-ink-muted">
                One shared doc for the whole launch. Decisions live here, next to the tasks they
                produce, not in a chat scroll nobody can find.
            </p>
            <div className="mt-3 flex flex-col gap-1.5">
                {items.map((item: TYPE_DOC_ITEM) => (
                    <button
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-jade-50"
                    >
                        <span
                            className={`grid size-4.5 place-items-center rounded-md border transition-colors ${item.done
                                ? "border-jade-700 bg-jade-700 text-white"
                                : "border-gray-200 bg-white"
                                }`}
                        >
                            {item.done && <Check className="size-3" />}
                        </span>
                        <span
                            className={`text-xs font-medium transition-colors ${item.done ? "text-ink-muted line-through" : "text-ink"
                                }`}
                        >
                            {item.text}
                        </span>
                    </button>
                ))}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
                {DOC_EDITORS.map((editor) => (
                    <span
                        key={editor}
                        className={`grid size-5 place-items-center rounded-full text-[8px] font-bold ring-2 ring-white ${WHO_STYLES[editor]}`}
                    >
                        {editor}
                    </span>
                ))}
                <span className="ml-1 text-[10px] text-ink-muted">3 editing now</span>
            </div>
        </div>
    );
}
