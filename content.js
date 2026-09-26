// ============================================================
// CONTENT.JS — this is the only file you should need to touch
// for routine updates: a new project, a new cert, a new line
// in the journey. The layout and styling live in index.html.
//
// Search for "REPLACE ME" below — those are the placeholders
// I couldn't fill in for you (email, LinkedIn, project links).
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
    sub: "6+ years creating and running inventory control systems across Lagos's skincare and FMCG sector. I count what's actually on the shelf, reconcile it against what the books say, and turn the gap into a report someone can act on — no guessing, no surprises at stock take.",
    stats: [
      { value: "6+", label: "Years in Inventory & Supply Chain" },
      { value: "4", label: "Professional Certifications" },
      { value: "2026", label: "Data Analytics Pivot, Underway" },
    ],
    ledger: {
      title: "STOCK COUNT — SKU AUDIT",
      rows: [
        { sku: "SKU-0142", name: "Rosewater Toner 250ml", qty: "244", status: "ok" },
        { sku: "SKU-0198", name: "Shea Butter Cream", qty: "512", status: "ok" },
        { sku: "SKU-0233", name: "Vitamin C Serum", qty: "—", status: "recount" },
        { sku: "SKU-0301", name: "Clay Face Mask 100g", qty: "88", status: "ok" },
      ],
      footer: "81 SKUs verified · ₦769M total value · ABC classified",
    },
  },

  about: {
    heading: "I clean, count, and reconcile before I trust a number enough to report it.",
    body: "I'm an Inventory Control Supervisor with 6+ years across Lagos's skincare, cosmetics, and FMCG sectors, holding ACISCM, ACIWM, and a CILSCM Postgraduate Diploma, with CIPS procurement in progress. Alongside that, I completed the ALX Data Analytics Program and I'm building a second, complementary skill set — Excel automation and Power BI now, with SQL and Python next — deliberately, on real inventory data rather than tutorials, while keeping my supply-chain identity intact.",
    correction: {
      label: "From a live report, not a sample dataset",
      headline: "81 SKUs reconciled across multiple locations, worth ₦769M, fully ABC classified",
      body: "Built as the July 2026 inventory and sales report for Hush'D Makeover Limited, then turned into a 12-page portfolio case study covering classification logic and multi-location analysis.",
    },
  },

  journey: [
    {
      year: "6+ yrs",
      title: "FMCG & Retail Inventory Control",
      body: "Built a foundation in inventory control and supply chain operations across Lagos's skincare, cosmetics, and FMCG sectors.",
    },
    {
      year: "Credentials",
      title: "ACISCM, ACIWM & CILSCM Postgraduate Diploma",
      body: "Formalised that experience with three supply-chain and warehouse-management credentials, and started the CIPS procurement certification.",
    },
    {
      year: "2026",
      title: "ALX Data Analytics Program",
      body: "Completed a structured data analytics program that introduced SQL and core data analysis fundamentals — the starting point for the pivot, not the finish line.",
    },
    {
      year: "2026",
      title: "Founded Truecount Advisory",
      body: "Launched a solo inventory management consulting venture, run alongside full-time employment.",
    },
    {
      year: "Aug 2026",
      title: "Built the GitHub Portfolio",
      body: "Designed and shipped a portfolio site from scratch, incorporating real ALX coursework, real inventory report data, and custom branding.",
    },
    {
      year: "Sept 2026 — Present",
      title: "Structured Analytics Curriculum",
      body: "Working through a self-directed curriculum covering RFM segmentation, cohort analysis, demand forecasting, hypothesis testing, and regression — Module 1 run live against a synthetic cosmetics dataset.",
    },
  ],

  skills: [
    {
      group: "Inventory & Operations",
      items: ["Stock Reconciliation", "ABC Classification", "Multi-Location Reporting", "Demand Planning", "Procurement (CIPS in progress)"],
    },
    {
      group: "Excel",
      items: ["Advanced Formulas", "Multi-Sheet Data Modeling", "Dashboard Building", "openpyxl (Python)"],
    },
    {
      group: "Data & Reporting",
      items: ["Data Cleaning & Validation", "Power BI (trained)"],
    },
    {
      group: "Reporting & Docs",
      items: ["docx (Node.js)", "PDF Portfolio Reports", "Data Storytelling"],
    },
    {
      group: "Actively Developing",
      items: ["SQL", "Python", "Tableau"],
    },
  ],

  // category controls the filter tab: dataAnalyst | inventoryExcel
  projects: [
    {
      category: "dataAnalyst",
      tags: ["ALX Coursework", "Data Cleaning"],
      title: "Maji Ndogo — Water Access Case Study",
      body: "A four-part case study from the ALX Data Analytics Program — my first hands-on introduction to SQL and data cleaning, investigating water-source access and quality across a fictional region.",
      links: [],
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
      title: "Hush'D Makeover — July 2026 Inventory Report",
      body: "Reconciled 81 SKUs worth ₦769M across multiple locations, built an ABC classification to flag over- and under-stocked lines, and packaged the findings into a 12-page portfolio-ready case study.",
      links: [],
    },
  ],

  truecount: {
    heading: "Truecount Advisory",
    body: "A solo inventory management consulting venture, run alongside full-time employment — brand identity and service catalogue built out, sales collateral in progress.",
    link: "REPLACE ME — e.g. https://truecountadvisory.com",
  },

  certifications: [
    { title: "ALX Data Analytics Program", issuer: "ALX", meta: "Completed" },
    { title: "ACISCM", issuer: "Chartered Institute of Stock and Inventory Control Management", meta: "" },
    { title: "ACIWM", issuer: "Chartered Institute of Warehousing & Materials Management", meta: "" },
    { title: "CILSCM Postgraduate Diploma", issuer: "Chartered Institute of Logistics & Supply Chain Management", meta: "" },
    { title: "CIPS Procurement Certification", issuer: "Chartered Institute of Procurement & Supply", meta: "In progress" },
  ],

  experience: [
    {
      dates: "Present",
      title: "Inventory Control Supervisor",
      org: "Hush'D Makeover Limited",
      body: "Own the live multi-sheet Excel inventory system — stock tracking, formula fixes, and the reporting that goes to management, across FMCG and cosmetics lines.",
    },
    {
      dates: "Ongoing",
      title: "Founder",
      org: "Truecount Advisory",
      body: "Solo inventory management consulting, run alongside full-time employment.",
    },
  ],

};
