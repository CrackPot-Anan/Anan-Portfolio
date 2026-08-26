import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  a as FileText,
  i as Github,
  n as Linkedin,
  o as ArrowUpRight,
  r as Instagram,
  t as Mail,
} from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-5gwu97Yv.js
var import_jsx_runtime = require_jsx_runtime();
var raiyan_jpg_asset_default = {
  version: 1,
  asset_id: "327a5d13-12b7-41de-8a48-6ab24293d3fc",
  project_id: "aa5917f7-c5b4-4718-ad0b-9f0e3208149f",
  url: "/__l5e/assets-v1/327a5d13-12b7-41de-8a48-6ab24293d3fc/raiyan.jpg",
  r2_key:
    "a/v1/aa5917f7-c5b4-4718-ad0b-9f0e3208149f/327a5d13-12b7-41de-8a48-6ab24293d3fc/raiyan.jpg",
  original_filename: "raiyan.jpg",
  size: 428127,
  content_type: "image/jpeg",
  created_at: "2026-08-15T16:29:53Z",
};
var resume_pdf_asset_default = {
  version: 1,
  asset_id: "9234606c-28a3-4bc6-89ed-193a53c4e583",
  project_id: "aa5917f7-c5b4-4718-ad0b-9f0e3208149f",
  url: "/__l5e/assets-v1/9234606c-28a3-4bc6-89ed-193a53c4e583/Abrar_Anan_Raiyan.pdf",
  r2_key:
    "a/v1/aa5917f7-c5b4-4718-ad0b-9f0e3208149f/9234606c-28a3-4bc6-89ed-193a53c4e583/Abrar_Anan_Raiyan.pdf",
  original_filename: "Abrar_Anan_Raiyan.pdf",
  size: 71900,
  content_type: "application/pdf",
  created_at: "2026-08-15T16:29:56Z",
};
function SectionHeading({ index, command, title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "mb-12 flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          className: "label-mono mb-3",
          children: [
            index,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "text-signal",
              children: "/",
            }),
            " ",
            command,
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "text-3xl leading-none md:text-5xl",
          children: title,
        }),
      ],
    }),
  });
}
function Section({ id, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    id,
    className: "scroll-mt-24 border-t border-border py-20 md:py-28",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "mx-auto w-full max-w-6xl px-6",
      children,
    }),
  });
}
function Tag({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className:
      "rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground",
    children,
  });
}
var skills = [
  {
    group: "Delivery",
    items: [
      "Scrum & Agile",
      "Sprint Planning",
      "Roadmapping",
      "Risk & Dependency Tracking",
    ],
  },
  {
    group: "Product",
    items: [
      "PRDs & User Stories",
      "Backlog Grooming",
      "Stakeholder Alignment",
      "Release QA",
    ],
  },
  {
    group: "AI",
    items: [
      "LLM Workflows",
      "Prompt Engineering",
      "AI Product Discovery",
      "Automation Design",
    ],
  },
  {
    group: "Tools",
    items: ["Jira", "ClickUp", "Notion", "Figma", "GitHub Projects"],
  },
];
var timeline = [
  {
    period: "2025 — Present",
    role: "Software Project Manager",
    org: "Independent / Client Engagements",
    detail:
      "Leading cross-functional delivery for web and AI products: shaping scope, running sprints, unblocking engineering, and keeping stakeholders aligned from discovery to launch.",
    tags: ["Agile", "Delivery", "Stakeholders"],
  },
  {
    period: "2024 — 2025",
    role: "Associate Project Coordinator",
    org: "Product Team",
    detail:
      "Prepared PRDs, user stories, and change requests. Coordinated engineering, design, and QA in Jira and ClickUp to keep releases on schedule.",
    tags: ["Jira", "PRDs", "QA"],
  },
  {
    period: "Education",
    role: "B.Sc. in Computer Science",
    org: "University",
    detail:
      "Foundation across software engineering, data structures, databases, and machine learning — the technical grounding behind the management work.",
    tags: ["CS", "ML"],
  },
];
var projects = [
  {
    name: "Ops4",
    kind: "Operations Platform",
    detail:
      "Operations management platform — coordinated requirements, sprint delivery, and rollout with cross-functional engineering and SQA teams.",
    tags: ["Delivery", "Requirements", "SQA"],
  },
  {
    name: "Managerium",
    kind: "ERP Suite",
    detail:
      "Enterprise ERP product at Akij iBOS. Led onboarding and technical training to drive user adoption across HR, CRM, and finance modules.",
    tags: ["ERP", "Onboarding", "Training"],
  },
  {
    name: "Project Tracker",
    kind: "Delivery Tooling",
    detail:
      "Internal tracker for task visibility, sprint progress, and reporting — built around Jira workflows and Confluence documentation.",
    tags: ["Jira", "Reporting", "Agile"],
  },
  {
    name: "Peopledesk",
    kind: "HRIS",
    detail:
      "HRIS platform work including optimizing and upgrading the Leave Management module with a frontend, backend, and SQA team.",
    tags: ["HRIS", "Scrum", "Product"],
  },
  {
    name: "Akij Air",
    kind: "Travel Tech",
    detail:
      "Airline booking business built on GDS integrations — Travelport, Sabre, Amadeus, and BDFare APIs feeding the ticketing flow.",
    tags: ["GDS", "API", "Integrations"],
  },
  {
    name: "Akij Pharma",
    kind: "Enterprise Solution",
    detail:
      "Pharma distribution and field-force solution — supported implementation, user training, and issue resolution for daily operations.",
    tags: ["Implementation", "Support", "Adoption"],
  },
];
var products = [
  {
    name: "Cadence",
    status: "Live",
    detail:
      "A subscription toolkit for small product teams: sprint templates, retro formats, and stakeholder update generators.",
  },
  {
    name: "The Delivery Notes",
    status: "Writing",
    detail:
      "A newsletter on shipping software without chaos — practical notes on agile, AI tooling, and team flow.",
  },
];
var stats = [
  {
    value: "12+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "On-Time Releases",
  },
  {
    value: "5",
    label: "Teams Coordinated",
  },
];
var nav = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["products", "Products"],
  ["contact", "Contact"],
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "min-h-screen bg-background",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
        className:
          "sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
              href: "#top",
              className: "font-mono text-sm tracking-tight text-foreground",
              children: [
                "abrar",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-signal",
                  children: ".",
                }),
                "raiyan",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
              className: "hidden gap-7 md:flex",
              children: nav.map(([id, label]) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "a",
                  {
                    href: `#${id}`,
                    className:
                      "font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground",
                    children: label,
                  },
                  id,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "#contact",
              className:
                "rounded-sm border border-signal px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground",
              children: "Hire me",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
        id: "top",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            className: "grid-lines border-b border-border",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className: "label-mono mb-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-signal",
                          children: "$",
                        }),
                        " software project manager · ai enthusiast",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                      className: "text-5xl leading-[0.95] md:text-7xl",
                      children: [
                        "I turn scattered",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        "ideas into",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-signal",
                          children: "shipped software.",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground",
                      children:
                        "I'm Abrar Anan Raiyan. I lead agile teams, shape products end to end, and build AI-assisted workflows that remove the busywork between an idea and a release.",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "mt-9 flex flex-wrap items-center gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                          href: "#projects",
                          className:
                            "inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90",
                          children: [
                            "View my work ",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              ArrowUpRight,
                              { className: "h-4 w-4" },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                          href: resume_pdf_asset_default.url,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "inline-flex items-center gap-2 rounded-sm border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              FileText,
                              { className: "h-4 w-4" },
                            ),
                            " Resume",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "#contact",
                          className:
                            "inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary",
                          children: "Let's connect",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "mt-12 flex flex-wrap gap-10 border-t border-border pt-8",
                      children: stats.map((s) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "font-display text-3xl text-foreground",
                                children: s.value,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className: "label-mono mt-1",
                                children: s.label,
                              }),
                            ],
                          },
                          s.label,
                        ),
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "relative",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "absolute -inset-3 border border-border",
                      "aria-hidden": "true",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                      src: raiyan_jpg_asset_default.url,
                      alt: "Portrait of Abrar Anan Raiyan",
                      width: 1440,
                      height: 1920,
                      className: "relative w-full object-cover grayscale-[25%]",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "label-mono mt-5 text-right",
                      children: "Dhaka, Bangladesh · UTC+6",
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            id: "about",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                index: "01",
                command: "cat about.md",
                title: "Clarity is the deliverable",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "grid gap-12 md:grid-cols-[1fr_0.9fr]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "space-y-5 text-base leading-relaxed text-muted-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        children:
                          "Great software rarely fails because of code — it fails because of unclear scope, misaligned expectations, and silence between teams. My job is to remove all three.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        children:
                          "I step into complex projects, break down chaotic backlogs, and put structure around how work flows: crisp requirements, honest estimates, visible risks, and sprints that actually end with something shipped. I translate business intent for engineers and engineering reality for stakeholders.",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        children:
                          "Alongside delivery, I'm deep in applied AI — using language models to accelerate discovery, documentation, and QA, and exploring how AI features change the way products get scoped and validated.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "space-y-6",
                    children: skills.map((s) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className: "border border-border bg-surface p-5",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "label-mono mb-3",
                              children: s.group,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "flex flex-wrap gap-2",
                              children: s.items.map((i) =>
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Tag,
                                  { children: i },
                                  i,
                                ),
                              ),
                            }),
                          ],
                        },
                        s.group,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            id: "experience",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                index: "02",
                command: "ls experience/",
                title: "Where I've delivered",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "space-y-px bg-border",
                children: timeline.map((t) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "article",
                    {
                      className:
                        "grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[200px_1fr] md:p-8",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "label-mono pt-1",
                          children: t.period,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "text-xl text-foreground",
                              children: t.role,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-1 font-mono text-xs text-signal",
                              children: t.org,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground",
                              children: t.detail,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "mt-4 flex flex-wrap gap-2",
                              children: t.tags.map((tag) =>
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Tag,
                                  { children: tag },
                                  tag,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    t.role,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            id: "projects",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                index: "03",
                command: "./projects.sh --list",
                title: "Selected work",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid gap-px bg-border md:grid-cols-3",
                children: projects.map((p) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "article",
                    {
                      className:
                        "group bg-background p-7 transition-colors hover:bg-surface",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "label-mono",
                          children: p.kind,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
                          className:
                            "mt-4 flex items-center gap-2 text-2xl text-foreground",
                          children: [
                            p.name,
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              ArrowUpRight,
                              {
                                className:
                                  "h-4 w-4 text-signal opacity-0 transition-opacity group-hover:opacity-100",
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className:
                            "mt-3 text-sm leading-relaxed text-muted-foreground",
                          children: p.detail,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "mt-6 flex flex-wrap gap-2",
                          children: p.tags.map((tag) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              Tag,
                              { children: tag },
                              tag,
                            ),
                          ),
                        }),
                      ],
                    },
                    p.name,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            id: "products",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                index: "04",
                command: "cat products.json",
                title: "Products I own",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid gap-px bg-border md:grid-cols-2",
                children: products.map((p) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "article",
                    {
                      className: "bg-background p-8",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "text-2xl text-foreground",
                              children: p.name,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className:
                                  "rounded-sm border border-signal/40 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-signal",
                                children: p.status,
                              },
                            ),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className:
                            "mt-4 text-sm leading-relaxed text-muted-foreground",
                          children: p.detail,
                        }),
                      ],
                    },
                    p.name,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
            id: "contact",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
                index: "05",
                command: "./contact --open",
                title: "Let's build something",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "grid gap-10 md:grid-cols-[1fr_auto] md:items-end",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className:
                      "max-w-xl text-base leading-relaxed text-muted-foreground",
                    children:
                      "Have a stalled project, a backlog that needs shape, or an AI idea worth validating? I'm open to project management engagements, product consulting, and collaborations.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                    href: "mailto:abraranan18@gmail.com",
                    className:
                      "inline-flex items-center gap-3 rounded-sm bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                        className: "h-4 w-4",
                      }),
                      " abraranan18@gmail.com",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
        className: "border-t border-border",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              className: "label-mono",
              children: [
                "© ",
                /* @__PURE__ */ new Date().getFullYear(),
                " Abrar Anan Raiyan",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex gap-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://github.com/CrackPot-Anan",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "GitHub",
                  className:
                    "text-muted-foreground transition-colors hover:text-signal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Github,
                    { className: "h-4 w-4" },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://www.linkedin.com/in/abrar-anan-raiyan/",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "LinkedIn",
                  className:
                    "text-muted-foreground transition-colors hover:text-signal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Linkedin,
                    { className: "h-4 w-4" },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://www.instagram.com/anans_daily_2000/",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Instagram",
                  className:
                    "text-muted-foreground transition-colors hover:text-signal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Instagram,
                    { className: "h-4 w-4" },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: resume_pdf_asset_default.url,
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Resume",
                  className:
                    "text-muted-foreground transition-colors hover:text-signal",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    FileText,
                    { className: "h-4 w-4" },
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
//#endregion
export { Index as component };
