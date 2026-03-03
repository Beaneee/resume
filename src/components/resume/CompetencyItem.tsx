import type { CoreCompetency } from "@/types/resume";

export default function CompetencyItem({ item }: { item: CoreCompetency }) {
  return (
    <li>
      <strong>{item.title}:</strong>{" "}
      {item.text}
      {item.highlight && (
        <span className="n-text-red">{item.highlight}</span>
      )}
      {item.suffix}
    </li>
  );
}
