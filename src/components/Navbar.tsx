"use client";

import Link from "next/link";
import Container from "@/components/Container";
import TooltipWrapper from "@/lib/TooltipWrapper";
import { navigation } from "@/config/data";
import { usePathname } from "next/navigation";


function NavbarLogo() {
    return (
        <TooltipWrapper text="Home">
            <Link href="/" aria-label="Home" className="hidden sm:block">
                <div className="bg-primary-accent/40 flex items-center justify-center rounded-md p-px">
                    <img
                        src="/Hero.png"
                        alt="Subhadip Maity"
                        width={35}
                        height={35}
                        className="rounded-md object-cover"
                    />
                </div>
            </Link>
        </TooltipWrapper>
    );
}

function Heading() {
    return (
        <h1 className="m-0 flex items-center gap-1 font-sans tracking-[-0.035em]">
            <span className="text-[clamp(28px,5vw,42px)] font-extrabold leading-none text-primary">
                JSON
            </span>

            <span className="flex flex-col items-start justify-center leading-[1.15] font-bold">
                <span className="text-[clamp(7px,2.2vw,13px)] tracking-tight text-text-primary whitespace-nowrap">
                    FORMATTER
                </span>
                <span className="text-[clamp(7px,2.2vw,13px)] mt-px tracking-tight text-text-primary whitespace-nowrap">
                    &amp; VALIDATOR
                </span>
            </span>
        </h1>
    );
}

function NavbarLinks() {
    const pathname = usePathname();

    return (
        <>
            {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            className={`focus-visible:outline-none 
                                focus-visible:ring-ring 
                                font-semibold 
                                transition-colors 
                                duration-300 
                                focus-visible:ring-2 
                                focus-visible:ring-offset-2 ${
                                isActive
                                    ? "text-foreground pointer-events-none"
                                    : "text-muted hover:text-secondary"
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                );
            })}
        </>
    );
}

export default function Navbar() {
    return (
        <header className="bg-background sticky top-0 z-50">
            <Container>
                <nav
                    aria-label="Primary Navigation"
                    className="flex h-14 items-center justify-between"
                >
                    {/* Left */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <NavbarLogo />
                        <Heading />
                    </div>

                    {/* Right */}
                    <div className="">
                        <ul className="flex items-center gap-6">
                            <NavbarLinks />
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
}


