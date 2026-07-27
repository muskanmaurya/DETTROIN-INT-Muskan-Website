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