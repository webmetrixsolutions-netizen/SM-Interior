export const siteConfig = {
  name: 'S.M Kitchen Interior',
  tagline: 'Your Vision, Our Dream',
  since: '2009',
  director: 'Mr. Bijender Barawal',
  phone: '+91 8368994273',
  phoneRaw: '918368994273',
  email: 'bittubarawal0@gmail.com',
  address: {
    line1: 'Farmana, Sonipat',
    line2: 'Haryana - 131408, India',
    full: 'Farmana, Sonipat, Haryana - 131408, India',
  },
  mapsQuery: 'Farmana, Sonipat, Haryana 131408',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const services: ServiceItem[] = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    description:
      'Stylish, functional and customized modular kitchens designed around your space, lifestyle and storage requirements.',
    image:
      'https://images.pexels.com/photos/7148841/pexels-photo-7148841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Premium modular kitchen design in Sonipat with modern cabinets and elegant finishes',
  },
  {
    id: 'modular-wardrobe',
    title: 'Modular Wardrobe',
    description:
      'Elegant and practical wardrobes with smart storage solutions and modern finishes.',
    image:
      'https://images.pexels.com/photos/30465909/pexels-photo-30465909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern modular wardrobe with glass doors in Sonipat by SM Kitchen Interior',
  },
  {
    id: 'lcd-tv-panel',
    title: 'LCD / TV Panel',
    description:
      'Contemporary TV and LCD panel designs that create a sophisticated focal point for your living space.',
    image:
      'https://images.pexels.com/photos/6585766/pexels-photo-6585766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern LCD TV panel wall design in Sonipat with wooden accents',
  },
  {
    id: 'modular-bed',
    title: 'Modular Bed',
    description:
      'Modern modular bed designs combining comfort, functionality and elegant aesthetics.',
    image:
      'https://images.pexels.com/photos/7546276/pexels-photo-7546276.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant modular bed design with premium headboard by SM Kitchen Interior',
  },
  {
    id: 'flush-door',
    title: 'Flush Door',
    description:
      'Clean, modern flush door solutions designed to complement your overall interior.',
    image:
      'https://images.pexels.com/photos/8134755/pexels-photo-8134755.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern flush door design complementing interior decor in Sonipat',
  },
  {
    id: 'complete-interior',
    title: 'Complete Interior Designing',
    description:
      'Complete interior solutions designed to create a cohesive and beautiful home environment.',
    image:
      'https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Complete home interior designing project in Sonipat with cohesive styling',
  },
];

export type PortfolioCategory =
  | 'All'
  | 'Modular Kitchen'
  | 'Wardrobe'
  | 'Living Room'
  | 'Bedroom'
  | 'TV Panel'
  | 'Complete Interiors';

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  image: string;
  alt: string;
  span?: 'wide' | 'tall';
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Contemporary Modular Kitchen',
    category: 'Modular Kitchen',
    image:
      'https://images.pexels.com/photos/6920446/pexels-photo-6920446.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern modular kitchen in Sonipat with sleek white cabinets and open-plan layout',
    span: 'wide',
  },
  {
    id: 'p2',
    title: 'Walk-in Glass Wardrobe',
    category: 'Wardrobe',
    image:
      'https://images.pexels.com/photos/30465909/pexels-photo-30465909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Walk-in wardrobe with glass doors designed in Farmana, Sonipat',
  },
  {
    id: 'p3',
    title: 'Living Room TV Panel',
    category: 'TV Panel',
    image:
      'https://images.pexels.com/photos/14614673/pexels-photo-14614673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Contemporary TV panel design for living room in Sonipat',
  },
  {
    id: 'p4',
    title: 'Luxury Bedroom Interior',
    category: 'Bedroom',
    image:
      'https://images.pexels.com/photos/8082562/pexels-photo-8082562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Luxury bedroom interior design with ambient lighting in Sonipat',
    span: 'tall',
  },
  {
    id: 'p5',
    title: 'Open-Plan Kitchen Design',
    category: 'Modular Kitchen',
    image:
      'https://images.pexels.com/photos/8146160/pexels-photo-8146160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Bright modular kitchen design with minimalist style in Sonipat',
  },
  {
    id: 'p6',
    title: 'Elegant Living Room',
    category: 'Living Room',
    image:
      'https://images.pexels.com/photos/8089161/pexels-photo-8089161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant living room interior with modern furniture in Sonipat',
  },
  {
    id: 'p7',
    title: 'Modern Bedroom with Wardrobe',
    category: 'Bedroom',
    image:
      'https://images.pexels.com/photos/7535012/pexels-photo-7535012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern bedroom with built-in wardrobe designed in Farmana, Haryana',
  },
  {
    id: 'p8',
    title: 'Wooden TV Wall Panel',
    category: 'TV Panel',
    image:
      'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'TV wall panel with wooden cladding design in Sonipat',
    span: 'wide',
  },
  {
    id: 'p9',
    title: 'Complete Home Interior',
    category: 'Complete Interiors',
    image:
      'https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Complete home interior designing project with modern minimalist design in Sonipat',
  },
  {
    id: 'p10',
    title: 'Sleek Wardrobe Design',
    category: 'Wardrobe',
    image:
      'https://images.pexels.com/photos/6527064/pexels-photo-6527064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern wardrobe design with smart storage in Sonipat',
  },
  {
    id: 'p11',
    title: 'Spacious Living Room',
    category: 'Living Room',
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious living room with elegant chandeliers and contemporary decor in Sonipat',
    span: 'wide',
  },
  {
    id: 'p12',
    title: 'Dark Wood Kitchen',
    category: 'Modular Kitchen',
    image:
      'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modular kitchen with dark wood cabinets and marble countertops in Sonipat',
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'Modular Kitchen',
  'Wardrobe',
  'Living Room',
  'Bedroom',
  'TV Panel',
  'Complete Interiors',
];

export type WhyChooseItem = {
  title: string;
  description: string;
  icon: string;
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    title: 'Customized Designs',
    description:
      'Every interior is tailored to your specific space, taste and functional requirements — never one-size-fits-all.',
    icon: 'Palette',
  },
  {
    title: 'Modern & Functional Interiors',
    description:
      'We blend contemporary aesthetics with practical usability to create spaces that look great and work well.',
    icon: 'LayoutGrid',
  },
  {
    title: 'Quality-Focused Work',
    description:
      'We pay close attention to materials, finishes and craftsmanship at every stage of execution.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Space-Smart Solutions',
    description:
      'Smart storage and layout planning that makes the most of every square foot of your home.',
    icon: 'Maximize',
  },
  {
    title: 'Personalized Consultation',
    description:
      'We take time to understand your lifestyle and preferences before proposing a design direction.',
    icon: 'Users',
  },
  {
    title: 'Complete Interior Solutions',
    description:
      'From kitchens to bedrooms to living areas — everything you need under one roof.',
    icon: 'Home',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description:
      "Understand the client's requirements, lifestyle and budget.",
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Create a design concept according to the available space.',
  },
  {
    number: '03',
    title: 'Selection',
    description:
      'Finalize materials, finishes, colors and furniture requirements.',
  },
  {
    number: '04',
    title: 'Execution',
    description:
      'Turn the approved concept into a finished interior space.',
  },
];

export const serviceOptions = [
  'Modular Kitchen',
  'Modular Wardrobe',
  'LCD / TV Panel',
  'Modular Bed',
  'Flush Door',
  'Complete Interior Designing',
  'Customized Furniture & Interior Solutions',
  'Other',
];
