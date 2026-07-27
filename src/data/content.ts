import { BsYoutube } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
  featured?: string;
}

export const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "#about",
    featured: "36+ Years of Excellence in Education",
    subItems: [
      { label: "Vision & Philosophy", href: "#vision" },
      { label: "School Profile", href: "#profile" },
      { label: "A Day in School", href: "#day-in-school" },
      { label: "Vasant Valley Centre for Excellence", href: "#centre-of-excellence" },
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    featured: "Child-Centred & Process-Focused Learning",
    subItems: [
      { label: "The Learning Experience", href: "#learning-experience" },
      { label: "International Curriculum", href: "#international-curriculum" },
      { label: "Special Education Needs", href: "#special-needs" },
      { label: "College Placements", href: "#placements" },
    ],
  },
  {
    label: "Programmes",
    href: "#programmes",
    subItems: [
      { label: "Intra-School Programmes", href: "#intra-school" },
      { label: "Inter-School Programmes", href: "#inter-school" },
    ],
  },
  {
    label: "Campus",
    href: "#campus",
    subItems: [
      { label: "Infrastructure", href: "#infrastructure" },
      { label: "Gurgaon Campus", href: "#gurgaon-campus" },
    ],
  },
  {
    label: "Community",
    href: "#community",
    subItems: [
      { label: "Announcements", href: "#announcements" },
      { label: "News & Events", href: "#news-events" },
      { label: "Alumni Connect", href: "#alumni" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    label: "Admissions & FAQs",
    href: "#admissions",
    subItems: [
      { label: "Admissions Process", href: "#admissions" },
      { label: "FAQs", href: "#faqs" },
    ],
  },
];


export interface PillarItem {
  id: string;
  tag: string;
  motto: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  bgColor: string; // Dynamic column backgrounds
  image: string;   // High-res cutout / photography
}

export const pillarsData: PillarItem[] = [
  {
    id: "vision",
    tag: "VISION",
    motto: "Excellence in Deed",
    title: "Philosophy & Motto",
    description:
      "The School's motto sets the standard for Vasant Valley School. Individualized attention for each student, a 'process-focused' learning framework, equity of all stakeholders and commitment to society are the pillars of the School's philosophy. We believe that education is an enjoyable and interactive process.",
    linkText: "EXPLORE VISION",
    href: "#vision",
    bgColor: "bg-[#FAFAF8]", // Cream canvas
    image: "/assets/HeroImages/image1.png",
  },
  {
    id: "day-in-school",
    tag: "A DAY IN SCHOOL",
    motto: "Education is preparation for life.",
    title: "Life at Vasant Valley",
    description:
      "The school day comprises academic and nonacademic Learning Experiences and is planned with special focus on the developmental needs of our students. The entire Campus is a 'Classroom' and learning is continuous.",
    linkText: "A DAY IN SCHOOL",
    href: "#day-in-school",
    bgColor: "bg-[#800020]", // Brand Maroon
    image: "/assets/HeroImages/image2.png",
  },
  {
    id: "learning-experience",
    tag: "LEARNING EXPERIENCE",
    motto: "Learning with Understanding",
    title: "Academic Approach",
    description:
      "While high academic achievement is a priority, the school aims to create a community of well-rounded individuals, who are compassionate and confident. This fosters a spirit of cooperation and mutual respect among the students and teachers.",
    linkText: "LEARNING EXPERIENCE",
    href: "#learning-experience",
    bgColor: "bg-[#FAFAF8]", // Deep Slate
    image: "/assets/HeroImages/image3.png",
  },
];

export interface AnnouncementItem {
  id: number;
  tag: string;
  title: string;
  summary: string;
  actionText?: string;
  href?: string;
}

export const announcementsData: AnnouncementItem[] = [
  {
    id: 1,
    tag: "ANNOUNCEMENTS",
    title: "Vasant Valley Centre for Excellence in Education",
    summary:
      "We are pleased to introduce the Vasant Valley Centre for Excellence in Education. This initiative is rooted in our school's long-standing commitment to excellence in teaching and learning. Our work at the Centre draws on thirty-six years of experience in nurturing professional learning communities, mentoring educators, and aligning academic practices with child-centred values that define Vasant Valley School.",
    actionText: "READ MORE",
    href: "#centre-of-excellence",
  },
  {
    id: 2,
    tag: "ANNOUNCEMENTS",
    title: "Announcing Vasant Valley School, Gurgaon",
    summary:
      "We are very happy to announce that Vasant Valley School, founded and run by Education Today for over 36 years, is expanding. The first of the new Vasant Valley Schools will open in Gurgaon and will be led by a team of experienced educators. The ethos, standards, and commitment to holistic development that define the founding campus will remain at the heart of every new campus.",
    actionText: "EXPLORE GURGAON CAMPUS",
    href: "#gurgaon-campus",
  },
  {
    id: 3,
    tag: "ANNOUNCEMENTS",
    title: "Class 12 CBSE Marksheet",
    summary:
      "CBSE Marksheets of the All India Senior School Certificate Examination for Class XII are available and can be collected from the Senior School Office on any working day between 10:00 a.m to 3:00 p.m. from Wednesday, 3rd June,2026 onwards.",
    actionText: "VIEW OFFICE TIMINGS",
    href: "#office-timings",
  },
];

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerData = {
  brand: {
    name: "Vasant Valley School",
    tagline: "Excellence in Deed",
    description:
      "Nurturing independent minds, ethical values, and original thinking in a process-focused, child-centred educational environment.",
    address: "Sector C, Vasant Kunj, New Delhi 110070",
    phone: "+91 11 41767940",
    email: "info@vasantvalley.edu.in",
  },
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#" },
        { label: "Vision & Philosophy", href: "#vision" },
        { label: "The Learning Experience", href: "#learning" },
        { label: "International Curriculum", href: "#curriculum" },
        { label: "Infrastructure", href: "#infrastructure" },
      ],
    },
    {
      title: "Academics & Life",
      links: [
        { label: "Special Education Needs", href: "#special-needs" },
        { label: "Intra-School Programmes", href: "#intra-school" },
        { label: "Inter-School Programmes", href: "#inter-school" },
        { label: "A Day in School", href: "#a-day-in-school" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Admissions", href: "#admissions" },
        { label: "Announcements", href: "#announcements" },
        { label: "News & Events", href: "#news" },
      ],
    },
    {
      title: "Portals & Legal",
      links: [
        { label: "Login", href: "#login" },
        { label: "FAQs", href: "#faqs" },
        { label: "Statutory Compliances", href: "#statutory" },
        { label: "Privacy Policy", href: "#privacy" },
      ],
    },
  ] as FooterColumn[],
  socials: [
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "LinkedIn", href: "#", icon: "LinkedIn" },
    { name: "YouTube", href: "#", icon: "YouTube" },
  ],
};

