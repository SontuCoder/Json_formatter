"use client";

import { useEffect, useRef } from "react";

export default function AdSection() {
    const ADSENSE_CLIENT =
        process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

    const leftSlot =
        process.env.NEXT_PUBLIC_LEFT_AD_SLOT;

    const rightSlot =
        process.env.NEXT_PUBLIC_RIGHT_AD_SLOT;

    const initialized = useRef(false);

    useEffect(() => {
        if (
            !ADSENSE_CLIENT ||
            !leftSlot ||
            !rightSlot ||
            initialized.current
        ) {
            return;
        }

        try {
            const ads = window.adsbygoogle || [];

            ads.push({});
            ads.push({});

            window.adsbygoogle = ads;
            initialized.current = true;
        } catch (error) {
            console.error("AdSense error:", error);
        }
    }, [ADSENSE_CLIENT, leftSlot, rightSlot]);

    if (!ADSENSE_CLIENT || !leftSlot || !rightSlot) {
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
                </div>
            </div>
        </section>
    );
}