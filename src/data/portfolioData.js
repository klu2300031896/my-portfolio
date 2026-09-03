export const portfolioData = {
  personalInfo: {
    firstName: "Rudru",
    lastName: "Venkatesh",
    fullName: "Rudru Venkatesh",
    title: "Computer Science Engineering Student & Full-Stack Developer",
    email: "2300031896cse2@gmail.com",
    phone: "+91 9989120851",
    location: "India",
    github: "https://github.com/klu2300031896",
    linkedin: "https://www.linkedin.com/in/rudru-venkatesh-3b400b2a4",
    aboutMe: [
      "I am a Computer Science and Engineering student who builds practical software applications with Java, Python, and modern web technologies.",
      "My work spans responsive web applications, backend APIs, cloud deployment, and AI/ML projects that solve focused, real-world problems.",
      "I am actively developing my skills in full-stack development, AI/ML, and thoughtful user-focused engineering."
    ],
    quickInfo: [
      { label: "Degree", value: "B.Tech – CSE" },
      { label: "Graduation", value: "2027" },
      { label: "University", value: "KL University" },
      { label: "Languages", value: "Java, Python, JavaScript" },
      { label: "Focus", value: "Full-Stack & AI/ML" }
    ]
  },
  
  skills: [
    {
      category: "Programming",
      items: ["Java", "Python", "JavaScript"]
    },
    {
      category: "Frontend Development",
      items: ["HTML", "CSS", "React.js"]
    },
    {
      category: "Backend",
      items: ["Spring Boot", "Django", "REST APIs"]
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB", "Firebase"]
    },
    {
      category: "Cloud & Deployment",
      items: ["AWS", "Docker", "CI/CD", "Vercel"]
    },
    {
      category: "Tools & AI/ML",
      items: ["Git", "GitHub", "VS Code", "NLP", "Generative AI", "Prompt Engineering", "Sentence Transformers", "Machine Learning"]
    }
  ],

  projects: [
    {
      id: "citizen-chatbot",
      title: "Multilingual Citizen Service Chatbot",
      description: "A multilingual document-based chatbot that lets users upload a PDF and ask questions about its contents in different languages.",
      categories: ["Machine Learning", "AI / NLP"],
      tags: ["Python", "Streamlit", "PyPDF2", "Sentence Transformers", "NLP", "Machine Learning"],
      features: [
        "PDF upload and text extraction",
        "Semantic search with Sentence Transformers",
        "Question answering from document context",
        "Multilingual responses"
      ],
      demoLink: "https://gen-ai-crt-p2.streamlit.app/",
      githubLink: null
    },
    {
      id: "carhub-checker",
      title: "DJ CarHub Availability Checker",
      description: "A web application for checking vehicle availability and displaying vehicle information dynamically.",
      categories: ["Web Development", "Cloud"],
      tags: ["JavaScript", "Firebase", "Vercel", "Cloud Storage"],
      features: [
        "Dynamic vehicle availability checks",
        "Firebase-backed vehicle information",
        "Cloud storage for vehicle assets",
        "Vercel deployment"
      ],
      demoLink: "https://dj-carhub.vercel.app/",
      image: "/assets/dj-carhub-availability-checker.svg",
      githubLink: null
    },
    {
      id: "carhub-portfolio",
      title: "DJ CarHub Portfolio & Showcase",
      description: "A modern vehicle and service showcase website designed to present DJ CarHub's vehicles and services through a clean, responsive interface.",
      categories: ["Web Development", "Cloud"],
      tags: ["HTML", "CSS", "JavaScript", "Firebase", "Vercel", "UI Design"],
      features: [
        "Responsive vehicle and service showcase",
        "Cloud-hosted image gallery",
        "Firebase-backed contact experience",
        "Mobile-first design"
      ],
      demoLink: "https://dj-carhub-6cjw.vercel.app/",
      image: "/assets/dj-carhub-portfolio.png",
      githubLink: null
    }
  ],

  education: {
    degree: "B.Tech in Computer Science Engineering",
    school: "Koneru Lakshmaiah Education Foundation (KL University)",
    duration: "2023 – 2027",
    cgpa: "8 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java)",
      "Database Management Systems (MySQL)",
      "Web Technologies (HTML, CSS, React)",
      "Machine Learning Fundamentals",
      "Software Engineering Principles"
    ]
  },

  schoolEducation: [
    { qualification: "SSC", school: "Nirmala E.M High School", result: "79%", detail: "10th / SSC" },
    { qualification: "Intermediate", school: "V.J. (Vijaya Jyothi) Junior College", result: "68%", detail: "Board of Intermediate Education, Andhra Pradesh" },
    { qualification: "B.Tech - Computer Science and Engineering", school: "Koneru Lakshmaiah Education Foundation (KL University)", result: "2027", detail: "Expected Graduation" }
  ],

  educationTimeline: [
    {
      title: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Koneru Lakshmaiah Education Foundation (KL University)",
      board: null,
      period: "2023 — 2027",
      score: "CGPA: 8 / 10",
      type: "college",
      theme: "blue"
    },
    {
      title: "Intermediate (MPC)",
      institution: "V.J. (Vijaya Jyothi) Junior College",
      board: "Board of Intermediate Education, Andhra Pradesh",
      period: "2021 — 2023",
      score: "Percentage: 68%",
      type: "intermediate",
      theme: "purple"
    },
    {
      title: "10th Grade",
      institution: "Nirmala E.M High School",
      board: "10th / SSC",
      period: "2021",
      score: "Percentage: 79%",
      type: "school",
      theme: "green"
    }
  ],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "May 5, 2026",
      category: "Cloud Architecture",
      theme: "aws",
      badge: "Verified Credential",
      status: "Verified & Active",
      skills: ["Cloud Architecture", "AWS Core Services", "Security & IAM"],
      link: "https://www.credly.com/earner/earned/badge/9e2d574c-f6bd-4c0f-9a56-ce30ec8e1f9b5"
    },
    {
      title: "Certified Advanced Automation Professional",
      issuer: "Automation Anywhere",
      date: "April 6, 2026",
      category: "Intelligent Automation",
      theme: "automation",
      badge: "Verified Credential",
      status: "Verified & Active",
      skills: ["RPA Bot Design", "Enterprise Automation", "Process Workflows"],
      link: "https://certificates.automationanywhere.com/5275de39-945e-4044-b846-aeb82637100a#acc.y1hFsIaN"
    },
    {
      title: "Certified Implementation Specialist – Data Foundations (CMDB and CSDM)",
      issuer: "ServiceNow",
      date: "Aug 30, 2026",
      category: "Enterprise ITOM",
      theme: "servicenow",
      badge: "Verified Credential",
      status: "Verified & Active",
      skills: ["CMDB Architecture", "CSDM Data Model", "CI Management"],
      link: "https://www.credly.com/earner/earned/badge/ac0112c0-c6a0-4c13-9455-e3e524ff156d"
    }
  ]
};
