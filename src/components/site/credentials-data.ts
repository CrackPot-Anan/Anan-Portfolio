export type Credential = {
  title: string;
  issuer: string;
  /** ISO date e.g. "2024-03" or "2024-03-14" — shown as "Issued Mar 2024" on the card. */
  issuedDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  image: string;
};

/** Add new certificates here — upload the image to R2 and paste its public URL. */
export const credentials: Credential[] = [
  {
    title: "Accelerate Your Job Search with AI",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/accelerate-your-job-search-with-ai-google.jpg",
  },
  {
    title: "Advanced Interviewing Techniques",
    issuer: "University of Maryland",
    image:
      "https://assets.abrarananraiyan.space/certificates/advanced-interviewing-techniques-university-of-maryland.png",
  },
  {
    title: "Advertising in the Age of Generative AI",
    issuer: "University of Virginia (Darden)",
    image:
      "https://assets.abrarananraiyan.space/certificates/advertising-in-the-age-of-generative-ai-university-of-virginia-darden.jpg",
  },
  {
    title: "Agile Project Management",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/agile-project-management-google.jpg",
  },
  {
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    image:
      "https://assets.abrarananraiyan.space/certificates/agile-with-atlassian-jira-atlassian.jpg",
  },
  {
    title: "AI Applications in People Management",
    issuer: "University of Pennsylvania (Wharton)",
    image:
      "https://assets.abrarananraiyan.space/certificates/ai-applications-in-people-management-university-of-pennsylvania-wharton.jpg",
  },
  {
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    image:
      "https://assets.abrarananraiyan.space/certificates/ai-infrastructure-and-operations-fundamentals-nvidia.jpg",
  },
  {
    title: "AI Strategy and Governance",
    issuer: "University of Pennsylvania (Wharton)",
    image:
      "https://assets.abrarananraiyan.space/certificates/ai-strategy-and-governance-university-of-pennsylvania-wharton.jpg",
  },
  {
    title: "Brand and Product Management",
    issuer: "IE Business School",
    image:
      "https://assets.abrarananraiyan.space/certificates/brand-and-product-management-ie-business-school.jpg",
  },
  {
    title: "Build Your Portfolio Website with HTML and CSS",
    issuer: "Coursera Project Network",
    image:
      "https://assets.abrarananraiyan.space/certificates/build-your-portfolio-website-with-html-and-css-coursera-project-network.jpg",
  },
  {
    title: "Capstone - Applying Project Management in the Real World",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/capstone-applying-project-management-in-the-real-world-google.jpg",
  },
  {
    title: "Content Marketing Using Generative AI",
    issuer: "University of Virginia (Darden)",
    image:
      "https://assets.abrarananraiyan.space/certificates/content-marketing-using-generative-ai-university-of-virginia-darden.jpg",
  },
  {
    title: "Customer Understanding and Digital Marketing Channels",
    issuer: "Unilever",
    image:
      "https://assets.abrarananraiyan.space/certificates/customer-understanding-and-digital-marketing-channels-unilever.jpg",
  },
  {
    title: "Design Thinking and Innovation",
    issuer: "IIT Bombay",
    image:
      "https://assets.abrarananraiyan.space/certificates/design-thinking-and-innovation-iit-bombay.jpg",
  },
  {
    title: "English for Career Development",
    issuer: "University of Pennsylvania",
    image:
      "https://assets.abrarananraiyan.space/certificates/english-for-career-development-university-of-pennsylvania.jpg",
  },
  {
    title: "Finding Purpose and Meaning In Life - Living for What Matters Most",
    issuer: "University of Michigan",
    image:
      "https://assets.abrarananraiyan.space/certificates/finding-purpose-and-meaning-in-life-living-for-what-matters-most-university-of-michigan.jpg",
  },
  {
    title: "Foundations - Data, Data, Everywhere",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/foundations-data-data-everywhere-google.jpg",
  },
  {
    title: "Foundations of Business Analysis",
    issuer: "SAP",
    image:
      "https://assets.abrarananraiyan.space/certificates/foundations-of-business-analysis-sap.jpg",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/foundations-of-cybersecurity-google.jpg",
  },
  {
    title: "Foundations of Project Management",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/foundations-of-project-management-google.jpg",
  },
  {
    title: "Foundations of Software Testing and Validation",
    issuer: "University of Leeds",
    image:
      "https://assets.abrarananraiyan.space/certificates/foundations-of-software-testing-and-validation-university-of-leeds.jpg",
  },
  {
    title: "Fundamentals of Project Planning and Management",
    issuer: "University of Virginia (Darden)",
    image:
      "https://assets.abrarananraiyan.space/certificates/fundamentals-of-project-planning-and-management-university-of-virginia-darden.jpg",
  },
  {
    title: "Google Project Management",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/google-project-management-google.jpg",
  },
  {
    title: "Initiating and Planning Projects",
    issuer: "University of California Irvine",
    image:
      "https://assets.abrarananraiyan.space/certificates/initiating-and-planning-projects-university-of-california-irvine.jpg",
  },
  {
    title: "International Business Context",
    issuer: "University of Colorado Boulder",
    image:
      "https://assets.abrarananraiyan.space/certificates/international-business-context-university-of-colorado-boulder.jpg",
  },
  {
    title: "Introduction to Google Workspace Administration",
    issuer: "Google Cloud",
    image:
      "https://assets.abrarananraiyan.space/certificates/introduction-to-google-workspace-administration-google-cloud.jpg",
  },
  {
    title: "Introduction to Information Technology and AWS Cloud",
    issuer: "Amazon Web Services",
    image:
      "https://assets.abrarananraiyan.space/certificates/introduction-to-information-technology-and-aws-cloud-amazon-web-services.jpg",
  },
  {
    title: "Introduction to Jira",
    issuer: "Atlassian",
    image:
      "https://assets.abrarananraiyan.space/certificates/introduction-to-jira-atlassian.jpg",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    image:
      "https://assets.abrarananraiyan.space/certificates/introduction-to-large-language-models-google-cloud.jpg",
  },
  {
    title: "Introduction to Psychology",
    issuer: "Yale University",
    image:
      "https://assets.abrarananraiyan.space/certificates/introduction-to-psychology-yale-university.jpg",
  },
  {
    title: "Introduction to Software Product Management",
    issuer: "University of Alberta",
    image:
      "https://assets.abrarananraiyan.space/certificates/introduction-to-software-product-management-university-of-alberta.jpg",
  },
  {
    title: "Leadership Skills",
    issuer: "IIM Ahmedabad",
    image:
      "https://assets.abrarananraiyan.space/certificates/leadership-skills-iim-ahmedabad.jpg",
  },
  {
    title: "Negotiation Fundamentals",
    issuer: "ESSEC Business School",
    image:
      "https://assets.abrarananraiyan.space/certificates/negotiation-fundamentals-essec-business-school.jpg",
  },
  {
    title: "Organizations of the Future",
    issuer: "IIM Ahmedabad",
    image:
      "https://assets.abrarananraiyan.space/certificates/organizations-of-the-future-iim-ahmedabad.jpg",
  },
  {
    title: "Pricing Strategy",
    issuer: "IE Business School",
    image:
      "https://assets.abrarananraiyan.space/certificates/pricing-strategy-ie-business-school.jpg",
  },
  {
    title: "Product Management - An Introduction",
    issuer: "IBM",
    image:
      "https://assets.abrarananraiyan.space/certificates/product-management-an-introduction-ibm.jpg",
  },
  {
    title: "Project Initiation - Starting a Successful Project",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/project-initiation-starting-a-successful-project-google.jpg",
  },
  {
    title: "Project Planning - Putting It All Together",
    issuer: "Google",
    image:
      "https://assets.abrarananraiyan.space/certificates/project-planning-putting-it-all-together-google.jpg",
  },
  {
    title: "Supply Chain Management and Analytics",
    issuer: "Unilever",
    image:
      "https://assets.abrarananraiyan.space/certificates/supply-chain-management-and-analytics-unilever.jpg",
  },
  {
    title: "The Changing Global Order",
    issuer: "Leiden University",
    image:
      "https://assets.abrarananraiyan.space/certificates/the-changing-global-order-leiden-university.jpg",
  },
  {
    title: "Web3 and Blockchain Fundamentals",
    issuer: "INSEAD",
    image:
      "https://assets.abrarananraiyan.space/certificates/web3-and-blockchain-fundamentals-insead.jpg",
  },
];
