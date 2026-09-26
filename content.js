// ============================================================
// CONTENT.JS — this is the only file you should need to touch
// for routine updates: a new project, a new cert, a new line
// in the journey. The layout and styling live in index.html.
//
// Search for "REPLACE ME" below — those are the placeholders
// I couldn't fill in for you (project links, if you add more).
// ============================================================

window.SITE_DATA = {

  meta: {
    name: "Oluwafunke Bolarin",
    title: "Inventory Control Professional & Data Analyst in Training",
    location: "Lagos, Nigeria",
    email: "bolarinoluwafunke1@gmail.com",
    github: "https://github.com/Funke-B",
    githubUsername: "Funke-B",
    linkedin: "https://www.linkedin.com/in/funkebolarinval/",
    initials: "FB",
  },

  hero: {
    eyebrow: "Inventory Control Professional · Lagos, Nigeria",
    headline: "Turning Warehouse Guesswork Into Reports You Can Trust.",
    sub: `
  <p>I turn messy stock records and sales data into organized systems, clear dashboards, and practical reports that help businesses understand what's really happening with their inventory.</p>

  <p>Through Truecount, I create simple inventory templates that make it easier to record, monitor, and manage stock without the complexity of expensive inventory software.</p>

  <p>I also provide data entry support for businesses that need help organizing, updating, and maintaining their inventory records.</p>
`,
    stats: [
      { value: "7", label: "Years in Inventory Management" },
      { value: "4", label: "Professional Certifications" },
      { value: "2026", label: "Data Analytics Pivot, Underway" },
    ],
  },

  about: {
    heading: "I clean, count, and reconcile before I trust a number enough to report it.",
    body: "I'm an Inventory Control Professional with 7 years of experience across inventory, logistics, and FMCG operations, with most of my experience in the skincare and cosmetics sector. My work involves keeping stock records accurate, reconciling physical stock with records, tracking movements across locations, preparing inventory reports, and building Excel-based systems that make stock easier to monitor and manage. I hold ACISCM, ACIWM, and a CILSCM Professional Postgraduate Diploma, with CPIM in view. I completed the ALX Data Analytics Program. Alongside that, I build simple inventory templates and provide data entry support to help businesses keep their stock records organized and up to date.",
    correction: {
      label: "From a live report, not a sample dataset",
      headline: "81 SKUs reconciled across multiple locations, worth ₦769M, fully ABC classified",
      body: "Built as inventory and sales report, then turned into a portfolio case study covering classification logic and multi-location analysis.",
    },
  },

  journey: [
    {
      year: "7 yrs",
      title: "FMCG & Retail Inventory Control",
      body: "Built a foundation in inventory control and supply chain operations across Lagos's skincare, cosmetics, and FMCG sectors.",
    },
    {
      year: "Credentials",
      title: "ACISCM, ACIWM & CILSCM Postgraduate Diploma",
      body: "Formalised that experience with three supply-chain and warehouse-management credentials, with CPIM in view.",
    },
    {
      year: "2024",
      title: "ALX Data Analytics Program",
      body: "Completed a structured data analytics program that introduced SQL and core data analysis fundamentals — the starting point for the pivot, not the finish line.",
    },
    {
      year: "April 2026 — Present",
      title: "Founded Truecount Advisory",
      body: "Launched a solo inventory management consulting venture, that helps businesses track and control inventory.",
    },
  ],

  skills: [
    {
      group: "Inventory & Operations",
      items: ["Stock Reconciliation", "ABC Classification", "Multi-Location Reporting", "Demand Planning", "Inventory Valuation"],
    },
    {
      group: "Excel",
      items: ["Advanced Formulas", "Multi-Sheet Data Modeling", "Dashboard Building"],
    },
    {
      group: "Data & Reporting",
      items: ["Data Cleaning & Validation", "Power BI (trained)"],
    },
    {
      group: "Reporting & Docs",
      items: ["PDF Portfolio Reports", "Data Storytelling"],
    },
    {
      group: "Actively Developing",
      items: ["SQL", "Python", "Tableau"],
    },
  ],

  // Formal academic qualifications — separate from the professional
  // trainings/certifications below.
  education: [
    { title: "ND, Science Laboratory Technology", issuer: "Auchi Polytechnic", meta: "Completed" },
    { title: "HND, Microbiology", issuer: "Auchi Polytechnic", meta: "Completed" },
  ],

  // category controls the filter tab: dataAnalyst | inventoryExcel
  projects: [
    {
      category: "dataAnalyst",
      tags: ["ALX Coursework", "Data Cleaning"],
      title: "Maji Ndogo — Water Access Case Study",
      body: "A four-part case study from the ALX Data Analytics Program — my first hands-on introduction to SQL and data cleaning, investigating water-source access and quality across a fictional region.",
      links: [
        {
          url: "https://github.com/Funke-B/Clustering-data-to-unveil-Maji-Ndogo-s-water-crisis",
          label: "View on GitHub →"
        }
      ],
    },
    {
      category: "dataAnalyst",
      tags: ["RFM Segmentation", "Excel", "Customer Analytics"],
      title: "GlowHouse Cosmetics — Customer Segmentation",
      body: "Module 1 of a self-directed analytics curriculum, run against a synthetic cosmetics-retail dataset: RFM segmentation to separate high-value repeat customers from one-time buyers.",
      links: [],
    },
    {
      category: "inventoryExcel",
      tags: ["Excel", "Multi-Sheet Modeling", "Sales Reporting"],
      title: "Lumora Skincare — Sales Reporting Workbook",
      body: "A 10-sheet Excel workbook with 3,000+ formula cells, built to turn raw sales exports into a standing reporting system rather than a one-off report.",
      links: [],
    },
    {
      category: "inventoryExcel",
      tags: ["Excel", "ABC Classification", "Multi-Location"],
      title: "Hush'D Makeover — Inventory Report",
      body: "Reconciled 81 SKUs worth ₦769M across multiple locations, built an ABC classification to flag over- and under-stocked lines, and packaged the findings into a 12-page portfolio-ready case study.",
      links: [],
    },
  ],

  truecount: {
    heading: "Truecount Advisory",
    body: "A solo inventory management consulting venture. I build simple inventory templates that make it easier for small businesses to record, monitor, and manage stock without expensive software, and provide data entry support to help keep their records organized and up to date. Brand identity and service catalogue built out, sales collateral in progress.",
    link: "https://claude.ai/artifact/GgobBoU7dq3P2NhcjoRou6",
  },

  certifications: [
    { title: "ALX Data Analytics Program", issuer: "ALX", meta: "Completed" },
    { title: "ACISCM", issuer: "Associate Chartered Institute of Supply Chain Management", meta: "Completed" },
    { title: "ACIWM", issuer: "Associate Chartered Institute of Warehouse Management", meta: "Completed" },
    { title: "CILSCM Postgraduate Diploma (PGD) in Warehousing and Material Management", issuer: "Chartered Institute of Logistics & Supply Chain Management", meta: "Completed" },
    { title: "CPIM Certified in Planning and Inventory Management", issuer: "Association for Supply Chain Management (ASCM)", meta: "In view" },
  ],

  experience: [
    {
      dates: "Present",
      title: "Inventory Control Supervisor",
      org: "Hush'D Makeover Limited",
      body: "Keep stock records accurate — reconciling physical stock with records, tracking movements across locations, and preparing the inventory reports that go to management, across FMCG and cosmetics lines.",
    },
    {
      dates: "April 2026 — Present",
      title: "Founder",
      org: "Truecount Advisory",
      body: "Build simple inventory templates and provide data entry support that help small businesses record, monitor, and manage stock without the complexity of expensive inventory software.",
    },
  ],

};
