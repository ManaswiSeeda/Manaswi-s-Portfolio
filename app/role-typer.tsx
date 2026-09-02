"use client";

import { useEffect, useState } from "react";

const roles = [
  "AI/ML Engineer",
  "Machine Learning Engineer",
  "Data Analyst",
  "Data Engineer",
  "Full-Stack Developer",
  "Software Engineer",
  "Cloud Engineer",
];

export default function RoleTyper() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(roles[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(roles.join(" · "));
      return;
    }
    const current = roles[index];
    const pause = deleting && text.length === 0 ? 80 : !deleting && text === current ? 300 : deleting ? 18 : 25;
    const timer = window.setTimeout(() => {
      if (deleting) {
        if (text.length === 0) { setIndex((i) => (i + 1) % roles.length); setDeleting(false); }
        else setText(current.slice(0, -1));
      } else if (text === current) setDeleting(true);
      else setText(current.slice(0, text.length + 1));
    }, pause);
    return () => window.clearTimeout(timer);
  }, [deleting, index, text]);

  return <span className="role-typer" aria-live="polite"><strong>{text}</strong><i aria-hidden="true" /></span>;
}
