export interface DayItem {
  day: number;
  title: string;
  topics: string[];
}

export interface Module {
  id: number;
  title: string;
  days: string;
  description: string;
  dayItems: DayItem[];
}

export interface LearningCategory {
  title: string;
  icon: string;
  items: string[];
}

export interface EligibilityItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BOQRow {
  item: string;
  details: string;
  quantity: string;
  unit: string;
  rate: string;
  amount: string;
}

export const curriculum: Module[] = [
  {
    id: 1,
    title: "HVAC & Advanced VRF System Architecture",
    days: "Days 1–2",
    description: "Foundation of refrigeration principles and deep dive into VRF internal engineering.",
    dayItems: [
      {
        day: 1,
        title: "Modern Refrigeration Principles & AC Classification",
        topics: [
          "Thermodynamics fundamentals",
          "Vapor compression cycle",
          "P-h diagram analysis",
          "Subcooling & superheat",
          "Split, Multi-Split, Chilled Water systems",
          "VRF/VRV system overview",
          "R-410A & R-32 refrigerants",
          "Safety standards & practices"
        ]
      },
      {
        day: 2,
        title: "VRF Internal Engineering",
        topics: [
          "Inverter compressor technology",
          "Electronic Expansion Valve (EEV)",
          "Oil separator systems",
          "2-Pipe Heat Pump configuration",
          "3-Pipe Heat Recovery configuration",
          "Branch selector units",
          "ODU / IDU architecture",
          "Y-Joint / Refnet inspection"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Site Engineering, Piping & Electrical Wiring",
    days: "Days 3–6",
    description: "Hands-on site engineering covering piping design, electrical wiring, and system testing.",
    dayItems: [
      {
        day: 3,
        title: "Site Survey, Piping Design & Layout",
        topics: [
          "Site survey methodology",
          "Piping design principles",
          "Layout planning & documentation"
        ]
      },
      {
        day: 4,
        title: "Copper Piping, Brazing & Insulation",
        topics: [
          "Copper pipe preparation",
          "High-pressure brazing techniques",
          "Pipe insulation methods"
        ]
      },
      {
        day: 5,
        title: "Power Wiring, Communication Network & BMS",
        topics: [
          "Power wiring installation",
          "Communication network setup",
          "Building Management System (BMS) integration"
        ]
      },
      {
        day: 6,
        title: "Pressure Testing & Deep Vacuumization",
        topics: [
          "Nitrogen purging process",
          "Pressure testing procedures",
          "Triple vacuumization technique"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Commissioning, Gas Charging & Troubleshooting",
    days: "Days 7–9",
    description: "Complete commissioning process from gas charging to fault diagnosis and repair.",
    dayItems: [
      {
        day: 7,
        title: "Additional Gas Calculation & System Startup",
        topics: [
          "Additional refrigerant calculation",
          "System startup procedures",
          "Initial performance verification"
        ]
      },
      {
        day: 8,
        title: "Full-Load Commissioning & Performance Testing",
        topics: [
          "Full-load commissioning process",
          "Performance testing protocols",
          "System optimization"
        ]
      },
      {
        day: 9,
        title: "Fault Finding, Error Codes & Repair",
        topics: [
          "Error-code reading & interpretation",
          "Inverter PCB troubleshooting",
          "Diagnostic software operation",
          "Fault simulation & repair"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "HVAC & Refrigerator Business, Marketing, Sales & Support",
    days: "Days 10–14",
    description: "Complete business mastery covering dealership, sales, marketing, and after-sales management.",
    dayItems: [
      {
        day: 10,
        title: "Product Positioning & Market Analysis",
        topics: [
          "Product positioning strategies",
          "Market analysis techniques",
          "Competitive landscape understanding"
        ]
      },
      {
        day: 11,
        title: "Estimation, BOQ & Quotation Preparation",
        topics: [
          "Bill of Quantities (BOQ) preparation",
          "Project estimation techniques",
          "Quotation development"
        ]
      },
      {
        day: 12,
        title: "B2B Sales, Consultants & Architect Networking",
        topics: [
          "B2B sales methodologies",
          "Consultant relationship building",
          "Architect networking strategies"
        ]
      },
      {
        day: 13,
        title: "HVAC & Refrigerator Business Masterclass",
        topics: [
          "Business model & supply chain",
          "Customer support & after-sales management",
          "Sales network & commercial support strategy"
        ]
      },
      {
        day: 14,
        title: "Digital Lead Generation & AMC Strategy",
        topics: [
          "Digital lead generation techniques",
          "Annual Maintenance Contract (AMC) strategy",
          "Client relationship management"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Final Assessment & Certificate",
    days: "Day 15",
    description: "Practical examination, defense, and certificate distribution.",
    dayItems: [
      {
        day: 15,
        title: "Practical Exam & Certificate Distribution",
        topics: [
          "Practical examination",
          "BOQ defense presentation",
          "Marketing & business defense",
          "Feedback session",
          "Certificate distribution ceremony"
        ]
      }
    ]
  }
];

export const learningCategories: LearningCategory[] = [
  {
    title: "Technical Skills",
    icon: "Wrench",
    items: [
      "VRF piping diagram preparation",
      "Nitrogen purging",
      "High-pressure brazing",
      "Copper pipe flaring",
      "Triple vacuumization"
    ]
  },
  {
    title: "Control Systems",
    icon: "Cpu",
    items: [
      "Central controller programming",
      "Modbus integration",
      "BACnet BMS integration",
      "Indoor / outdoor unit addressing"
    ]
  },
  {
    title: "Commissioning & Diagnostics",
    icon: "Search",
    items: [
      "Additional refrigerant calculation",
      "System test run",
      "Error-code reading",
      "Inverter PCB troubleshooting",
      "Diagnostic software operation"
    ]
  },
  {
    title: "Business & Sales",
    icon: "TrendingUp",
    items: [
      "HVAC dealership models",
      "B2B / B2C sales strategies",
      "Client relationship management",
      "Service team management",
      "Warranty management",
      "BOQ & project costing",
      "AMC strategy",
      "Digital lead generation"
    ]
  }
];

export const eligibilityItems: EligibilityItem[] = [
  { title: "Mechanical / Electrical Engineers", description: "Engineering professionals looking to specialize in HVAC systems", icon: "GraduationCap" },
  { title: "Diploma Technicians", description: "Technical diploma holders seeking advanced HVAC skills", icon: "Award" },
  { title: "Site Supervisors", description: "Supervisors managing HVAC installation and commissioning projects", icon: "ClipboardList" },
  { title: "HVAC / Refrigerator Sales Executives", description: "Sales professionals wanting deeper product knowledge", icon: "Users" },
  { title: "Customer Support Managers", description: "Support managers looking to improve after-sales service", icon: "HeadphonesIcon" },
  { title: "New Business Owners / Entrepreneurs", description: "Entrepreneurs exploring HVAC business opportunities", icon: "Building" }
];

export const faqItems: FAQItem[] = [
  {
    question: "Who can participate in this course?",
    answer: "The course is designed for Mechanical/Electrical Engineers, Diploma Technicians, Site Supervisors, HVAC/Refrigerator Sales Executives, Customer Support Managers, and New Business Owners/Entrepreneurs."
  },
  {
    question: "How long is the course?",
    answer: "The course runs for 15 days with a total of 45 hours of training."
  },
  {
    question: "How many seats are available per batch?",
    answer: "Each batch has a maximum of 40 participants to ensure quality hands-on training."
  },
  {
    question: "Where is the training held?",
    answer: "The training is held at the Mechatronics Engineering Advanced HVAC Lab, Daffodil Smart City, Ashulia, Dhaka."
  },
  {
    question: "What topics are covered in the course?",
    answer: "The course covers VRF engineering, installation, commissioning, diagnostics, troubleshooting, HVAC & refrigerator business, marketing, sales, BOQ/project costing, and service management."
  },
  {
    question: "Is the training practical or theoretical?",
    answer: "The course emphasizes practical, hands-on training with industrial equipment including ODU/IDU units, copper piping, brazing, diagnostic software, and more."
  },
  {
    question: "What certification is provided?",
    answer: "Students who successfully complete the practical exam and presentation receive a joint official course completion certificate from Daffodil International University, Skill Jobs, Greenary Institute of Science and Technology, and Zero HVAC (China)."
  },
  {
    question: "Does the course include business and sales training?",
    answer: "Yes, the course includes comprehensive business training covering dealership models, B2B/B2C sales, marketing, digital lead generation, and AMC strategy."
  },
  {
    question: "Is BOQ/project costing included?",
    answer: "Yes, students learn BOQ preparation, project estimation, quotation development, and real-world project costing as part of the curriculum."
  }
];

export const boqData: BOQRow[] = [
  { item: "VRF Outdoor Unit (ODU)", details: "As per project specification", quantity: "1", unit: "Set", rate: "5,50,000", amount: "5,50,000" },
  { item: "VRF Indoor Units (IDU)", details: "Various capacities as per design", quantity: "8", unit: "Set", rate: "65,000", amount: "5,20,000" },
  { item: "Copper Piping & Fittings", details: "Including insulation", quantity: "200", unit: "Rft", rate: "3,200", amount: "3,20,000" },
  { item: "Y-Joint / Refnet", details: "Branch selectors", quantity: "6", unit: "Pcs", rate: "15,000", amount: "90,000" },
  { item: "Drain Piping", details: "Condensate drain system", quantity: "1", unit: "Set", rate: "45,000", amount: "45,000" },
  { item: "Electrical / Communication Wiring", details: "Power & BMS wiring", quantity: "1", unit: "Set", rate: "1,20,000", amount: "1,20,000" },
  { item: "Testing & Commissioning", details: "Pressure test, vacuum, gas charge", quantity: "1", unit: "Set", rate: "80,000", amount: "80,000" },
  { item: "Labour & Installation", details: "Skilled technicians", quantity: "1", unit: "Set", rate: "1,50,000", amount: "1,50,000" },
  { item: "Refrigerant (R-410A)", details: "As per system requirement", quantity: "1", unit: "Set", rate: "56,600", amount: "56,600" },
  { item: "Miscellaneous & Contingency", details: "Additional materials & buffer", quantity: "1", unit: "Set", rate: "10,000", amount: "10,000" },
];

export const day13Schedule = [
  {
    time: "09:00 – 11:00",
    title: "Business Model & Supply Chain",
    topics: [
      "Import process",
      "Showroom setup",
      "Dealership & sub-dealership models",
      "B2B supply chain",
      "China / Zero HVAC sourcing",
      "Customs clearance",
      "LC process",
      "Stock & inventory management"
    ]
  },
  {
    time: "11:15 – 01:00",
    title: "Customer Support & After-Sales Service Management",
    topics: [
      "Service center operations",
      "Technician team management",
      "Hotline & ticket system",
      "Spare parts management",
      "Warranty & guarantee handling"
    ]
  },
  {
    time: "02:00 – 05:00",
    title: "Sales Network & Commercial Support Strategy",
    topics: [
      "Retail sales strategies",
      "Corporate B2B acquisition",
      "AMC (Annual Maintenance Contract)",
      "Client complaint handling",
      "Commercial support framework"
    ]
  }
];

export const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Learning Outcomes", href: "#learning" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Certification", href: "#certification" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Venue", href: "#venue" },
  { label: "Register", href: "#register" },
];

export const organizers = [
  { name: "Department of Mechatronics Engineering", sub: "Daffodil International University" },
  { name: "Skill Jobs", sub: "Co-Organizer" },
  { name: "Greenary Institute of Science and Technology", sub: "Co-Organizer" },
];

export const technicalPartner = { name: "Zero HVAC", sub: "Technical & Global Partner — China" };