export interface SocialGalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  likes?: string;
  aspect: "aspect-[3/4]" | "aspect-square" | "aspect-[4/5]";
}

export const socialGalleryData: SocialGalleryItem[] = [
  {
    id: "gal-1",
    src: "/assets/HeroImages/image5.jpeg",
    alt: "Vasant Valley Campus Sports Day",
    caption: "Inter-House Athletics 🏆",
    likes: "248",
    aspect: "aspect-[3/4]",
  },
  {
    id: "gal-2",
    src: "/assets/HeroImages/image6.jpeg",
    alt: "Classroom Learning",
    caption: "Robotics & Innovation Lab 🤖",
    likes: "192",
    aspect: "aspect-square",
  },
  {
    id: "gal-3",
    src: "/assets/HeroImages/image7.jpeg",
    alt: "Students in Corridor",
    caption: "Morning Campus Vibes ✨",
    likes: "310",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-4",
    src: "/assets/HeroImages/image8.jpeg",
    alt: "Annual Day Music Performance",
    caption: "Synapse Cultural Fest 🎭",
    likes: "412",
    aspect: "aspect-[3/4]",
  },
  {
    id: "gal-5",
    src: "/assets/HeroImages/image9.jpeg",
    alt: "Art & Sculpture Workshop",
    caption: "Excellence in Creative Arts 🎨",
    likes: "185",
    aspect: "aspect-square",
  },
  {
    id: "gal-6",
    src: "/assets/HeroImages/image10.jpeg",
    alt: "Library & Reading Hub",
    caption: "Knowledge in Focus 📚",
    likes: "275",
    aspect: "aspect-[4/5]",
  },
  {
    id: "gal-6",
    src: "/assets/HeroImages/image11.jpeg",
    alt: "Library & Reading Hub",
    caption: "Knowledge in Focus 📚",
    likes: "275",
    aspect: "aspect-[4/5]",
  }
];


export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
}

export const aboutData = {
  tag: "ABOUT US",
  heading: "Nurturing Independent Minds Since 1990",
  mainQuote:
    "Run by the Education Today Trust, Vasant Valley School is the realisation of Mr. Aroon Purie and Mrs. Rekha Purie's vision of the ideal school experience for children.",
  brief:
    "Vasant Valley School was established in 1990 as an initiative of the Education Today Trust, beginning its journey with around 200 students and 16 teachers in July 1990. It is a self-financing inclusive day school spread over eight acres of land in Vasant Kunj, New Delhi.",
  visionPhilosophy:
    "Mr. and Mrs. Purie envisioned a learning experience in which the Arts and Sports are as important as academic learning, creating a paradigm where being a good citizen is as important as being a good student—encouraging every child to actualise their innate and unique potential.",
  ctaText: "ABOUT US",
  ctaHref: "#about-full",
  leadership: [
    {
      name: "Mrs. Rekha Purie",
      role: "Chairperson, Vasant Valley School",
      image: "/assets/Teachers/Rekha-Purie-1.jpg",
    },
    {
      name: "Mr. Aroon Purie",
      role: "Founder, Education Today Trust",
      image: "/assets/Teachers/Aroon-Purie-2.jpg",
    },
  ] as LeadershipMember[],
};

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

