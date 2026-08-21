export default function SEOContent() {
    return (
        <section
            id="json-info"
            aria-labelledby="json-info-heading"
            className="w-full py-12 sm:py-16"
        >
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <h2
                        id="json-info-heading"
                        className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
                    >
                        JSON Formatter & Validator
                    </h2>

                    <div className="mt-8 space-y-8 text-sm leading-7 text-text-secondary sm:text-base">
                        <article>
                            <h3 className="text-lg font-semibold text-text-primary">
                                What is a JSON Formatter?
                            </h3>

                            <p className="mt-2">
                                A JSON formatter makes JSON data easier to read
                                by adding consistent indentation, spacing, and
                                line breaks. This is especially useful when
                                working with API responses, configuration
                                files, logs, and other structured data.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-lg font-semibold text-text-primary">
                                How to Format JSON Online
                            </h3>

                            <p className="mt-2">
                                Paste your JSON into the input editor above and
                                choose <strong>Format</strong>. The formatter
                                validates the JSON and displays a readable,
                                properly indented version in the output editor.
                                You can then copy or download the formatted
                                result.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-lg font-semibold text-text-primary">
                                JSON Formatter vs JSON Validator
                            </h3>

                            <p className="mt-2">
                                A JSON formatter improves the readability of
                                valid JSON, while a JSON validator checks
                                whether the data follows valid JSON syntax.
                                This tool combines both capabilities so you can
                                format your JSON and identify syntax errors in
                                the same place.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-lg font-semibold text-text-primary">
                                JSON Formatter vs JSON Minifier
                            </h3>

                            <p className="mt-2">
                                Formatted JSON uses indentation and line breaks
                                to make data easier for people to read.
                                Minified JSON removes unnecessary whitespace to
                                produce a smaller representation that can be
                                useful when transferring or storing JSON.
                            </p>
                        </article>

                        <article>
                            <h3 className="text-lg font-semibold text-text-primary">
                                Is My JSON Data Uploaded?
                            </h3>

                            <p className="mt-2">
                                Your JSON is processed directly in your
                                browser. The application does not upload your
                                JSON to a SontuCode server for formatting or
                                validation. If you use the Save feature, the
                                saved JSON is stored locally in your browser.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}