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