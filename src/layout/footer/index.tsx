// COMPONENTS
import { Logo } from "../../components/logo";

const GROUPS: { title: string; links: string[] }[] = [
    { title: "Product", links: ["Features", "Workflow", "Pricing", "Changelog"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Resources", links: ["Help center", "Import guide", "API docs", "Community"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
];

const SOCIALS = [
    { id: "twitter", label: "Twitter" },
    { id: "github", label: "GitHub" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "youtube", label: "YouTube" },
];

export const Footer = () => {
    return (
        <footer className="bg-jade-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                    <div className="flex flex-col gap-4 lg:col-span-4">
                        <Logo dark />
                        <p className="max-w-xs text-sm text-neutral-400">
                            The calm workspace for fast moving teams. Tasks, docs and conversations one
                            tab, zero chaos.
                        </p>
                        <div className="flex gap-2">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.id}
                                    href="#home"
                                    aria-label={s.label}
                                    className="size-10 flex items-center justify-center rounded-xl border border-neutral-400 bg-jade-900 text-jade-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-jade-700 hover:text-white"
                                />
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
                        {GROUPS.map((g) => (
                            <div key={g.title}>
                                <p className="text-xs font-bold text-jade-300 uppercase">
                                    {g.title}
                                </p>
                                <ul className="mt-4 flex flex-col gap-2">
                                    {g.links.map((l) => (
                                        <li key={l}>
                                            <a
                                                href="#home"
                                                className="text-sm text-neutral-400 transition-colors hover:text-white"
                                            >
                                                {l}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-600 pt-8 sm:flex-row">
                    <p className="text-xs text-jade-200/60">
                        © 2026 Novi Technologies, Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#home"
                            className="text-xs text-neutral-400 transition-colors hover:text-white"
                        >
                            Privacy
                        </a>
                        <a
                            href="#home"
                            className="text-xs text-neutral-400 transition-colors hover:text-white"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}