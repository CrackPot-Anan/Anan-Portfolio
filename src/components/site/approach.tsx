import { Section, SectionHeading } from "@/components/site/sections";
import { TOOL_ICONS } from "@/components/site/tool-icons";

type ToolName =
  "Jira" | "Confluence" | "GitHub" | "Slack" | "Figma" | "Notion" | "Scrum";

const TOOLS: ToolName[] = [
  "Jira",
  "Confluence",
  "GitHub",
  "Slack",
  "Figma",
  "Notion",
  "Scrum",
];

const R2_BASE_URL = "https://assets.abrarananraiyan.space/logos";

const TOOL_IMAGES: Partial<Record<ToolName, string>> = {
  Slack: `${R2_BASE_URL}/slack.png`,
  Figma: `${R2_BASE_URL}/figma.png`,
  Notion: `${R2_BASE_URL}/notion.ico`,
  Scrum: `${R2_BASE_URL}/scrum.png`,
};

const TOOL_COLORS: Record<ToolName, string> = {
  Jira: "#2684FF",
  Confluence: "#2684FF",
  GitHub: "#FFFFFF",
  Slack: "#36C5F0",
  Figma: "#F24E1E",
  Notion: "#FFFFFF",
  Scrum: "#009FDA",
};

function ToolMark({ name, size = 28 }: { name: ToolName; size?: number }) {
  const image = TOOL_IMAGES[name];

  if (image) {
    return (
      <img
        src={image}
        alt={`${name} logo`}
        loading="lazy"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain"
      />
    );
  }

  const icon = TOOL_ICONS[name as keyof typeof TOOL_ICONS];

  return (
    <svg
      role="img"
      aria-label={`${name} logo`}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ fill: TOOL_COLORS[name] }}
    >
      <path d={icon} />
    </svg>
  );
}

function ToolCard({ name }: { name: ToolName }) {
  return (
    <article className="group flex h-full flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-signal/50 hover:shadow-[var(--shadow-lift)]">
      <ToolMark name={name} size={28} />
      <span className="text-xs font-semibold text-foreground">{name}</span>
    </article>
  );
}

export function Approach() {
  return (
    <Section id="approach">
      <SectionHeading title="My Approach & Tools" />
      <div className="grid auto-rows-fr grid-cols-2 gap-5 lg:grid-cols-4">
        {TOOLS.map((name) => (
          <ToolCard key={name} name={name} />
        ))}
      </div>
    </Section>
  );
}
