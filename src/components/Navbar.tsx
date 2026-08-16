"use client";

import Link from "next/link";
import Container from "@/components/Container";
import TooltipWrapper from "@/lib/TooltipWrapper";
import { navigation } from "@/config/data";
import { useState, useEffect } from "react";


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

function MenuIcon({ open }: { open: boolean }) {
    return (
        <span className="relative flex h-5 w-5 flex-col items-center justify-center">
            <span
                className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ${
                    open ? "rotate-45" : "-translate-y-1.5"
                }`}
            />

            <span
                className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                }`}
            />

            <span
                className={`absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-200 ${
                    open ? "-rotate-45" : "translate-y-1.5"
                }`}
            />
        </span>
    );
}

function DesktopNavbarLinks() {
    return (
        <ul className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className="font-semibold text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

function MobileNavbarLinks({
    open,
    onNavigate,
}: {
    open: boolean;
    onNavigate: () => void;
}) {
    return (
        <div
            className={`overflow-hidden border-t border-border bg-background transition-all duration-300 md:hidden
                ${
                    open
                        ? "max-h-96 opacity-100"
                        : "max-h-0 border-transparent opacity-0"
                }
            `}
        >
            <ul className="flex flex-col py-2">
                {navigation.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            onClick={onNavigate}
                            className="block px-4 py-3 font-semibold text-muted transition-colors duration-200 hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <header className="bg-background sticky top-0 z-50">
            <Container>
                <nav
                    aria-label="Primary Navigation"
                    className="flex h-14 items-center justify-between"
                >
                    <div className="flex items-center gap-6">
                        <NavbarLogo />
                        <Heading />
                    </div>

                    <DesktopNavbarLinks />

                    <button
                        type="button"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((value) => !value)}
                        className="flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                    >
                        <MenuIcon open={menuOpen} />
                    </button>
                </nav>

                <div id="mobile-navigation">
                    <MobileNavbarLinks
                        open={menuOpen}
                        onNavigate={() => setMenuOpen(false)}
                    />
                </div>
            </Container>
        </header>
    );
}


