export type Project = {
  title: string
  blurb: string
  tags: string[]
  href?: string
}

export const projects: Project[] = [
  { title: 'TradeTrack', blurb: 'Stocks, news, and earnings dashboard; Spring Boot + React with real‑time data.', tags: ['React', 'Spring Boot', 'Finnhub'], href: '#' },
  { title: 'BlackScholes.ai', blurb: 'AI‑assisted actuarial tooling and graphing for pricing & risk.', tags: ['Next.js', 'Python', 'LLM'], href: '#' },
  { title: 'Sonora Threads', blurb: 'Voice‑first shopping assistant (Next.js, Stripe, ElevenLabs).', tags: ['Next.js', 'Stripe', 'AI'], href: '#' }
]

export const experience = [
  { 
    org: 'Broadridge Financial Solutions', 
    role: 'Software Engineering Intern', 
    period: 'Jun 2025 – Aug 2025',
    location: 'New York, New York',
    points: [
      'Directed a team of 9 interns to develop an AI-driven compliance dashboard supporting document upload, task tracking, and collaboration for internal audit workflows.',
      'Built and integrated a chatbot leveraging EU AI Act standards to automate compliance checks, improving review speed and consistency across client documentation.',
      'Engineered a Java automation script that scanned and validated over 10,000 client documents, identifying missing data and print process errors to eliminate 3+ days of manual QA work per release cycle.',
      'Automated regression testing with Selenium and Cucumber to verify accuracy of client-facing print statements, boosting reliability and reducing release defects by 25%.'
    ]
  },
  { 
    org: 'Stony Brook University', 
    role: 'Security Research Assistant', 
    period: 'Jan 2025 – May 2025',
    location: 'Stony Brook, NY',
    points: [
      'Researched Regular Expression Denial of Service (ReDoS) vulnerabilities in Snort, analyzing over 1,000 regex patterns across community and registered rule sets to identify inefficient or vulnerable expressions.',
      'Developed a Python script to parse and batch-process Snort rule files through a Java-based ReDoS evaluation tool built by a graduate researcher, improving testing efficiency by approximately 70%.',
      'Created a testing environment by compiling Snort from source, enabling reproducible experiments and transferring the setup to a PhD researcher for extended evaluation.'
    ]
  },
  { 
    org: 'Deck & Fence Contracting', 
    role: 'Website Developer', 
    period: 'Aug 2023 – Aug 2025',
    location: 'New York, NY',
    points: [
      'Developed and maintained a responsive website using JavaScript, HTML, and CSS, increasing user engagement by 30% through an improved user interface and experience.',
      'Boosted client inquiries by 20% through innovative features, maintaining an average of 50 visitors per month.',
      'Leveraged AWS for hosting and domain management, improving loading speed by 25% and achieving 100% cross-platform compatibility across desktop, tablet, and mobile devices.'
    ]
  }
]
