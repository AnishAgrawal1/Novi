import { CalendarRange, Columns3, FileText, MessageSquare } from "lucide-react";

// TYPES
import type { 
    TYPE_TESTIMONIALS_METRICS, 
    TYPE_TESTIMONIALS_QUOTES,
    TYPE_PRICING_PLANS,
    TYPE_MESSY_SPRINT, 
    TYPE_NOVI_SPRINT, 
    TYPE_TAB,
    TYPE_TASK,
    TYPE_THREAD,
    TYPE_MILESTONE,
    TYPE_DOC_ITEM
} from "../types";
 
export const TABS: TYPE_TAB[] = [
    { id: "board", label: "Board", icon: Columns3 },
    { id: "threads", label: "Threads", icon: MessageSquare },
    { id: "timeline", label: "Timeline", icon: CalendarRange },
    { id: "docs", label: "Docs", icon: FileText },
];
 
export const BOARD_COLUMNS = ["To do", "In progress", "Done"];
 
export const TAG_STYLES: Record<string, string> = {
    Design: "bg-violet-100 text-violet-700",
    Eng: "bg-sky-100 text-sky-700",
    Marketing: "bg-amber-100 text-amber-700",
    Research: "bg-rose-100 text-rose-700",
    Growth: "bg-jade-100 text-jade-800",
};
 
export const WHO_STYLES: Record<string, string> = {
    AK: "bg-rose-200 text-rose-800",
    JM: "bg-sky-200 text-sky-800",
    RS: "bg-amber-200 text-amber-800",
    TL: "bg-violet-200 text-violet-800",
    MO: "bg-jade-200 text-jade-800",
};
 
export const INITIAL_TASKS: TYPE_TASK[] = [
    { id: "t1", title: "Redesign onboarding flow", tag: "Design", col: 1, who: "AK" },
    { id: "t2", title: "Ship billing page", tag: "Eng", col: 0, who: "JM" },
    { id: "t3", title: "Write launch post", tag: "Marketing", col: 0, who: "RS" },
    { id: "t4", title: "Fix mobile nav overflow", tag: "Eng", col: 2, who: "TL" },
    { id: "t5", title: "User interview synthesis", tag: "Research", col: 1, who: "MO" },
    { id: "t6", title: "Pricing page A/B test", tag: "Growth", col: 0, who: "AK" },
];
 
export const THREADS: TYPE_THREAD[] = [
    {
        id: "th1",
        title: "Homepage hero copy — final?",
        author: "Maya",
        who: "MO",
        ago: "9:41",
        replies: [
            { who: "JM", text: "Ship it. The shorter subhead wins." },
            { who: "MO", text: "Done — updating the doc now." },
        ],
    },
    {
        id: "th2",
        title: "Do we gate exports behind Pro?",
        author: "Ravi",
        who: "RS",
        ago: "8:15",
        replies: [{ who: "AK", text: "Yes, but keep CSV free. Fairness matters." }],
    },
    {
        id: "th3",
        title: "Sprint 13 scope check",
        author: "Lena",
        who: "TL",
        ago: "Tue",
        replies: [{ who: "JM", text: "Drop the A/B test, keep the mobile fixes." }],
    },
];
 
export const MILESTONES: TYPE_MILESTONE[] = [
    { label: "Brand refresh", team: "Design", left: "4%", width: "30%", bar: "bg-jade-400" },
    { label: "Mobile beta", team: "Eng", left: "26%", width: "36%", bar: "bg-jade-600" },
    { label: "Launch v2", team: "Eng", left: "58%", width: "24%", bar: "bg-jade-800" },
    { label: "User research", team: "Design", left: "68%", width: "27%", bar: "bg-jade-300" },
];
 
export const TIMELINE_FILTERS = ["All", "Design", "Eng"] as const;
 
export const DOC_ITEMS: TYPE_DOC_ITEM[] = [
    { id: "d1", text: "Finalize pricing tiers", done: true },
    { id: "d2", text: "Record demo video", done: false },
    { id: "d3", text: "Draft changelog entry", done: false },
];
 
export const DOC_EDITORS = ["MO", "JM", "AK"];

export const MESSY_SPRINT: TYPE_MESSY_SPRINT[] = [
    { title: "Sprint_Tracker_v27.xlsx", note: "edited 4 days ago", rotate: "-rotate-3", tint: "bg-amber-50 border-amber-200 text-amber-800" },
    { title: "Re: Re: Re: Homepage", note: "38 unread replies", rotate: "rotate-2", tint: "bg-rose-50 border-rose-200 text-rose-800" },
    { title: "Kanban — copy (2)", note: "out of sync", rotate: "-rotate-1", tint: "bg-sky-50 border-sky-200 text-sky-800" },
    { title: "Launch notes final.doc", note: "2 unresolved comments", rotate: "rotate-3", tint: "bg-violet-50 border-violet-200 text-violet-800" },
    { title: "Standup call #412", note: "could've been a thread", rotate: "-rotate-2", tint: "bg-orange-50 border-orange-200 text-orange-800" },
    { title: "Deadlines.ics", note: "missed yesterday", rotate: "rotate-1", tint: "bg-red-50 border-red-200 text-red-800" },
];

export const NOVI_SPRINT: TYPE_NOVI_SPRINT[] = [
    "Tasks, docs and threads in one place",
    "Every decision attached to its work",
    "Deadlines the whole team can see",
    "Zero tabs lost, zero meetings wasted",
];

export const TESTIMONIALS_METRICS: TYPE_TESTIMONIALS_METRICS[] = [
    { value: "3.4h", label: "saved per teammate, every week" },
    { value: "40%", label: "fewer status meetings" },
    { value: "2 min", label: "median import time" },
];

export const TESTIMONIALS_QUOTES: TYPE_TESTIMONIALS_QUOTES[] = [
    {
        id: "lena",
        quote:
            "We killed our status meetings in the first week. Novi is the first tool the whole studio actually opens every morning.",
        name: "Lena Ortiz",
        role: "Co-founder, Mono Studio",
        initials: "LO",
        cls: "bg-rose-200 text-rose-800",
    },
    {
        id: "priya",
        quote:
            "Importing from Trello took two minutes. Threads attached to tasks ended the 'where was that decision?' problem for good.",
        name: "Priya Nair",
        role: "Product Lead, Hyperflow",
        initials: "PN",
        cls: "bg-sky-200 text-sky-800",
    },
    {
        id: "tomas",
        quote:
            "It feels calm. Every other tool we tried felt like another inbox shouting for attention.",
        name: "Tomás Silva",
        role: "Design Director, Orbit Design",
        initials: "TS",
        cls: "bg-amber-200 text-amber-800",
    },
];

export const PRICING_PLANS: TYPE_PRICING_PLANS[] = [
    {
        name: "Free",
        description: "For tiny teams getting started.",
        price: { monthly: "0", annual: "0" },
        priceSuffix: "forever",
        features: ["Up to 5 seats", "3 boards with threads", "Docs included", "Community support"],
        cta: "Start free",
        highlighted: false,
    },
    {
        name: "Pro",
        description: "For teams shipping every week.",
        price: { monthly: "8", annual: "6" },
        priceSuffix: "/ seat / month",
        features: [
            "Unlimited boards & docs",
            "Timeline & milestones",
            "1-click imports",
            "Guest access for clients",
            "Priority support",
        ],
        cta: "Start 14-day trial",
        highlighted: true,
    },
];