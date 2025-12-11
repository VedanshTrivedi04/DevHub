
        
import { NavigationLinkModel } from "./SharedNavigation";

export interface TechStackModel {
  name: string;
  iconName: string;
  description: string;
}

export interface MissionGoalModel {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface BylawClauseModel {
  id: string;
  content: string;
}

export interface BylawArticleModel {
  articleName: string;
  clauses: BylawClauseModel[];
}


export const CLUB_GENERAL_INFO = {
  name: "DEVHUB",
  tagline: "Coding Club PIEMR",
  fullDescription: "Founded on August 17, 2025, Devhub - Coding Club PIEMR is a dynamic community committed to fostering excellence in web development among its members. Through collaborative learning, hands-on workshops, expert talks, and hackathons, we equip individuals with the knowledge and skills needed to build innovative web applications and thrive in a technology-driven world. By promoting collaboration, creativity, and ethical development practices, we empower students to become confident contributors in the digital ecosystem.",
  foundingDate: "August 17, 2025",
  logoUrl: "/logo.svg",
  heroImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/e5056109-1102-4ec8-ac09-4f8def71fafc.png",
  websiteLinkPlaceholder: "(website coming soon)",
};

export const CLUB_MISSION: MissionGoalModel[] = [
  {
    id: 1,
    title: "Web Development Excellence",
    description: "To empower our members to excel in Web Development by fostering a dynamic community of learning, collaboration, and innovation.",
    iconName: "Zap",
  },
  {
    id: 2,
    title: "Technical Skill Mastery",
    description: "To equip members with essential skills in HTML, CSS, JavaScript, React.js, Next.js, Django, FastAPI, MongoDB, Express.js, Git, and GitHub.",
    iconName: "Code",
  },
  {
    id: 3,
    title: "Creativity & Ethics",
    description: "To foster a culture of creative problem-solving and ethical development, ensuring our members build applications with positive impact on society.",
    iconName: "Handshake",
  },
  {
    id: 4,
    title: "Collaborative Projects",
    description: "To organize Events, Hackathons, and Expert Talks, and facilitate collaborative Projects where students work together to create impactful solutions.",
    iconName: "Users",
  },
];

export const MISSION_VISION_IMAGES = {
    missionVisual: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/37cf5507-7bb8-42fc-a03f-eb3a60064cc7.png",
    visionVisual: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/f7a90e45-19ae-41ab-b33d-1dac6134c498.png"
}

export const CLUB_VISION = "To be an active and leading group for education, collaboration, and web development innovation, fostering a dynamic community of technology enthusiasts passionate about building modern applications. Devhub aims to empower students by providing hands-on experience through workshops, hackathons, expert sessions, and collaborative projects, while promoting teamwork, creativity, and ethical coding practices. We strive to shape future-ready developers who contribute positively to society and inspire others in the technology ecosystem.";


export const CORE_TECHNOLOGIES_GROUPS = [
    {
        title: "Frontend Development",
        description: "Focus on interactive user interfaces using modern frameworks.",
        techs: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
        iconName: "Code",
        imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/0a6cf4f0-8d6f-4b0e-8499-3d5759944de4.png",
    },
    {
        title: "Backend & Frameworks",
        description: "Building robust and scalable server-side logic.",
        techs: ["Django", "FastAPI", "Express.js"],
        iconName: "Server",
        imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/0a118ef9-a938-4b5f-9e83-7efc1b1fc986.png",
    },
    {
        title: "Database & Tooling",
        description: "Data management and collaboration through essential development tools.",
        techs: ["MongoDB", "Git", "GitHub"],
        iconName: "Database",
        imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/11/80357195-b002-40fc-ae8c-ab4aa8556061.png",
    },
];

export const CLUB_BYLAWS: BylawArticleModel[] = [
  {
    articleName: "Article I: Name and Purpose",
    clauses: [
      { id: "1. Name:", content: 'The organization is named "Devhub."' },
      { id: "2. Purpose:", content: "Devhub promotes excellence in web development, collaboration, and innovation through interactive events, projects, and community building." },
    ],
  },
  {
    articleName: "Article II: Membership",
    clauses: [
      { id: "1. Eligibility:", content: "Membership is open to all PIEMR students interested in web development." },
      { id: "2. Rights and Responsibilities:", content: "Members can attend events, contribute to projects, and must uphold values such as respect, collaboration, and ethics." },
    ],
  },
  {
    articleName: "Article III: Governance and Leadership",
    clauses: [
      { id: "1. Executive Committee:", content: "Includes roles such as President, Vice President, Treasurer, Event Coordinator, and Technical Lead, each with defined responsibilities." },
    ],
  },
  {
    articleName: "Article IV: Meetings and Events",
    clauses: [
      { id: "1. Meetings:", content: "Regular meetings are held at least bi-weekly during the semester." },
      { id: "2. Events:", content: "Activities include workshops, hackathons, expert talks, and collaborative projects to enhance learning and teamwork." },
      { id: "3. Event Participation:", content: "Members are encouraged to actively participate in organizing and attending events." },
    ],
  },
  {
    articleName: "Article V: Code of Conduct",
    clauses: [
      { id: "1. Respect and Collaboration:", content: "Members must maintain respect and foster teamwork within the club." },
      { id: "2. Ethical Behavior:", content: "Members must comply with ethical practices and avoid plagiarism." },
      { id: "3. Commitment:", content: "Members are expected to actively participate in meetings, events, and projects." },
      { id: "4. Disciplinary Action:", content: "Violations of the code of conduct may result in warnings, suspension, or expulsion based on severity." },
    ],
  },
  {
    articleName: "Article VI: Financial Management",
    clauses: [
      { id: "1. Funding:", content: "Funds can be collected through membership fees, donations, or sponsorships to organize events." },
      { id: "2. Budget:", content: "The Treasurer prepares an annual budget and ensures approval for expenditures." },
      { id: "3. Financial Reporting:", content: "The Treasurer presents an end-of-semester financial report detailing income and expenses." },
    ],
  },
  {
    articleName: "Article VII: Amendments",
    clauses: [
      { id: "1. Amendment Process:", content: "Members can propose amendments, which require a two-thirds majority vote to be approved." },
      { id: "2. Notice:", content: "Proposed amendments must be shared with members at least one week before voting." },
    ],
  },
  {
    articleName: "Article VIII: Dissolution",
    clauses: [
      { id: "1. Dissolution:", content: "Upon dissolution, all debts must be settled, and remaining funds are donated to a technology education charity." },
    ],
  },
];
        
      