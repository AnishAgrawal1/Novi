import { Building2, Landmark, Leaf, Mountain, ShoppingBag, Wallet } from "lucide-react";

// ENTITIES
import type { TYPE_SOCIAL_PROOF } from "../../entities/types";

const LOGOS: TYPE_SOCIAL_PROOF[] = [
    { name: "Himalayan Java", icon: Mountain },
    { name: "Khalti", icon: Wallet },
    { name: "Daraz Nepal", icon: ShoppingBag },
    { name: "CG Digital", icon: Building2 },
    { name: "Gorkha Brewery", icon: Leaf },
    { name: "Nabil Bank", icon: Landmark },
];

export const SocialProofBar = () => {
    return (
        <section
            className="border-y border-gray-200 bg-neutral-50 py-10"
        >
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
                Trusted by small, fast moving teams
            </p>
            <div className="mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                <div className="animate-marquee flex w-max items-center gap-16 hover:paused">
                    {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((l: TYPE_SOCIAL_PROOF, i) => (
                        <span
                            key={`${l.name}-${i}`}
                            className="flex shrink-0 items-center gap-3 text-ink-muted/60 transition-colors hover:text-jade-800"
                        >
                            <l.icon className="size-5" />
                            <span className="font-heading text-lg font-bold whitespace-nowrap">{l.name}</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}