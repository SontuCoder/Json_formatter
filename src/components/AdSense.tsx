"use client";

import { useEffect, useState } from "react";


export default function AdSection() {
    const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
    const leftSlot = process.env.LEFT_AD_SLOT;
    const rightSlot = process.env.RIGHT_AD_SLOT;

    const [leftVisible, setLeftVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);

    useEffect(() => {
        if (!ADSENSE_CLIENT) return;

        const timer = window.setTimeout(() => {
            const ads = document.querySelectorAll<HTMLElement>(
                ".adsbygoogle"
            );

            ads.forEach((ad, index) => {
                if (ad.getAttribute("data-ad-status") === "filled") {
                    if (index === 0) {
                        setLeftVisible(true);
                    }

                    if (index === 1) {
                        setRightVisible(true);
                    }
                }
            });
        }, 1000);

        return () => window.clearTimeout(timer);
    }, [ADSENSE_CLIENT]);

    if (!ADSENSE_CLIENT) {
        return null;
    }

    if (!leftVisible && !rightVisible) {
        return null;
    }

    return (
        <section
            aria-label="Advertisements"
            className="w-full py-8 sm:py-10"
        >
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
                <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-wider text-text-muted">
                    Advertisement
                </p>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {leftVisible && (
                        <div className="flex min-h-40 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
                            <ins
                                className="adsbygoogle block w-full"
                                style={{ display: "block" }}
                                data-ad-client={ADSENSE_CLIENT}
                                data-ad-slot={leftSlot}
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                            />
                        </div>
                    )}

                    {rightVisible && (
                        <div className="flex min-h-40 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
                            <ins
                                className="adsbygoogle block w-full"
                                style={{ display: "block" }}
                                data-ad-client={ADSENSE_CLIENT}
                                data-ad-slot={rightSlot}
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}