// Content for "Introduction to Open Source" — Session 1 orientation deck.
// Sourced from the Session 1 PPT and the upGrad SoT deck style/content.

export const slides = [
  {
    type: "title",
    watermark: "OSS",
    label: "Welcome",
    eyebrow: "Open Source Track · Session 1",
    title: "Introduction to Open Source",
    subtitle:
      "What it actually is, why it matters, and how you'll start contributing this year.",
  },

  {
    type: "quote",
    watermark: "CODE",
    label: "A Quote",
    quote: "Talk is cheap. Show me the code.",
    attribution: "Linus Torvalds, creator of Linux and Git",
    note: "The core idea behind open source: more people looking at the same code find and fix more problems than any small closed team can.",
  },

  {
    type: "pipeline",
    label: "What is Open Source",
    eyebrow: "The Basics",
    title: "What Is Open Source?",
    lede: "Open source means the actual code behind a piece of software is public, so anyone can look at it, learn from it, or improve it — instead of it being locked away inside one company. People all over the world work on the same project together, for free, and anyone can fix bugs or add features by submitting their changes for review. Big things you already use — Linux, Chrome's engine, VS Code, React — are all built this way.",
    steps: [
      { icon: "code", title: "Source Code", desc: "What a developer writes" },
      { icon: "cpu", title: "Compiler", desc: "Translates it to machine instructions" },
      { icon: "zap", title: "Executable", desc: "The program you actually run" },
    ],
    callout: "it is the only place where a first-year student and a principal engineer at a big company work on the exact same code, side by side.",
  },

  {
    type: "twocol-compare",
    label: "What is Open Source",
    eyebrow: "Two Common Mix-Ups",
    title: "Open vs. Closed ",
    lede: "The single most common misconception new contributors carry in.",
    colA: {
      title: "Open Source",
      icon: "gitbranch",
      points: [
        "Source code is public and accessible",
        "Community can report bugs and submit fixes",
        "Anyone can fork it, clone it and build on it",
        "Examples: Linux, VS Code, React",
      ],
    },
    colB: {
      title: "Closed Source",
      icon: "shield",
      points: [
        "Source code stays private to the company",
        "Only internal teams can view or modify it",
        "Usually commercial, licensed software",
        "Examples: most proprietary desktop apps",
      ],
    },
    footnote:
      "A project can be open source and still be sold commercially — or free to use and still be closed source.",
  },

  {
    type: "perspectives",
    label: "Two Perspectives",
    eyebrow: "Two Sides, One System",
    title: "Why It Matters, From Both Sides",
    colA: {
      title: "For You, the Contributor",
      points: [
        "You learn from real, production-grade code, not just tutorials",
        "You get reviewed by senior engineers, for free, on every pull request",
        "You build a public portfolio that any recruiter can go check right now",
        "You practice writing code that strangers can read and trust",
      ],
    },
    colB: {
      title: "For the Company",
      points: [
        "Public code is a live audition — engineers can see how they build, before applying",
        "Outside contributors find bugs and battle-test edge cases a small internal team never could",
        "Being the default tool (React, Kubernetes) drives adoption and influence",
        "The free open core drives adoption; support and premium features earn revenue",
      ],
    },
  },

  {
    type: "rules",
    label: "Getting Hired",
    eyebrow: "The Big Shift",
    title: "Open Source is the",
    accent: "New Way to Get Hired",
    rules: [
      "Your GitHub profile is a live resume that recruiters check before your CV",
      "Companies like Zerodha, Red Hat, and Docker actively hire straight out of their own open source communities",
      "Programs like GSoC, LFX, and Outreachy pay you to contribute, and often lead to full-time offers",
      "A single merged pull request to a well-known project can matter more than a certificate",
    ],
  },

  {
    type: "events",
    label: "Events",
    eyebrow: "Mark Your Calendar",
    title: "Open Source Events You'll Take Part In",
    events: [
      { name: "Hacktoberfest 2026", when: "Oct 1\u201331, 2026", mode: "Online / global" },
      { name: "24 Pull Requests", when: "Dec 1\u201324, 2026", mode: "Online / global" },
      { name: "Indian University Winter of Codes", when: "Dec 2026 \u2013 Feb 2027", mode: "Online (India)" },
      { name: "Social Winter of Code (SWoC)", when: "Jan \u2013 Mar 2027", mode: "Online (India)" },
      { name: "Outreachy (Dec cohort)", when: "Dec 2026 \u2013 Mar 2027", mode: "Online / global" },
      { name: "Season of KDE 2027", when: "Jan \u2013 Mar 2027", mode: "Online / global" },
      { name: "LFX Mentorship (Spring 2027)", when: "Mar \u2013 May 2027", mode: "Online / global" },
      { name: "Outreachy (May cohort)", when: "Jun \u2013 Aug 2027", mode: "Online / global" },
      { name: "GSoC 2027", when: "May \u2013 Aug 2027", mode: "Online / global" },
      { name: "Summer of Bitcoin 2027", when: "Spring \u2013 Summer 2027", mode: "Online / global" },
      { name: "FOSSEE Summer Fellowship", when: "Summer 2027", mode: "Hybrid (IIT Bombay)" },
      { name: "SSoC 2027", when: "Jun \u2013 Aug 2027", mode: "Online (India)" },
      { name: "GSSoC 2027", when: "Mid/late 2027", mode: "Online (India-led)" },
      { name: "MLH Fellowship", when: "Rolling cohorts", mode: "Online / global" },
      { name: "C4GT (Code for GovTech)", when: "Summer 2027", mode: "Online (India-led)" },
    ],
  },

  // {
  //   type: "tracks",
  //   label: "The Two Tracks",
  //   eyebrow: "Pick Your Pace",
  //   title: "Regular Track vs. Fast Track",
  //   colA: {
  //     title: "Regular Track",
  //     icon: "clock",
  //     points: [
  //       "One skill focus per month — steady, sustainable depth",
  //       "Room to fully digest Git, HTML/CSS, Python before moving on",
  //       "Reaches React & MySQL by April\u2013May",
  //       "Best if: this is your first serious tech commitment",
  //     ],
  //   },
  //   colB: {
  //     title: "Fast Track",
  //     icon: "zap",
  //     points: [
  //       "Compressed pace — multiple stacks per quarter",
  //       "Adds FastAPI, JS, MySQL, Node, Express, MongoDB, Next.js, Cloud",
  //       "Positions you for GSoC drafting as early as January",
  //       "Best if: you already code and want maximum exposure fast",
  //     ],
  //   },
  // },

  {
    type: "tech",
    label: "Technologies",
    eyebrow: "Tools of the Trade",
    title: "What You'll Learn",
    sections: [
      // {
      //   heading: "Regular Track",
      //   items: ["git", "github", "html5", "css3", "tailwindcss", "python", "fastapi", "javascript", "react", "mysql"],
      // },
      {
        heading: "Fast Track (Regular + More)",
        items: ["git", "github", "html5", "css3", "tailwindcss", "javascript", "python", "fastapi", "mysql", "react", "nextdotjs", "nodedotjs", "express", "django", "mongodb", "postgresql", "cloud"],
      },
    ],
  },

  {
    type: "timeline",
    label: "Learning Roadmap",
    eyebrow: "Two Paces, One Destination",
    title: "Your Learning Roadmap, at a Glance",
    lede: "A confident, active open source contributor by May.",
    stops: [
      { period: "Sep", icon: "code", title: "Foundations", desc: "Git, GitHub, HTML/CSS, Tailwind — tool up before the season starts" },
      { period: "Oct\u2013Dec", icon: "gitmerge", title: "First Contributions", desc: "Hacktoberfest, 24 PRs, Winter of Code — your first real PRs merged" },
      { period: "Jan\u2013Mar", icon: "layers", title: "Specialization", desc: "FastAPI, JavaScript, React — deepen your stack, keep contributing" },
      { period: "Apr\u2013May", icon: "rocket", title: "Flagship Programs", desc: "GSoC, LFX, Outreachy, Summer of Bitcoin — aim for paid mentorships" },
    ],
  },

  {
    type: "projects",
    label: "Projects",
    eyebrow: "Where You'll Contribute",
    title: "Projects You'll Work On",
    categories: [
      { title: "Start Here", tags: ["First Contributions", "Up For Grabs", "Good First Issue", "CodeTriage"] },
      { title: "Python", tags: ["Rich", "Typer", "Click", "Cookiecutter", "FastAPI", "Flask", "Requests", "Textual", "Pydantic", "Reflex"] },
      { title: "Frontend & UI", tags: ["Astro", "Docusaurus", "Bootstrap", "Tailwind CSS", "Flowbite", "DaisyUI", "React", "React Router", "Chakra UI", "Mantine", "Storybook"] },
      { title: "Full Stack & Platforms", tags: ["Appwrite", "Supabase", "OpenMRS"] },
      { title: "Events & Beyond", tags: ["Hacktoberfest Repositories", "Social Winter of Code", "JGEC Winter of Code", "Any CNCF / Apache / Mozilla / Linux Foundation Project"] },
    ],
  },

  {
    type: "grading",
    label: "Grading",
    eyebrow: "How You're Scored",
    title: "Grading Schema",
    lede: "Every month runs on a simple points scale. More PRs merged, more workshops attended, more points, on both tracks.",
    groups: [
      { month: "September", rows: [{ label: "Register for Hacktoberfest + attend workshops", weight: "1\u20135 pts" }] },
      { month: "October", rows: [{ label: "Complete Hacktoberfest (PRs merged)", weight: "1\u20135 pts" }] },
      { month: "November", rows: [{ label: "UGSOT Internal Contribution Sprint, or any global hackathon", weight: "1\u20135 pts" }] },
      { month: "December", rows: [{ label: "UGSOT Internal Contribution Sprint, or any global hackathon", weight: "1\u20135 pts" }] },
    ],
    footnote: "Points scale from 1 (registered) to 5 (fully completed) — the same scale applies every month for both Regular and Fast Track students.",
  },

  {
    type: "nextsteps",
    label: "Next Steps",
    eyebrow: "Before Next Session",
    title: "Your Next Steps",
    steps: [
      { n: "1", title: "Create your GitHub account", desc: "The single most important account you'll set up this year." },
      { n: "2", title: "Open, Explore & Learn", desc: "Get comfortable reading a real, live open source repository." },
      { n: "3", title: "Block Sept. Week 2", desc: "Reserve time for our Git & GitHub Workshop — hands-on, no prior experience needed." },
      { n: "4", title: "Set a Hacktoberfest reminder", desc: "Registration opens mid-September — don't miss the window." },
    ],
  },





  {
    type: "terms",
    label: "Key Terms",
    eyebrow: "Speak the Language",
    title: "Key Terms & Vocabulary",
    groups: [
      {
        heading: "Repository & Fork",
        terms: [
          { icon: "folder", term: "Repository", def: "A central place where a project's code is stored and managed — usually on GitHub, GitLab, or Bitbucket." },
          { icon: "gitfork", term: "Fork", def: "Your own personal copy of a repository, free to modify and experiment with — no risk to the original." },
        ],
      },
      {
        heading: "Issue & Pull Request",
        terms: [
          { icon: "bug", term: "Issue", def: "A tracked problem, bug, or feature request — anyone can open one to flag work that's needed." },
          { icon: "gitpr", term: "Pull Request", def: "A formal request asking maintainers to review and merge your changes into the codebase." },
        ],
      },
    ],
    roles: {
      heading: "The Roles Around You",
      note: "Everyone starts as a Contributor. Consistency and quality are what move you up.",
      items: [
        { icon: "users", role: "Contributor", desc: "Anyone who improves the project through code, docs, design, or discussion" },
        { icon: "star", role: "Core Member", desc: "A trusted contributor with elevated privileges, earned through sustained work" },
        { icon: "shield", role: "Maintainer", desc: "Owns the project's direction" },
      ],
    },
  },

  {
    type: "steps",
    label: "The Contribution Workflow",
    eyebrow: "The Contribution Workflow",
    title: "How to Navigate an Unfamiliar Repository",
    steps: [
      { icon: "book", title: "Read the README", desc: "Understand what the project does, and run it locally so you experience the problem first-hand." },
      { icon: "list", title: "Review the Issues", desc: "Filter by \u201cgood first issue\u201d or \u201chelp wanted\u201d, then choose one that is small and clearly defined." },
      { icon: "message", title: "Claim the Issue", desc: "Comment to say you'd like to work on it. This avoids duplicated effort and signals intent." },
      { icon: "bookmark", title: "Read CONTRIBUTING.md", desc: "Setup steps, coding standards, and the PR process — your reference guide for that repo." },
    ],
    callout: "Guiding principle: understand the problem before changing any code. A newcomer who reads carefully and asks good questions is more valuable than one who guesses.",
  },






  {
    type: "closing",
    watermark: "ASK",
    label: "Q&A",
    kicker: "Questions?",
    sub: "Ask now",
  },

  {
    type: "closing",
    watermark: "FORK",
    label: "Thank You",
    kicker: "Thank You!",
    sub: "See you at the Git & GitHub Workshop.",
  },
];
