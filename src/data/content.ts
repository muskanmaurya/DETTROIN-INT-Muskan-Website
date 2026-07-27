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
    tag: "CAMPUS EXPANSION",
    title: "Announcing Vasant Valley School, Gurgaon",
    summary:
      "Expanding our 36-year legacy of educational excellence. The new Gurgaon campus will uphold our core ethos, high standards, and commitment to holistic child-centred development.",
    actionText: "LEARN MORE",
    href: "#gurgaon",
  },
  {
    id: 2,
    tag: "ACADEMIC DISCLOSURE",
    title: "Class 12 CBSE Marksheets Available",
    summary:
      "Class XII All India Senior School Certificate Examination marksheets are ready for collection at the Senior School Office on working days between 10:00 AM and 3:00 PM.",
    actionText: "VIEW OFFICE TIMINGS",
    href: "#academics",
  },
  {
    id: 3,
    tag: "EXCELLENCE IN EDUCATION",
    title: "Vasant Valley Centre for Excellence",
    summary:
      "A dedicated initiative drawing on 36 years of experience to nurture professional learning communities, mentor educators, and align academic practices with child-centred values.",
    actionText: "EXPLORE CENTRE",
    href: "#centre",
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

