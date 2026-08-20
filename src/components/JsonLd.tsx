export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "SontuCode JSON Formatter",
        url: "https://sontucode.dev/json-formatter",
        description:
            "Free online JSON formatter and validator for formatting, beautifying, validating, and minifying JSON directly in your browser.",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
        featureList: [
            "JSON formatting",
            "JSON validation",
            "JSON beautification",
            "JSON minification",
            "JSON syntax highlighting",
            "Copy and download JSON",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
    );
}