export const timelineEventsData: TimelineEvent[] = [
  {
    id: "event-1",
    date: "22 July 2026 – 23 July 2026",
    title: "Synapse 2026",
    category: "CULTURAL FEST",
    description:
      "The 15th edition of Synapse showcased student innovation, scientific inquiry, and creative expression across inter-school academic competitions.",
    image: "/assets/HeroImages/image9.jpeg",
    href: "#synapse-2026",
  },
  {
    id: "event-2",
    date: "17 July 2026",
    title: "The 23rd Edition of Laissez Faire",
    category: "BUSINESS & ENTREPRENEURSHIP",
    description:
      "Students demonstrated exceptional leadership, financial acumen, and entrepreneurial pitch presentations in this prestigious annual forum.",
    image: "/assets/HeroImages/image5.jpeg",
    href: "#laissez-faire",
  },
  {
    id: "event-3",
    date: "13 July 2026 – 15 July 2026",
    title: "Inter-School Tennis Zonal Tournament",
    category: "SPORTS & ATHLETICS",
    description:
      "Vasant Valley School's athletic teams achieved podium finishes with outstanding sportsmanship and individual singles victories.",
    image: "/assets/HeroImages/image12.jpeg",
    href: "#tennis-zonals",
  },
];


export interface InfraImage {
  src: string;
  alt: string;
  label: string;
}

export const infrastructureData = {
  tag: "CAMPUS ARCHITECTURE",
  heading: "Built for Inspiration & Open Learning",
  highlightQuote:
    "The red and beige sandstone building was designed and built keeping in mind the ideal environment for children, the philosophy of the school and evolving paradigms.",
  paragraph1:
    "The School is divided into two wings, with an open amphitheatre connecting them. This eight acre campus has a built-up area of four acres, while the rest of the space comprises a lush, green cover.",
  paragraph2:
    "The campus has sports fields, gardens, play areas and courtyards, with over 400 species of trees and plants. Surrounded by Vasant Kunj, the entire campus is challenge compliant with dedicated spaces for every activity.",
  ctaText: "EXPLORE INFRASTRUCTURE",
  ctaHref: "#infrastructure",
  galleryCtaText: "VIEW PHOTO GALLERY",
  galleryCtaHref: "#photo-gallery",
  stackedImages: [
    {
      src: "/assets/infrastructure/infra2.jpg",
      alt: "Vasant Valley Main Entrance Gate",
      label: "Main Campus Facade",
    },
    {
      src: "/assets/infrastructure/infra1.jpg",
      alt: "Vasant Valley Sports Field and Sandstone Wings",
      label: "Green Cover & Sports Fields",
    },
    {
      src: "/assets/infrastructure/infra3.png",
      alt: "Inner Courtyard and Student Banners",
      label: "Inner Courtyards & Amphitheatre",
    },
  ] as InfraImage[],
};


export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is the admission procedure for the upcoming academic session?",
    answer:
      "Admissions open annually based on available vacancies. Parents can register online via our portal or collect forms directly from the school admissions office. Selected candidates are invited for an interaction session.",
  },
  {
    question: "What are the school operating hours and office timings?",
    answer:
      "The main school operates from 8:00 AM to 2:30 PM, Monday through Friday. The administrative and senior school offices remain open for inquiries on working days from 9:00 AM to 3:30 PM.",
  },
  {
    question: "How does Vasant Valley support Special Education Needs (SEN)?",
    answer:
      "We believe in inclusive education. Our dedicated Learning Support Department provides tailored individual education plans (IEPs), specialized counseling, and continuous mentoring for students with diverse learning needs.",
  },
  {
    question: "What sports and co-curricular facilities are available on campus?",
    answer:
      "Spanning eight acres, our campus features international-standard tennis courts, basketball courts, athletics fields, indoor gymnastics centers, and dedicated performing arts and robotics studios.",
  },
  {
    question: "Does the school provide transport facilities?",
    answer:
      "Yes, Vasant Valley operates a fleet of air-conditioned, GPS-tracked buses covering major routes across South Delhi, Gurgaon, and neighboring NCR regions, accompanied by trained staff.",
  },
];