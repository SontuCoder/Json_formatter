type AdSectionProps = {
    leftSlot: string;
    rightSlot: string;
};

export default function AdSection({
    leftSlot,
    rightSlot,
}: AdSectionProps) {
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
                    {/* Left Ad */}
                    <div className="flex min-h-22.5 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
                        <ins
                            className="adsbygoogle block w-full"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                            data-ad-slot={leftSlot}
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                        />
                    </div>

                    {/* Right Ad */}
                    <div className="flex min-h-22.5 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
                        <ins
                            className="adsbygoogle block w-full"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
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