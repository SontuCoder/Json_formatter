"use client";

import { indentationMarkers } from "@replit/codemirror-indentation-markers";
import { useEffect, useRef } from "react";
import { EditorState } from "@codemirror/state";
import {
    EditorView,
    lineNumbers,
    keymap
} from "@codemirror/view";
import { json } from "@codemirror/lang-json";
import {
    defaultKeymap,
    indentWithTab,
    historyKeymap,
    history
} from "@codemirror/commands";
import {
    syntaxHighlighting,
    HighlightStyle,
    foldGutter,
    foldKeymap
} from "@codemirror/language";
import {
    tags,
} from "@lezer/highlight";

type JsonEditorProps = {
    value: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
};

const jsonHighlightStyle = HighlightStyle.define([
    {
        tag: tags.propertyName,
        color: "#2f7fb8",
        fontWeight: "600",
    },

    {
        tag: tags.string,
        color: "#287a55",
        fontWeight: "600"
    },

    {
        tag: tags.number,
        color: "#a66a24",
        fontWeight: "600"
    },

    {
        tag: tags.bool,
        color: "#7c3aed",
        fontWeight: "600",
    },

    {
        tag: tags.null,
        color: "#b94a48",
        fontWeight: "600",
    },

    {
        tag: tags.bracket,
        color: "#607080",
    },

    {
        tag: tags.punctuation,
        color: "#607080",
    },
]);

export default function JsonEditor({
    value,
    onChange,
    readOnly = false,
}: JsonEditorProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const viewRef = useRef<EditorView | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const state = EditorState.create({
            doc: value,

            extensions: [
                lineNumbers(),
                EditorView.lineWrapping,

                json(),

                syntaxHighlighting(jsonHighlightStyle),
                indentationMarkers({
                    highlightActiveBlock: true,
                    hideFirstIndent: false,
                    markerType: "fullScope",
                    thickness: 1,
                    activeThickness: 1,
                    colors: {
                        light: "#eadfce",
                        activeLight: "#d6a15f",
                        dark: "#eadfce",
                        activeDark: "#d6a15f",
                    },
                }),
                history(),
                foldGutter({
                    openText: "▾",
                    closedText: "▸",
                }),

                keymap.of([
                    ...defaultKeymap,
                    ...historyKeymap,
                    ...foldKeymap,
                    indentWithTab,
                ]),

                EditorView.editable.of(!readOnly),

                EditorView.theme({
                    "&": {
                        width: "100%",
                        height: "480px",
                        maxHeight:"600px",
                        backgroundColor: "#fdfcf9",
                        color: "#334155",
                        fontSize: "14px",
                    },

                    ".cm-scroller": {
                        overflow: "auto",
                        fontFamily:
                            '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace',
                    },

                    ".cm-content": {
                        minHeight: "480px",
                        padding: "16px 0",
                    },

                    ".cm-line": {
                        padding: "0 16px",
                        lineHeight: "24px",
                    },

                    ".cm-gutters": {
                        backgroundColor: "#faf8f3",
                        color: "#263238",
                        fontWeight: "550",
                        border: "none",
                        borderRight: "1px solid #e8e3d9",
                    },

                    ".cm-gutterElement": {
                        padding: "0 8px",
                    },

                    ".cm-activeLineGutter": {
                        backgroundColor: "#f9f6ef",
                    },

                    ".cm-activeLine": {
                        backgroundColor: "#fdfaf4",
                    },

                    "&.cm-focused": {
                        outline: "none",
                    },

                    ".cm-cursor": {
                        borderLeftColor: "#3b6ea8",
                    },

                    ".cm-selectionBackground": {
                        backgroundColor: "#f1e6d2",
                    },

                    "&.cm-focused .cm-selectionBackground": {
                        backgroundColor: "#f1e6d2",
                    },
                }),

                EditorView.updateListener.of((update) => {
                    if (update.docChanged && onChange) {
                        onChange(update.state.doc.toString());
                    }
                }),
            ],
        });

        const view = new EditorView({
            state,
            parent: containerRef.current,
        });

        viewRef.current = view;

        return () => {
            view.destroy();
            viewRef.current = null;
        };
    }, [value, onChange, readOnly]);

    useEffect(() => {
        const view = viewRef.current;

        if (!view) return;

        const currentValue = view.state.doc.toString();

        if (currentValue === value) return;

        view.dispatch({
            changes: {
                from: 0,
                to: currentValue.length,
                insert: value,
            },
        });
    }, [value]);

    return (
        <div
            ref={containerRef}
            className="w-full overflow-hidden"
        />
    );
}