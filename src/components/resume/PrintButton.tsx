"use client";

export default function PrintButton() {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <button className="print-btn" onClick={() => window.print()}>
      🖨️ PDF 저장
    </button>
  );
}
