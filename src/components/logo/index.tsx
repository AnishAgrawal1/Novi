export const LogoMark = ({ className = "size-9" }: { className?: string }) => {
    return (
        <span
            className={`grid place-items-center rounded-xl bg-jade-700 ${className}`}
        >
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
                <rect x="3" y="5" width="5" height="14" rx="1.5" fill="white" />
                <rect x="9.5" y="5" width="5" height="9" rx="1.5" fill="white" opacity="0.72" />
                <rect x="16" y="5" width="5" height="12" rx="1.5" fill="white" opacity="0.42" />
            </svg>
        </span>
    );
}

export const Logo = ({ dark = false }: { dark?: boolean }) => {
    return (
        <a
            href="#home"
            data-testid="logo-link"
            className="flex items-center gap-2 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-jade-500"
        >
            <LogoMark />
            <span
                className={`font-heading text-xl font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}
            >
                Novi
            </span>
        </a>
    );
}