"use client";

import { useEffect, useState } from "react";
import { faqs } from "@/config/data";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const html = document.documentElement;
        const prev = html.style.overflowY;
        html.style.overflowY = "scroll";
        return () => {
            html.style.overflowY = prev;
        };
    }, []);

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="scroll-mt-20 py-10"
        >
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
                <div className="mb-10 text-center">
                    <h2
                        id="faq-heading"
                        className="text-2xl font-bold tracking-tight text-primary sm:text-3xl"
                    >
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-text-secondary sm:text-base">
                        Everything you need to know about formatting, validating, and working with JSON using SontuCode.
                    </p>
                </div>

                <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={faq.question}>
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() =>
                                        setOpenIndex(isOpen ? null : index)
                                    }
                                    className="flex w-full cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-text-primary transition-colors hover:bg-surface"
                                >
                                    <span>{faq.question}</span>

                                    <span
                                        aria-hidden="true"
                                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary font-normal text-2xl transition-transform duration-200 ${
                                            isOpen ? "rotate-45 bg-danger/50" : "bg-primary-accent/30"
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>

                                <div
                                    className="grid transition-[grid-template-rows] duration-200 ease-in-out "
                                    style={{
                                        gridTemplateRows: isOpen
                                            ? "1fr"
                                            : "0fr",
                                    }}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pl-5 pb-5 pr-5 text-sm leading-5 text-text-secondary">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}