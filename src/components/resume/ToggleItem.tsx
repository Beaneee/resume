"use client";

import { useState } from "react";
import type { Achievement } from "@/types/resume";

export default function ToggleItem({ achievement }: { achievement: Achievement }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="toggle-item">
      <div className="toggle-header" onClick={() => setOpen((prev) => !prev)}>
        <span className="toggle-icon">{open ? "▾" : "▸"}</span>
        <span className="toggle-title">{achievement.title}</span>
      </div>
      {open && (
        <div className="toggle-content">
          {achievement.details.map((detail, i) => (
            <div
              key={i}
              className={`indent ${detail.highlight ? "n-text-red" : ""}`}
            >
              {detail.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
