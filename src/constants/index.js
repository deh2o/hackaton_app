import { banner1, banner2, banner3, banner4 } from "../assets/hero";
import {
  engineering,
  fish,
  hatchery,
  rearing,
  roasted,
  vaccinated,
} from "../assets/images/products";
import {
  boa,
  cattle,
  ebonyiia,
  farmers,
  nigeria_logo,
  nirsal,
  poultry,
  worldbank,
} from "../assets/partners";

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "2",
    title: "Products",
    url: "#products",
  },
  {
    id: "1",
    title: "About Us",
    url: "#about",
  },
  {
    id: "3",
    title: "Our Team",
    url: "#team",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#contact",
  },
  {
    id: "5",
    title: "Meat Market",
    url: "#/",
    onlyMobile: true,
  },
];

export const heroItems = [
  {
    id: "1",
    bgImg: banner2,
    title: "Unmatched Quality",
    slug: "Since 1979",
    detail: "Our Quality knows no Bounds",
  },
  {
    id: "0",
    bgImg: banner1,
    title: "Ebonyi State Hatchery",
    slug: "Best of All",
    detail: "Best Hatchery found East of the Niger",
  },
  {
    id: "2",
    bgImg: banner3,
    title: "Our Best is the Best Any where",
    slug: "Experience the Best",
    detail: "We Stand out from the Crowd",
  },
  {
    id: "3",
    bgImg: banner4,
    title: "Bringing the Lost Glory",
    slug: "Consistency and Continuity",
    detail: "Our Experts Ensure professional Services",
  },
];

export const partners = [
  {
    id: "0",
    img: boa,
    alt: "BOA",
  },
  {
    id: "1",
    img: cattle,
    alt: "MACBAN",
  },
  {
    id: "2",
    img: ebonyiia,
    alt: "EBONYI STATE GOVT",
  },
  {
    id: "3",
    img: farmers,
    alt: "AFAN",
  },
  {
    id: "4",
    img: nigeria_logo,
    alt: "FED GOVT",
  },
  {
    id: "5",
    img: nirsal,
    alt: "NIRSAL MFB",
  },
  {
    id: "6",
    img: poultry,
    alt: "PAN",
  },
  {
    id: "7",
    img: worldbank,
    alt: "WORLD BANK",
  },
];

export const teams = [
  {
    id: 0,
    name: "John Doe",
    title: "Programmer",
    image: "/src/assets/team/dummy.jpeg",
  },
  {
    id: 1,
    name: "John Doe",
    title: "Programmer",
    image: "/src/assets/team/dummy.jpeg",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Programmer",
    image: "/src/assets/team/dummy.jpeg",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Programmer",
    image: "/src/assets/team/dummy.jpeg",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const services = [
  {
    id: 0,
    title: "Hatchery",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: hatchery,
  },
  {
    id: 1,
    title: "Rearing",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: rearing,
  },
  {
    id: 3,
    title: "Feed Production",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: engineering,
  },
  {
    id: 4,
    title: "Frozen Meat Products",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: roasted,
  },
  {
    id: 5,
    title: "Aquaculture",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: fish,
  },
  {
    id: 6,
    title: "Animal Vaccination",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: vaccinated,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
