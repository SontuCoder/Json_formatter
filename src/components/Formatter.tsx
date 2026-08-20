"use client";

import { useMemo, useState, useEffect } from "react";
import JsonEditor from "./JsonEditor";

type IndentOption = 2 | 4 | 8;

const SAMPLE_JSON = `{
  "name": "SontuCode",
  "description": "Developer tools for everyone",
  "tools": [
    "JSON Formatter",
    "Regex Builder"
  ],
  "active": true
}`;

export default function JsonFormatter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");
    const [status, setStatus] = useState<"idle" | "valid" | "invalid">(
        "idle",
    );
    const [indent, setIndent] = useState<IndentOption>(2);
    const [copied, setCopied] = useState(false);
    const [saveMessage, setSaveMessage] = useState("");

    const STORAGE_KEY = "sontucode-json-formatter";

    useEffect(() => {
        const savedJson = localStorage.getItem(STORAGE_KEY);
    
        if (savedJson) {
            setInput(savedJson);
        }
    }, []);

    const inputStats = useMemo(() => {
        const characters = input.length;
        const lines = input ? input.split(/\r?\n/).length : 0;

        return {
            characters,
            lines,
        };
    }, [input]);

    const outputStats = useMemo(() => {
        const characters = output.length;
        const lines = output ? output.split(/\r?\n/).length : 0;

        return {
            characters,
            lines,
        };
    }, [output]);

    function parseJson() {
        if (!input.trim()) {
            setError("Please enter JSON to continue.");
            setOutput("Please enter JSON to continue.");
            setStatus("invalid");
            return null;
        }

        try {
            const parsed = JSON.parse(input);

            setError("");
            setStatus("valid");

            return parsed;
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Invalid JSON.";
            setOutput(message)
            setError(message);
            setStatus("invalid");

            return null;
        }
    }

    function handleFormat() {
        const parsed = parseJson();

        if (parsed === null) {
            return;
        }

        const formatted = JSON.stringify(parsed, null, indent);

        setOutput(formatted);
    }

    function handleValidate() {
        const parsed = parseJson();

        if (parsed === null) {
            return;
        }

        setOutput(JSON.stringify(parsed, null, indent));
    }

    function handleMinify() {
        const parsed = parseJson();

        if (parsed === null) {
            return;
        }

        setOutput(JSON.stringify(parsed));
    }

    async function handleCopy() {
        if (!output) {
            return;
        }

        try {
            await navigator.clipboard.writeText(output);

            setCopied(true);

            window.setTimeout(() => {
                setCopied(false);
            }, 2500);
        } catch {
            setError("Unable to copy the result.");
        }
    }

    function handleDownload() {
        if (!output) {
            return;
        }

        const blob = new Blob([output], {
            type: "application/json",
        });

        const url = URL.createObjectURL(blob);

        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "formatted.json";

        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();

        URL.revokeObjectURL(url);
    }

    function handleClear() {
        setInput("");
        setOutput("");
        setError("");
        setStatus("idle");
        setCopied(false);
    }

    function handleLoadExample() {
        setInput(SAMPLE_JSON);
        setOutput("");
        setError("");
        setStatus("idle");
    }

    function handleSave() {
    if (!input.trim()) {
        setError("Nothing to save.");
        setStatus("invalid");
        return;
    }
    try{
    localStorage.setItem(STORAGE_KEY, input);

    setSaveMessage("JSON saved successfully.");

    window.setTimeout(() => {
        setSaveMessage("");
    }, 2500);

    } catch {
        setError("Unable to save JSON locally.");
    setStatus("invalid");
    }
}

    return (
        <section
            id="formatter"
            aria-labelledby="formatter-heading"
            className="scroll-mt-20 py-6 sm:py-10 w-full"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">

                <div className="mx-auto mb-8 max-w-2xl text-center">
                    <p className="mt-3 text-sm leading-6 text-text-secondary sm:text-base">
                        Format, validate and minify JSON directly in your
                        browser. Your JSON stays on your device.
                    </p>
                </div>

                {/* Main formatter */}
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    {/* Toolbar */}
                    <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h3 className="text-sm font-bold text-text-primary">
                                JSON Formatter
                            </h3>

                            <p className="mt-1 text-xs text-text-secondary">
                                Paste your JSON below to get started.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <button
                                type="button"
                                onClick={handleLoadExample}
                                className="rounded-md border border-border px-3 py-2 text-xs font-semibold text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                Load Example
                            </button>
                            <button
    type="button"
    onClick={handleSave}
    className="rounded-md border border-border bg-success/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-surface-hover hover:text-foreground"
>
    Save
</button>

                            <button
                                type="button"
                                onClick={handleClear}
                                disabled={!input && !output}
                                className="rounded-md border border-border px-3 py-2 text-xs font-semibold bg-primary text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                Clear
                            </button>

                        </div>
                    </div>

                    {/* Editors */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Input */}
                        <div className="min-w-0 border-b border-border lg:border-b-0 lg:border-r">
                            <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-surface-bold">
                                <span className="text-xs font-bold uppercase tracking-wide text-surface-hover">
                                    Input
                                </span>

                                <span className="text-[11px] text-surface-hover/70">
                                    {inputStats.characters} chars ·{" "}
                                    {inputStats.lines} lines
                                </span>
                            </div>

                            {/* <textarea
                                value={input}
                                onChange={(event) => {
                                    setInput(event.target.value);
                                    setStatus("idle");
                                    setError("");
                                }}
                                placeholder='Paste JSON here... e.g. {"name":"SontuCode"}'
                                spellCheck={false}
                                id="input-text"
                                aria-label="JSON input"
                                    className="min-h-105 w-full resize-y border-0 bg-editor-bg p-4 font-mono text-sm leading-6 text-text-primary outline-none placeholder:text-text-muted focus:ring-0"
                            /> */}
                            <JsonEditor 
                            value={input}
                            onChange={setInput}
                            />
                        </div>

                        {/* Output */}
                        <div className="min-w-0">
                            <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-surface-bold">
                                <span className="text-xs font-bold uppercase tracking-wide text-surface-hover">
                                    Output
                                </span>

                                <span className="text-[11px] text-surface-hover/70">
                                    {outputStats.characters} chars ·{" "}
                                    {outputStats.lines} lines
                                </span>
                            </div>

                            {/* <textarea
                                value={output}
                                readOnly
                                spellCheck={false}
                                id="output-text"
                                aria-label="JSON output"
                                placeholder="Formatted JSON will appear here..."
                                className="min-h-105 w-full resize-y border-0 bg-surface-soft p-4 font-mono text-sm leading-6 text-text-primary outline-none placeholder:text-text-muted"
                            /> */}
                            <JsonEditor
                            value={output}
                            readOnly
                            />
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="border-t border-border p-4 bg-surface-bold/40">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between ">
                            {/* Primary actions */}
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={handleFormat}
                                    className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                >
                                    Format
                                </button>

                                <button
                                    type="button"
                                    onClick={handleValidate}
                                    className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    Validate
                                </button>

                                <button
                                    type="button"
                                    onClick={handleMinify}
                                    className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    Minify
                                </button>
                            </div>

                            {/* Secondary actions */}
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    disabled={!output}
                                    className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-text-secondary bg-card transition-colors hover:bg-surface-hover hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    {copied ? "Copied!" : "Copy"}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleDownload}
                                    disabled={!output}
                                    className="rounded-md border border-border px-4 py-2 text-sm font-semibold text-surface-hover bg-success/60 transition-colors hover:bg-surface-hover hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    Download
                                </button>
                            </div>
                        </div>

                        {/* Options + status */}
                        <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                            <label className="flex items-center gap-2 text-xs font-medium text-text-secondary">
                                <span>Indentation</span>

                                <select
                                    value={indent}
                                    onChange={(event) =>
                                        setIndent(
                                            Number(
                                                event.target.value,
                                            ) as IndentOption,
                                        )
                                    }
                                    className="rounded-md border border-border bg-card px-2 py-1.5 text-xs text-text-primary outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value={2}>2 spaces</option>
                                    <option value={4}>4 spaces</option>
                                    <option value={8}>8 spaces</option>
                                </select>
                            </label>

                            <div
                                aria-live="polite"
                                className="text-xs font-medium"
                            >
                                {status === "valid" && (
                                    <span className="text-success">
                                        ✓ Valid JSON
                                    </span>
                                )}

                                {status === "invalid" && (
                                    <span className="text-danger">
                                        ✕ Invalid JSON
                                    </span>
                                )}

                                {status === "idle" && (
                                    <span className="text-text-muted">
                                        Ready
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div
                                role="alert"
                                className="mt-4 rounded-lg border border-danger/20 bg-danger-soft px-4 py-3 text-sm text-danger"
                            >
                                <span className="font-semibold">
                                    JSON Error:
                                </span>{" "}
                                {error}
                            </div>
                        )}
                    </div>
                </div>

                {/* Privacy note */}
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-border-soft bg-success/30 px-4 py-3">
                    <span
                        aria-hidden="true"
                        className="text-sm text-success"
                    >
                        🔒
                    </span>

                    <p className="text-xs font-bold leading-5 text-warning">
                        <span className="text-text-primary">
                            Privacy first:
                        </span>{" "}
                        Your JSON is processed directly in your browser.
                        SontuCode does not store your JSON data on its
                        servers.
                    </p>
                </div>
            </div>
            { saveMessage && (
    <div
        role="status"
        aria-live="polite"
        className="fixed bottom-6 left-1/2 z-100 -translate-x-1/2 rounded-lg border-2 border-primary bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-2xl"
    >
        <span className="mr-2 text-success">✓</span>
        {saveMessage}
    </div>
)}
        </section>
    );
}

