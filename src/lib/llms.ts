import { credentials } from "@/components/site/credentials-data";
import {
  education,
  leadership,
  products,
  projects,
  skills,
  stats,
  timeline,
} from "@/components/site/data";
import type { Post } from "@/lib/blog";
import type { Hobby, Story } from "@/lib/content";
import {
  AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";

export type LlmsContent = {
  posts: Post[];
  hobbies: Hobby[];
  stories: Story[];
  resumeUrl: string;
};

const TOOLS = [
  "Jira",
  "Confluence",
  "GitHub",
  "Slack",
  "Figma",
  "Notion",
  "Scrum",
] as const;

const HERO =
  "I turn scattered ideas into shipped software. I lead agile teams, shape products end to end, and build AI-assisted workflows that remove the busywork between an idea and a release.";

function link(title: string, path: string, description?: string): string {
  const url = absoluteUrl(path);
  return description
    ? `- [${title}](${url}): ${description}`
    : `- [${title}](${url})`;
}

export function buildLlmsIndex(content: LlmsContent): string {
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME}`);
  lines.push("");
  lines.push(`> ${SITE_DESCRIPTION}`);
  lines.push("");
  lines.push(
    `Personal portfolio and blog of ${AUTHOR.name}, ${AUTHOR.jobTitle}, based in Dhaka, Bangladesh. The site documents professional experience, education, campus leadership, delivered projects, owned products, professional certifications, and writing on agile delivery, product ownership, and AI-assisted workflows.`,
  );
  lines.push("");
  lines.push(
    `**Machine-readable entry points:** [sitemap.xml](${absoluteUrl("/sitemap.xml")}) · [llms-full.txt](${absoluteUrl("/llms-full.txt")}) · [robots.txt](${absoluteUrl("/robots.txt")})`,
  );
  lines.push("");

  lines.push("## Profile");
  lines.push("");
  lines.push(
    link(
      "Home",
      "/",
      "Landing page: introduction, experience, education, leadership, projects, products, credentials, tools, and contact.",
    ),
  );
  lines.push(
    link(
      "About",
      "/about",
      "Biography, skills by group (Delivery, Product, AI, Tools), approach, tools, and contact.",
    ),
  );
  lines.push(
    link(
      "Blog",
      "/blogs",
      "All written posts with category, date, read time, excerpt, and tags.",
    ),
  );
  lines.push(
    link(
      "Contact",
      "/contact",
      "Enquiries for project management engagements, product consulting, and collaborations.",
    ),
  );
  lines.push("");

  lines.push("## Professional background");
  lines.push("");
  lines.push(
    link(
      "Experience",
      "/experience",
      "Software project management and implementation roles with organisations, periods, responsibilities, and outcomes.",
    ),
  );
  lines.push(
    link(
      "Education",
      "/education",
      "Degrees, majors, institutions, GPA/CGPA, and locations.",
    ),
  );
  lines.push(
    link(
      "Leadership",
      "/leadership",
      "Campus and club leadership roles with responsibilities and tags.",
    ),
  );
  lines.push(
    link(
      "Projects",
      "/projects",
      "Delivered product, platform, and tooling work with scope and tags.",
    ),
  );
  lines.push(
    link("Products", "/products", "Products owned and operated, with status."),
  );
  lines.push(
    link(
      "Credentials",
      "/credentials",
      `${credentials.length} professional certifications with issuing institution and verification link.`,
    ),
  );
  lines.push("");

  if (content.posts.length > 0) {
    lines.push("## Writing");
    lines.push("");
    for (const post of content.posts) {
      lines.push(
        link(
          post.title,
          `/blogs/${post.slug}`,
          `${post.category} · ${post.date} · ${post.readTime}. ${post.excerpt}`,
        ),
      );
    }
    lines.push("");
  }

  if (content.stories.length > 0) {
    lines.push("## Stories");
    lines.push("");
    for (const story of content.stories) {
      lines.push(link(story.title, `/stories/${story.id}`, story.excerpt));
    }
    lines.push("");
  }

  if (content.hobbies.length > 0) {
    lines.push("## Hobbies");
    lines.push("");
    for (const hobby of content.hobbies) {
      lines.push(link(hobby.name, `/hobbies/${hobby.id}`, hobby.detail));
    }
    lines.push("");
  }

  lines.push("## Optional");
  lines.push("");
  lines.push(
    link(
      "Resume (PDF)",
      content.resumeUrl,
      "Curriculum vitae: experience, education, leadership, skills, and certifications.",
    ),
  );
  lines.push(link("LinkedIn", AUTHOR.sameAs[0], "Professional profile."));
  lines.push(link("GitHub", AUTHOR.sameAs[1], "Code and personal projects."));
  lines.push("");

  return `${lines.join("\n")}\n`;
}

export function buildLlmsFull(content: LlmsContent): string {
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME} — full site content`);
  lines.push("");
  lines.push(`> ${SITE_DESCRIPTION}`);
  lines.push("");
  lines.push(
    `Complete plain-text content of every page on ${SITE_URL}. Generated for AI crawlers and answer engines; the live site is the source of truth.`,
  );
  lines.push("");

  lines.push("## Profile");
  lines.push("");
  lines.push(`Name: ${AUTHOR.name}`);
  lines.push(`Also known as: ${AUTHOR.alternateName.join(", ")}`);
  lines.push(`Role: ${AUTHOR.jobTitle}`);
  lines.push(`Location: Dhaka, Bangladesh (UTC+6)`);
  lines.push(`Email: ${AUTHOR.email}`);
  lines.push(`Site: ${SITE_URL}`);
  lines.push("Links:");
  lines.push(...AUTHOR.sameAs.map((url) => `- ${url}`));
  lines.push("");
  lines.push(HERO);
  lines.push("");
  lines.push(
    `At a glance: ${stats.map((stat) => `${stat.value} ${stat.label.toLowerCase()}`).join(", ")}.`,
  );
  lines.push("");

  lines.push("## Skills");
  lines.push("");
  for (const group of skills) {
    lines.push(`### ${group.group}`);
    lines.push("");
    for (const item of group.items) {
      lines.push(`- ${item}`);
    }
    lines.push("");
  }

  lines.push("## Experience");
  lines.push("");
  for (const role of timeline) {
    lines.push(`### ${role.role} — ${role.org}`);
    lines.push("");
    lines.push(`Period: ${role.period}`);
    lines.push("");
    lines.push(role.detail);
    lines.push("");
    lines.push(`Focus: ${role.tags.join(", ")}`);
    lines.push("");
  }

  lines.push("## Education");
  lines.push("");
  for (const entry of education) {
    lines.push(`### ${entry.school}`);
    lines.push("");
    lines.push(`Period: ${entry.period}`);
    lines.push(`Qualification: ${entry.degree}`);
    lines.push(`${entry.majorLabel}: ${entry.major}`);
    lines.push(`Result: ${entry.cgpa}`);
    lines.push(`Location: ${entry.location}`);
    lines.push("");
  }

  lines.push("## Leadership");
  lines.push("");
  for (const entry of leadership) {
    lines.push(`### ${entry.role} — ${entry.org}`);
    lines.push("");
    lines.push(`Period: ${entry.period}`);
    lines.push("");
    lines.push(entry.detail);
    lines.push("");
    lines.push(`Focus: ${entry.tags.join(", ")}`);
    lines.push("");
  }

  lines.push("## Projects");
  lines.push("");
  for (const entry of projects) {
    lines.push(`### ${entry.name}`);
    lines.push("");
    lines.push(`Type: ${entry.kind}`);
    lines.push("");
    lines.push(entry.detail);
    lines.push("");
    lines.push(`Focus: ${entry.tags.join(", ")}`);
    lines.push("");
  }

  lines.push("## Products");
  lines.push("");
  for (const entry of products) {
    lines.push(`### ${entry.name} (${entry.status})`);
    lines.push("");
    lines.push(entry.detail);
    lines.push("");
  }

  lines.push("## Tools");
  lines.push("");
  lines.push(TOOLS.join(", "));
  lines.push("");

  lines.push("## Credentials");
  lines.push("");
  for (const credential of credentials) {
    lines.push(
      `- ${credential.title} — ${credential.issuer}${
        credential.verifyUrl ? ` — verify: ${credential.verifyUrl}` : ""
      }`,
    );
  }
  lines.push("");

  if (content.posts.length > 0) {
    lines.push("## Blog posts");
    lines.push("");
    for (const post of content.posts) {
      lines.push(`### ${post.title}`);
      lines.push("");
      lines.push(`URL: ${absoluteUrl(`/blogs/${post.slug}`)}`);
      lines.push(`Date: ${post.date}`);
      lines.push(`Category: ${post.category}`);
      lines.push(`Read time: ${post.readTime}`);
      if (post.tags.length > 0) {
        lines.push(`Tags: ${post.tags.join(", ")}`);
      }
      lines.push("");
      lines.push(post.excerpt);
      lines.push("");
      lines.push(post.body);
      lines.push("");
    }
  }

  if (content.stories.length > 0) {
    lines.push("## Stories");
    lines.push("");
    for (const story of content.stories) {
      lines.push(`### ${story.title}`);
      lines.push("");
      lines.push(`URL: ${absoluteUrl(`/stories/${story.id}`)}`);
      lines.push("");
      lines.push(story.excerpt);
      lines.push("");
      if (story.body) {
        lines.push(story.body);
        lines.push("");
      }
    }
  }

  if (content.hobbies.length > 0) {
    lines.push("## Hobbies");
    lines.push("");
    for (const hobby of content.hobbies) {
      lines.push(`### ${hobby.name}`);
      lines.push("");
      lines.push(`URL: ${absoluteUrl(`/hobbies/${hobby.id}`)}`);
      lines.push("");
      lines.push(hobby.detail);
      lines.push("");
      if (hobby.body) {
        lines.push(hobby.body);
        lines.push("");
      }
    }
  }

  lines.push("## Contact");
  lines.push("");
  lines.push(
    "Open to project management engagements, product consulting, and collaborations.",
  );
  lines.push("");
  lines.push(`Email: ${AUTHOR.email}`);
  lines.push(`Site: ${SITE_URL}`);
  lines.push("");

  return `${lines.join("\n")}\n`;
}
