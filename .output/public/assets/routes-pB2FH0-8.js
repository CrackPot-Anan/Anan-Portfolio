import { n as e, r as t, t as n } from "./index-Dgq_lQ6S.js";
var r = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  i = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  o = (e) => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  s = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  c = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  l = t(e()),
  u = (0, l.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
      },
      f,
    ) =>
      (0, l.createElement)(
        `svg`,
        {
          ref: f,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
          className: r(`lucide`, a),
          ...(!o && !c(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [
          ...u.map(([e, t]) => (0, l.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ],
      ),
  ),
  d = (e, t) => {
    let n = (0, l.forwardRef)(({ className: n, ...a }, s) =>
      (0, l.createElement)(u, {
        ref: s,
        iconNode: t,
        className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
        ...a,
      }),
    );
    return ((n.displayName = o(e)), n);
  },
  f = d(`arrow-up-right`, [
    [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
    [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
  ]),
  p = d(`file-text`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M10 9H8`, key: `b1mrlr` }],
    [`path`, { d: `M16 13H8`, key: `t4e002` }],
    [`path`, { d: `M16 17H8`, key: `z1uh3a` }],
  ]),
  m = d(`github`, [
    [
      `path`,
      {
        d: `M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,
        key: `tonef`,
      },
    ],
    [`path`, { d: `M9 18c-4.51 2-5-2-7-2`, key: `9comsn` }],
  ]),
  h = d(`instagram`, [
    [
      `rect`,
      {
        width: `20`,
        height: `20`,
        x: `2`,
        y: `2`,
        rx: `5`,
        ry: `5`,
        key: `2e1cvw`,
      },
    ],
    [
      `path`,
      { d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`, key: `9exkf1` },
    ],
    [`line`, { x1: `17.5`, x2: `17.51`, y1: `6.5`, y2: `6.5`, key: `r4j83e` }],
  ]),
  g = d(`linkedin`, [
    [
      `path`,
      {
        d: `M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z`,
        key: `c2jq9f`,
      },
    ],
    [`rect`, { width: `4`, height: `12`, x: `2`, y: `9`, key: `mk3on5` }],
    [`circle`, { cx: `4`, cy: `4`, r: `2`, key: `bt5ra8` }],
  ]),
  _ = d(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [
      `rect`,
      { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` },
    ],
  ]),
  v = {
    version: 1,
    asset_id: `327a5d13-12b7-41de-8a48-6ab24293d3fc`,
    project_id: `aa5917f7-c5b4-4718-ad0b-9f0e3208149f`,
    url: `/__l5e/assets-v1/327a5d13-12b7-41de-8a48-6ab24293d3fc/raiyan.jpg`,
    r2_key: `a/v1/aa5917f7-c5b4-4718-ad0b-9f0e3208149f/327a5d13-12b7-41de-8a48-6ab24293d3fc/raiyan.jpg`,
    original_filename: `raiyan.jpg`,
    size: 428127,
    content_type: `image/jpeg`,
    created_at: `2026-08-15T16:29:53Z`,
  },
  y = {
    version: 1,
    asset_id: `9234606c-28a3-4bc6-89ed-193a53c4e583`,
    project_id: `aa5917f7-c5b4-4718-ad0b-9f0e3208149f`,
    url: `/__l5e/assets-v1/9234606c-28a3-4bc6-89ed-193a53c4e583/Abrar_Anan_Raiyan.pdf`,
    r2_key: `a/v1/aa5917f7-c5b4-4718-ad0b-9f0e3208149f/9234606c-28a3-4bc6-89ed-193a53c4e583/Abrar_Anan_Raiyan.pdf`,
    original_filename: `Abrar_Anan_Raiyan.pdf`,
    size: 71900,
    content_type: `application/pdf`,
    created_at: `2026-08-15T16:29:56Z`,
  },
  b = n();
function x({ index: e, command: t, title: n }) {
  return (0, b.jsx)(`div`, {
    className: `mb-12 flex flex-col gap-3 border-b border-border pb-6 md:flex-row md:items-end md:justify-between`,
    children: (0, b.jsxs)(`div`, {
      children: [
        (0, b.jsxs)(`p`, {
          className: `label-mono mb-3`,
          children: [
            e,
            ` `,
            (0, b.jsx)(`span`, { className: `text-signal`, children: `/` }),
            ` `,
            t,
          ],
        }),
        (0, b.jsx)(`h2`, {
          className: `text-3xl leading-none md:text-5xl`,
          children: n,
        }),
      ],
    }),
  });
}
function S({ id: e, children: t }) {
  return (0, b.jsx)(`section`, {
    id: e,
    className: `scroll-mt-24 border-t border-border py-20 md:py-28`,
    children: (0, b.jsx)(`div`, {
      className: `mx-auto w-full max-w-6xl px-6`,
      children: t,
    }),
  });
}
function C({ children: e }) {
  return (0, b.jsx)(`span`, {
    className: `rounded-sm border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground`,
    children: e,
  });
}
var w = [
    {
      group: `Delivery`,
      items: [
        `Scrum & Agile`,
        `Sprint Planning`,
        `Roadmapping`,
        `Risk & Dependency Tracking`,
      ],
    },
    {
      group: `Product`,
      items: [
        `PRDs & User Stories`,
        `Backlog Grooming`,
        `Stakeholder Alignment`,
        `Release QA`,
      ],
    },
    {
      group: `AI`,
      items: [
        `LLM Workflows`,
        `Prompt Engineering`,
        `AI Product Discovery`,
        `Automation Design`,
      ],
    },
    {
      group: `Tools`,
      items: [`Jira`, `ClickUp`, `Notion`, `Figma`, `GitHub Projects`],
    },
  ],
  T = [
    {
      period: `2025 — Present`,
      role: `Software Project Manager`,
      org: `Independent / Client Engagements`,
      detail: `Leading cross-functional delivery for web and AI products: shaping scope, running sprints, unblocking engineering, and keeping stakeholders aligned from discovery to launch.`,
      tags: [`Agile`, `Delivery`, `Stakeholders`],
    },
    {
      period: `2024 — 2025`,
      role: `Associate Project Coordinator`,
      org: `Product Team`,
      detail: `Prepared PRDs, user stories, and change requests. Coordinated engineering, design, and QA in Jira and ClickUp to keep releases on schedule.`,
      tags: [`Jira`, `PRDs`, `QA`],
    },
    {
      period: `Education`,
      role: `B.Sc. in Computer Science`,
      org: `University`,
      detail: `Foundation across software engineering, data structures, databases, and machine learning — the technical grounding behind the management work.`,
      tags: [`CS`, `ML`],
    },
  ],
  E = [
    {
      name: `Ops4`,
      kind: `Operations Platform`,
      detail: `Operations management platform — coordinated requirements, sprint delivery, and rollout with cross-functional engineering and SQA teams.`,
      tags: [`Delivery`, `Requirements`, `SQA`],
    },
    {
      name: `Managerium`,
      kind: `ERP Suite`,
      detail: `Enterprise ERP product at Akij iBOS. Led onboarding and technical training to drive user adoption across HR, CRM, and finance modules.`,
      tags: [`ERP`, `Onboarding`, `Training`],
    },
    {
      name: `Project Tracker`,
      kind: `Delivery Tooling`,
      detail: `Internal tracker for task visibility, sprint progress, and reporting — built around Jira workflows and Confluence documentation.`,
      tags: [`Jira`, `Reporting`, `Agile`],
    },
    {
      name: `Peopledesk`,
      kind: `HRIS`,
      detail: `HRIS platform work including optimizing and upgrading the Leave Management module with a frontend, backend, and SQA team.`,
      tags: [`HRIS`, `Scrum`, `Product`],
    },
    {
      name: `Akij Air`,
      kind: `Travel Tech`,
      detail: `Airline booking business built on GDS integrations — Travelport, Sabre, Amadeus, and BDFare APIs feeding the ticketing flow.`,
      tags: [`GDS`, `API`, `Integrations`],
    },
    {
      name: `Akij Pharma`,
      kind: `Enterprise Solution`,
      detail: `Pharma distribution and field-force solution — supported implementation, user training, and issue resolution for daily operations.`,
      tags: [`Implementation`, `Support`, `Adoption`],
    },
  ],
  D = [
    {
      name: `Cadence`,
      status: `Live`,
      detail: `A subscription toolkit for small product teams: sprint templates, retro formats, and stakeholder update generators.`,
    },
    {
      name: `The Delivery Notes`,
      status: `Writing`,
      detail: `A newsletter on shipping software without chaos — practical notes on agile, AI tooling, and team flow.`,
    },
  ],
  O = [
    { value: `12+`, label: `Projects Delivered` },
    { value: `98%`, label: `On-Time Releases` },
    { value: `5`, label: `Teams Coordinated` },
  ],
  k = [
    [`about`, `About`],
    [`experience`, `Experience`],
    [`projects`, `Projects`],
    [`products`, `Products`],
    [`contact`, `Contact`],
  ];
function A() {
  return (0, b.jsxs)(`div`, {
    className: `min-h-screen bg-background`,
    children: [
      (0, b.jsx)(`header`, {
        className: `sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur`,
        children: (0, b.jsxs)(`div`, {
          className: `mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4`,
          children: [
            (0, b.jsxs)(`a`, {
              href: `#top`,
              className: `font-mono text-sm tracking-tight text-foreground`,
              children: [
                `abrar`,
                (0, b.jsx)(`span`, { className: `text-signal`, children: `.` }),
                `raiyan`,
              ],
            }),
            (0, b.jsx)(`nav`, {
              className: `hidden gap-7 md:flex`,
              children: k.map(([e, t]) =>
                (0, b.jsx)(
                  `a`,
                  {
                    href: `#${e}`,
                    className: `font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground`,
                    children: t,
                  },
                  e,
                ),
              ),
            }),
            (0, b.jsx)(`a`, {
              href: `#contact`,
              className: `rounded-sm border border-signal px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground`,
              children: `Hire me`,
            }),
          ],
        }),
      }),
      (0, b.jsxs)(`main`, {
        id: `top`,
        children: [
          (0, b.jsx)(`section`, {
            className: `grid-lines border-b border-border`,
            children: (0, b.jsxs)(`div`, {
              className: `mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-28`,
              children: [
                (0, b.jsxs)(`div`, {
                  children: [
                    (0, b.jsxs)(`p`, {
                      className: `label-mono mb-6`,
                      children: [
                        (0, b.jsx)(`span`, {
                          className: `text-signal`,
                          children: `$`,
                        }),
                        ` software project manager · ai enthusiast`,
                      ],
                    }),
                    (0, b.jsxs)(`h1`, {
                      className: `text-5xl leading-[0.95] md:text-7xl`,
                      children: [
                        `I turn scattered`,
                        (0, b.jsx)(`br`, {}),
                        `ideas into`,
                        (0, b.jsx)(`br`, {}),
                        (0, b.jsx)(`span`, {
                          className: `text-signal`,
                          children: `shipped software.`,
                        }),
                      ],
                    }),
                    (0, b.jsx)(`p`, {
                      className: `mt-8 max-w-xl text-base leading-relaxed text-muted-foreground`,
                      children: `I'm Abrar Anan Raiyan. I lead agile teams, shape products end to end, and build AI-assisted workflows that remove the busywork between an idea and a release.`,
                    }),
                    (0, b.jsxs)(`div`, {
                      className: `mt-9 flex flex-wrap items-center gap-3`,
                      children: [
                        (0, b.jsxs)(`a`, {
                          href: `#projects`,
                          className: `inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90`,
                          children: [
                            `View my work `,
                            (0, b.jsx)(f, { className: `h-4 w-4` }),
                          ],
                        }),
                        (0, b.jsxs)(`a`, {
                          href: y.url,
                          target: `_blank`,
                          rel: `noreferrer`,
                          className: `inline-flex items-center gap-2 rounded-sm border border-signal px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-signal transition-colors hover:bg-signal hover:text-primary-foreground`,
                          children: [
                            (0, b.jsx)(p, { className: `h-4 w-4` }),
                            ` Resume`,
                          ],
                        }),
                        (0, b.jsx)(`a`, {
                          href: `#contact`,
                          className: `inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-secondary`,
                          children: `Let's connect`,
                        }),
                      ],
                    }),
                    (0, b.jsx)(`div`, {
                      className: `mt-12 flex flex-wrap gap-10 border-t border-border pt-8`,
                      children: O.map((e) =>
                        (0, b.jsxs)(
                          `div`,
                          {
                            children: [
                              (0, b.jsx)(`p`, {
                                className: `font-display text-3xl text-foreground`,
                                children: e.value,
                              }),
                              (0, b.jsx)(`p`, {
                                className: `label-mono mt-1`,
                                children: e.label,
                              }),
                            ],
                          },
                          e.label,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, b.jsxs)(`div`, {
                  className: `relative`,
                  children: [
                    (0, b.jsx)(`div`, {
                      className: `absolute -inset-3 border border-border`,
                      "aria-hidden": `true`,
                    }),
                    (0, b.jsx)(`img`, {
                      src: v.url,
                      alt: `Portrait of Abrar Anan Raiyan`,
                      width: 1440,
                      height: 1920,
                      className: `relative w-full object-cover grayscale-[25%]`,
                    }),
                    (0, b.jsx)(`p`, {
                      className: `label-mono mt-5 text-right`,
                      children: `Dhaka, Bangladesh · UTC+6`,
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, b.jsxs)(S, {
            id: `about`,
            children: [
              (0, b.jsx)(x, {
                index: `01`,
                command: `cat about.md`,
                title: `Clarity is the deliverable`,
              }),
              (0, b.jsxs)(`div`, {
                className: `grid gap-12 md:grid-cols-[1fr_0.9fr]`,
                children: [
                  (0, b.jsxs)(`div`, {
                    className: `space-y-5 text-base leading-relaxed text-muted-foreground`,
                    children: [
                      (0, b.jsx)(`p`, {
                        children: `Great software rarely fails because of code — it fails because of unclear scope, misaligned expectations, and silence between teams. My job is to remove all three.`,
                      }),
                      (0, b.jsx)(`p`, {
                        children: `I step into complex projects, break down chaotic backlogs, and put structure around how work flows: crisp requirements, honest estimates, visible risks, and sprints that actually end with something shipped. I translate business intent for engineers and engineering reality for stakeholders.`,
                      }),
                      (0, b.jsx)(`p`, {
                        children: `Alongside delivery, I'm deep in applied AI — using language models to accelerate discovery, documentation, and QA, and exploring how AI features change the way products get scoped and validated.`,
                      }),
                    ],
                  }),
                  (0, b.jsx)(`div`, {
                    className: `space-y-6`,
                    children: w.map((e) =>
                      (0, b.jsxs)(
                        `div`,
                        {
                          className: `border border-border bg-surface p-5`,
                          children: [
                            (0, b.jsx)(`p`, {
                              className: `label-mono mb-3`,
                              children: e.group,
                            }),
                            (0, b.jsx)(`div`, {
                              className: `flex flex-wrap gap-2`,
                              children: e.items.map((e) =>
                                (0, b.jsx)(C, { children: e }, e),
                              ),
                            }),
                          ],
                        },
                        e.group,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, b.jsxs)(S, {
            id: `experience`,
            children: [
              (0, b.jsx)(x, {
                index: `02`,
                command: `ls experience/`,
                title: `Where I've delivered`,
              }),
              (0, b.jsx)(`div`, {
                className: `space-y-px bg-border`,
                children: T.map((e) =>
                  (0, b.jsxs)(
                    `article`,
                    {
                      className: `grid gap-4 bg-background p-6 transition-colors hover:bg-surface md:grid-cols-[200px_1fr] md:p-8`,
                      children: [
                        (0, b.jsx)(`p`, {
                          className: `label-mono pt-1`,
                          children: e.period,
                        }),
                        (0, b.jsxs)(`div`, {
                          children: [
                            (0, b.jsx)(`h3`, {
                              className: `text-xl text-foreground`,
                              children: e.role,
                            }),
                            (0, b.jsx)(`p`, {
                              className: `mt-1 font-mono text-xs text-signal`,
                              children: e.org,
                            }),
                            (0, b.jsx)(`p`, {
                              className: `mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground`,
                              children: e.detail,
                            }),
                            (0, b.jsx)(`div`, {
                              className: `mt-4 flex flex-wrap gap-2`,
                              children: e.tags.map((e) =>
                                (0, b.jsx)(C, { children: e }, e),
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.role,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(S, {
            id: `projects`,
            children: [
              (0, b.jsx)(x, {
                index: `03`,
                command: `./projects.sh --list`,
                title: `Selected work`,
              }),
              (0, b.jsx)(`div`, {
                className: `grid gap-px bg-border md:grid-cols-3`,
                children: E.map((e) =>
                  (0, b.jsxs)(
                    `article`,
                    {
                      className: `group bg-background p-7 transition-colors hover:bg-surface`,
                      children: [
                        (0, b.jsx)(`p`, {
                          className: `label-mono`,
                          children: e.kind,
                        }),
                        (0, b.jsxs)(`h3`, {
                          className: `mt-4 flex items-center gap-2 text-2xl text-foreground`,
                          children: [
                            e.name,
                            (0, b.jsx)(f, {
                              className: `h-4 w-4 text-signal opacity-0 transition-opacity group-hover:opacity-100`,
                            }),
                          ],
                        }),
                        (0, b.jsx)(`p`, {
                          className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
                          children: e.detail,
                        }),
                        (0, b.jsx)(`div`, {
                          className: `mt-6 flex flex-wrap gap-2`,
                          children: e.tags.map((e) =>
                            (0, b.jsx)(C, { children: e }, e),
                          ),
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(S, {
            id: `products`,
            children: [
              (0, b.jsx)(x, {
                index: `04`,
                command: `cat products.json`,
                title: `Products I own`,
              }),
              (0, b.jsx)(`div`, {
                className: `grid gap-px bg-border md:grid-cols-2`,
                children: D.map((e) =>
                  (0, b.jsxs)(
                    `article`,
                    {
                      className: `bg-background p-8`,
                      children: [
                        (0, b.jsxs)(`div`, {
                          className: `flex items-center justify-between`,
                          children: [
                            (0, b.jsx)(`h3`, {
                              className: `text-2xl text-foreground`,
                              children: e.name,
                            }),
                            (0, b.jsx)(`span`, {
                              className: `rounded-sm border border-signal/40 px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-signal`,
                              children: e.status,
                            }),
                          ],
                        }),
                        (0, b.jsx)(`p`, {
                          className: `mt-4 text-sm leading-relaxed text-muted-foreground`,
                          children: e.detail,
                        }),
                      ],
                    },
                    e.name,
                  ),
                ),
              }),
            ],
          }),
          (0, b.jsxs)(S, {
            id: `contact`,
            children: [
              (0, b.jsx)(x, {
                index: `05`,
                command: `./contact --open`,
                title: `Let's build something`,
              }),
              (0, b.jsxs)(`div`, {
                className: `grid gap-10 md:grid-cols-[1fr_auto] md:items-end`,
                children: [
                  (0, b.jsx)(`p`, {
                    className: `max-w-xl text-base leading-relaxed text-muted-foreground`,
                    children: `Have a stalled project, a backlog that needs shape, or an AI idea worth validating? I'm open to project management engagements, product consulting, and collaborations.`,
                  }),
                  (0, b.jsxs)(`a`, {
                    href: `mailto:abraranan18@gmail.com`,
                    className: `inline-flex items-center gap-3 rounded-sm bg-signal px-6 py-4 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90`,
                    children: [
                      (0, b.jsx)(_, { className: `h-4 w-4` }),
                      ` abraranan18@gmail.com`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, b.jsx)(`footer`, {
        className: `border-t border-border`,
        children: (0, b.jsxs)(`div`, {
          className: `mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between`,
          children: [
            (0, b.jsxs)(`p`, {
              className: `label-mono`,
              children: [`© `, new Date().getFullYear(), ` Abrar Anan Raiyan`],
            }),
            (0, b.jsxs)(`div`, {
              className: `flex gap-5`,
              children: [
                (0, b.jsx)(`a`, {
                  href: `https://github.com/CrackPot-Anan`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  "aria-label": `GitHub`,
                  className: `text-muted-foreground transition-colors hover:text-signal`,
                  children: (0, b.jsx)(m, { className: `h-4 w-4` }),
                }),
                (0, b.jsx)(`a`, {
                  href: `https://www.linkedin.com/in/abrar-anan-raiyan/`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  "aria-label": `LinkedIn`,
                  className: `text-muted-foreground transition-colors hover:text-signal`,
                  children: (0, b.jsx)(g, { className: `h-4 w-4` }),
                }),
                (0, b.jsx)(`a`, {
                  href: `https://www.instagram.com/anans_daily_2000/`,
                  target: `_blank`,
                  rel: `noreferrer`,
                  "aria-label": `Instagram`,
                  className: `text-muted-foreground transition-colors hover:text-signal`,
                  children: (0, b.jsx)(h, { className: `h-4 w-4` }),
                }),
                (0, b.jsx)(`a`, {
                  href: y.url,
                  target: `_blank`,
                  rel: `noreferrer`,
                  "aria-label": `Resume`,
                  className: `text-muted-foreground transition-colors hover:text-signal`,
                  children: (0, b.jsx)(p, { className: `h-4 w-4` }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { A as component };
