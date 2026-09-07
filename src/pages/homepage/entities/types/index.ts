import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TYPE_TAB_ID = "board" | "threads" | "timeline" | "docs";
 
export type TYPE_TAB = {
    id: TYPE_TAB_ID;
    label: string;
    icon: LucideIcon;
};
 
export type TYPE_TASK = {
    id: string;
    title: string;
    tag: string;
    col: number;
    who: string;
};
 
export type TYPE_THREAD_REPLY = {
    who: string;
    text: string;
};
 
export type TYPE_THREAD = {
    id: string;
    title: string;
    author: string;
    who: string;
    ago: string;
    replies: TYPE_THREAD_REPLY[];
};
 
export type TYPE_MILESTONE = {
    label: string;
    team: string;
    left: string;
    width: string;
    bar: string;
};
 
export type TYPE_TEAM_FILTER = "All" | "Design" | "Eng";
 
export type TYPE_DOC_ITEM = {
    id: string;
    text: string;
    done: boolean;
};

export type TYPE_SOCIAL_PROOF = { name: string; icon: LucideIcon };

export type TYPE_FEATURE = {
    id: string;
    icon: LucideIcon;
    title: string;
    desc: string;
    visual: ReactNode;
    cta?: boolean;
};

export type TYPE_MESSY_SPRINT = {
    title: string;
    note: string;
    rotate: string;
    tint: string;
};

export type TYPE_NOVI_SPRINT = string;

export type TYPE_TESTIMONIALS_METRICS = {
    value: string;
    label: string;
};

export type TYPE_TESTIMONIALS_QUOTES = {
    id: string;
    quote: string;
    name: string;
    role: string;
    initials: string;
    cls: string;
};

export type TYPE_PRICING_PLANS = {
    name: string;
    description: string;
    price: { monthly: string; annual: string };
    priceSuffix: string;
    features: string[];
    cta: string;
    highlighted: boolean;
};