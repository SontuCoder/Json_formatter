"use client";

import { useState } from "react";
import JsonEditor from "@/components/JsonEditor";

export default function TestEditor() {
    const [value, setValue] = useState(`{
  "name": "SontuCode",
  "active": true,
  "version": 1,
  "description": null
}`);

    return (
        <main className="min-h-screen bg-background p-8">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-4 text-2xl font-bold">
                    CodeMirror Test
                </h1>

                <div className="overflow-hidden rounded-xl border border-border">
                    <JsonEditor
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
        </main>
    );
}