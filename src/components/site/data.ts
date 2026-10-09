import type { Hobby, Story, Travel } from "@/lib/content";

export const skills = [
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

export const timeline = [
  {
    period: "2025 — Present",
    role: "Software Project Manager",
    org: "6Sense HQ Ltd",
    logo: "https://assets.abrarananraiyan.space/logos/6sense-hq.png",
    detail:
      "Leading cross-functional delivery for web and AI products: shaping scope, running sprints, unblocking engineering, and keeping stakeholders aligned from discovery to launch.",
    tags: ["Agile", "Delivery", "Stakeholders"],
  },
  {
    role: "Software Support and Implementation Engineer",
    period: "Feb 2025 - Nov 2025",
    org: "Akij iBOS Ltd",
    logo: "https://assets.abrarananraiyan.space/logos/akij-ibos.png",
    detail:
      "Prepared PRDs, user stories, and change requests. Coordinated engineering, design, and QA in Jira and ClickUp to keep releases on schedule.",
    tags: ["Jira", "PRDs", "QA"],
  },
];

export const education = [
  {
    period: "Sept 2021 - May 2025",
    school: "American International University – Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    major: "Software Engineering",
    cgpa: "CGPA 3.71 / 4.00",
    location: "Dhaka, Bangladesh",
  },
];

export const leadership = [
  {
    period: "Aug 2023 - Jan 2025",
    role: "Assistant General Secretary, Event Coverage & Post Production",
    org: "AIUB Computer Club",
    detail:
      "Organized workshops, edited event videos, and led a team of photographers to deliver event coverage and post-production for the club.",
    tags: ["Event Coverage", "Video Editing", "Leadership"],
  },
  {
    period: "Aug 2022 - Aug 2023",
    role: "Campus Ambassador",
    org: "Applink by Banglalink",
    detail:
      "Represented Applink by Banglalink on campus as a campus ambassador — engaging students, growing the community, and carrying the program into campus events.",
    tags: ["Campus Leadership", "Community"],
  },
];

export const projects = [
  {
    name: "Ops4",
    logo: "https://assets.abrarananraiyan.space/logos/ops4.png",
    kind: "HRIS Platform",
    detail:
      "Centralized HRIS platform for managing employee information, leave, attendance, compensation, performance, and other HR operations.",
    tags: ["HRIS", "Leave", "Attendance"],
  },
  {
    name: "Managerium",
    logo: "https://assets.abrarananraiyan.space/logos/managerium-v2.png",
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
    logo: "https://assets.abrarananraiyan.space/logos/peopledesk-v2.png",
    kind: "HRIS",
    detail:
      "HRIS platform work including optimizing and upgrading the Leave Management module with a frontend, backend, and SQA team.",
    tags: ["HRIS", "Scrum", "Product"],
  },
  {
    name: "Akij Air",
    logo: "https://assets.abrarananraiyan.space/logos/akij-air.png",
    kind: "Travel Tech",
    detail:
      "Airline booking business built on GDS integrations — Travelport, Sabre, Amadeus, and BDFare APIs feeding the ticketing flow.",
    tags: ["GDS", "API", "Integrations"],
  },
  {
    name: "Akij Pharma",
    logo: "https://assets.abrarananraiyan.space/logos/akij-pharmacy.png",
    kind: "Enterprise Solution",
    detail:
      "Pharma distribution and field-force solution — supported implementation, user training, and issue resolution for daily operations.",
    tags: ["Implementation", "Support", "Adoption"],
  },
];

export const products = [
  {
    name: "ZenPTE",
    logo: "https://assets.abrarananraiyan.space/logos/zenpte-portfolio.png",
    status: "Live",
    detail:
      "A PTE mock-test platform that helps learners practice in a realistic exam-style environment and prepare for the Pearson Test of English.",
  },
  {
    name: "Career Koi",
    logo: "https://assets.abrarananraiyan.space/logos/career-koi-port.png",
    status: "Live",
    detail:
      "A career guidance and job-search product helping people find direction and land better opportunities.",
  },
];

export const hobbies: Hobby[] = [
  {
    id: "photography",
    name: "Photography",
    detail:
      "Street and event shoots — framing, cutting the clutter, and shipping the shot.",
    body: "Photography started as a way to slow down. A street scene only works once you strip everything that does not belong in the frame.\n\nI shoot events, portraits, and whatever catches the light on a walk. The discipline of composing a shot — deciding what stays and what goes — turns out to be the same discipline I bring to scoping a product.",
  },
  {
    id: "chess",
    name: "Chess",
    detail:
      "Weekend endgame drills. Fewer open tabs than a sprint review, same tension.",
    body: "Chess is the quiet version of the same problem I solve all week: limited resources, incomplete information, and a clock.\n\nI spend most of my practice on endgames. Fewer pieces, clearer ideas — you learn that the plan matters more than the move.",
  },
  {
    id: "music",
    name: "Music",
    detail: "Lo-fi and jazz on loop while writing specs or reviewing PRs.",
    body: "There is almost always something playing while I work — lo-fi, jazz, or a long ambient mix when the work needs deep focus.\n\nMusic has no backlog. It is the one place where I am just listening.",
  },
  {
    id: "cricket",
    name: "Cricket",
    detail:
      "Weekend matches — pacing, reading the field, knowing when to accelerate.",
    body: "Weekend cricket taught me pacing before any course did. You cannot swing at every ball, and you cannot sit on the back foot forever.\n\nReading the field, knowing when to defend and when to accelerate — it is a lot like managing a release.",
  },
];

export const stories: Story[] = [
  {
    id: "the-sprint-that-fixed-itself",
    title: "The Sprint That Fixed Itself",
    excerpt:
      "A retro that changed one habit and quietly removed a whole class of blockers.",
    body: "We had a run of sprints that kept slipping — never by much, but always by something. The retro was the usual: estimates were off, QA was a bottleneck, dependencies came in late.\n\nThen someone asked a smaller question: what did we do at the end of every stand-up? The answer was nothing. We just dispersed. So we changed one habit — the last five minutes became a blocker pass, and blockers got an owner before anyone left the room.\n\nThe slipping stopped. Not because we got better at estimating, but because the work that was stuck now had somewhere to go.",
  },
  {
    id: "two-deadlines-one-team",
    title: "Two Deadlines, One Team",
    excerpt:
      "How scope got cut honestly instead of quietly borrowing from quality.",
    body: "Two deadlines landed in the same window and there was no version of the plan where both shipped at full scope. The easy move is to say yes to both and let quality absorb the cost.\n\nWe did it the honest way instead. We wrote down what each deadline actually needed, ranked the work by what a user would notice, and cut the rest in the open.\n\nBoth shipped. One shipped with fewer features, and everybody knew exactly which ones.",
  },
  {
    id: "the-feature-nobody-used",
    title: "The Feature Nobody Used",
    excerpt:
      "Shipping something perfect for the wrong user — and what discovery missed.",
    body: "We built a feature that was genuinely well made. Clean, fast, exactly what the request said. Adoption was near zero.\n\nThe request came from one loud voice. Discovery never checked whether that voice spoke for anyone else. We found the real workflow later, and it looked nothing like what we shipped.\n\nThe lesson stuck: a requirement is a hypothesis about a user, not a fact about one.",
  },
];

export const travels: Travel[] = [];

export const stats = [
  { value: "12+", label: "Projects Delivered" },
  { value: "98%", label: "On-Time Releases" },
  { value: "5", label: "Teams Coordinated" },
];
