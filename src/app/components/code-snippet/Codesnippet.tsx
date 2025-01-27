"use client";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import { useEffect, useRef } from "react";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);

import styles from "./code-snippet.module.css";

import "highlight.js/styles/monokai.css";

const CodeSnippet = ({ content }: { content: string }) => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, []);

  return (
    <pre className={styles.snippet}>
      <code ref={codeRef}>{content}</code>
    </pre>
  );
};

export default CodeSnippet;
