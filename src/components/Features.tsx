
const features = [
    {
        title: "Format & Beautify",
        description:
            "Turn compact or messy JSON into clean, readable and properly indented JSON.",
        icon: "✦",
    },
    {
        title: "Validate JSON",
        description:
            "Quickly check your JSON for syntax errors and identify invalid JSON input.",
        icon: "✓",
    },
    {
        title: "Minify JSON",
        description:
            "Remove unnecessary spaces and line breaks to create compact JSON.",
        icon: "</>",
    },
    {
        title: "Instant Results",
        description:
            "Process your JSON directly in the browser and get results instantly.",
        icon: "⚡",
    },
    {
        title: "Privacy First",
        description:
            "Your JSON is processed in your browser and is not stored by SontuCode.",
        icon: "◉",
    },
    {
        title: "Copy & Download",
        description:
            "Copy your result to the clipboard or download formatted JSON as a file.",
        icon: "↓",
    },
];

export default function FeaturesSection() {
    return (
        <section
            id="features"
            aria-labelledby="features-heading"
            className="scroll-mt-20 py-10 sm:py-20"
        >
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
                {/* Heading */}
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <h2
                        id="features-heading"
                        className="text-2xl font-bold tracking-tight text-primary sm:text-3xl"
                    >
                        Everything You Need to Work With JSON
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
                        Simple, fast and privacy-friendly tools for formatting,
                        validating and working with JSON.
                    </p>
                </div>

                {/* Features */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                        >
                            <div
                                className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft font-semibold text-primary"
                                aria-hidden="true"
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-base font-bold text-text-primary">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-text-secondary">
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

