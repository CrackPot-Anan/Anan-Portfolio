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
      "Leading cross-functional delivery for web and AI products with Agile and Scrum: facilitating daily planning, shaping scope, unblocking engineering, and keeping stakeholders aligned from discovery to launch.",
    tags: ["Agile", "Scrum", "Daily Planning", "Stakeholder Management", "Jira"],
  },
  {
    role: "Software Support and Implementation Engineer",
    period: "Feb 2025 - Nov 2025",
    org: "Akij iBOS Ltd",
    logo: "https://assets.abrarananraiyan.space/logos/akij-ibos.png",
    detail:
      "Drove business analysis and software implementation for client rollouts — gathering requirements, coordinating engineering, design, and QA in Jira, and supporting go-live and post-release stability.",
    tags: ["Business Analysis", "Implementation", "Go-Live", "Jira"],
  },
];

export const education = [
  {
    period: "Jan 2018 - Feb 2020",
    school: "Police Lines School and College, Rangpur",
    degree: "Higher Secondary Certificate",
    majorLabel: "Group",
    major: "Science",
    cgpa: "GPA 5.00 / 5.00",
    location: "Rangpur, Bangladesh",
  },
  {
    period: "Sept 2021 - May 2025",
    school: "American International University – Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    majorLabel: "Major",
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
    logo: "https://assets.abrarananraiyan.space/logos/aiub-computer-club.png",
    detail:
      "Organized workshops, edited event videos, and led a team of photographers to deliver event coverage and post-production for the club.",
    tags: ["Video Editing", "Photographer Lead", "Event Management"],
  },
  {
    period: "Jun 2023 - Jan 2025",
    role: "Logistic Peer",
    org: "Firefox Club, AIUB",
    logo: "https://assets.abrarananraiyan.space/logos/firefox.png",
    detail:
      "Supported logistics for Firefox Club events at AIUB — coordinating venues, equipment, and on-ground operations to keep club activities running smoothly.",
    tags: ["Logistics", "Event Operations"],
  },
  {
    period: "Aug 2022 - Aug 2023",
    role: "Campus Lead",
    org: "Applink by Banglalink",
    logo: "https://assets.abrarananraiyan.space/logos/applink.png",
    detail:
      "Represented Applink by Banglalink on campus as a campus lead — engaging students, growing the community, and carrying the program into campus events.",
    tags: ["Campus Leadership", "Community"],
  },
  {
    period: "Jun 2022 - Jun 2023",
    role: "Campus Ambassador",
    org: "Genex Infosys",
    logo: "https://assets.abrarananraiyan.space/logos/genex-infosys.png",
    detail:
      "Represented Genex Infosys on campus as a campus ambassador — promoting programs, engaging students, and strengthening the company's presence across campus activities.",
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
    tags: ["HRIS", "Stakeholder Management", "Daily Scrum", "SRS", "Business Analysis"],
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
    id: "reading",
    name: "Reading Books",
    detail:
      "Sci-fi, product essays, and whatever the shelf recommends next.",
    body: "Reading is where most of my thinking happens off the clock. I move between science fiction, product essays, and the occasional memoir.\n\nHalf of what I know about scoping and narrative I picked up from books, not tickets — a good chapter is just a well-sequenced backlog.",
  },
  {
    id: "movies",
    name: "Watching Movies",
    detail: "Films and series — sci-fi, thrillers, and the slow dramas.",
    body: "There is usually a film or a series running somewhere in my week — science fiction, thrillers, and the slow dramas that reward patience.\n\nGood storytelling is a masterclass in pacing: what to reveal, what to hold back, and when the payoff lands. I steal that instinct for demos and updates.",
  },
  {
    id: "roaming",
    name: "Roaming Around",
    detail: "Long walks with no route — a city reads differently on foot.",
    body: "I like to roam — no map, no destination, just walking until something interesting shows up.\n\nA city reads differently on foot: the details you miss in transit, the small shops, the quiet corners. It clears the head and resets the week better than any break.",
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
  { value: "7", label: "Projects Delivered" },
  { value: "98%", label: "On-Time Releases" },
  { value: "2", label: "Teams Coordinated" },
];
