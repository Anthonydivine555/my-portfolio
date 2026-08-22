import transvo from "@/assets/transvo-thumbnail.png";
import eatinghabit from "@/assets/eatinghabit-thumbnail.png";
import exclusive from "@/assets/ecommerce-thumbnail.png";
import repairhub from "@/assets/repairhub-thumbnail.png";
import fxChecker from "@/assets/fx-checker-thumbnail.png";
import tournax from "@/assets/tournax-thumbnail.png";

// TODO: update GH_USER with the real GitHub username.
const GH_USER = "https://github.com/Anthonydivine555";

export const projects = [
  {
    name: "Logistics Platform",
    github: `${GH_USER}/transvo`,
    description: "Marketing and booking interface for a logistics company, built mobile-first.",
    languages: ["html", "tailwindcss", "javascript"],
    website: "https://transvo.net",
    thumbnail: transvo,
    category: "Remote project",
  },
  {
    name: "RepairHub",
    github: 'https://github.com/repairhubproject/repairhubfrontend',
    description:
      "A repair service marketplace connecting customers with technicians to compare quotes, schedule repairs, and track service requests.",
    languages: ["html", "tailwindcss", "react", "javascript"],
    website: "https://repairhub-9crw.onrender.com/",
    thumbnail: repairhub,
    category: "Team project",
  },

  {
    name: "FX Checker",
    github: `${GH_USER}/currency-converter-app`,
    description:
      "A currency exchange platform that provides real-time exchange rates, currency conversion, favorites, and historical rate charts.",
    languages: ["html", "tailwindcss", "react", "javascript"],
    website: "https://currency-converter-app-flame-kappa.vercel.app/",
    thumbnail: fxChecker,
    category: "Hackathon project",
  },
  {
    name: "Exclusive",
    github: `${GH_USER}/E-BIZ-ECOMMERCE-WEBSITE`,
    description:
      "A modern e-commerce platform where users can browse products, add items to their cart, save favorites, and manage their shopping experience.",
    languages: ["html", "tailwindcss", "javascript"],
    website: "https://e-biz-ecommerce-website.vercel.app/",
    thumbnail: exclusive,
    category: "Personal project",
  },
  {
    name: "Tournax",
    github: `${GH_USER}/Tournax`,
    description:
      "A competitive gaming platform where players join tournaments, compete for stakes, and winners receive rewards.",
    languages: ["html", "javascript", "tailwindcss", "nextjs"],
    website: "https://tournax-ten.vercel.app/",
    thumbnail: tournax,
    category: "Ongoing project",
  },
  {
    name: "eatingHabit App",
    github: "https://github.com/PeeCee45/EatHabit",
    description: "Meal and habit tracking app with a clean, focused daily overview.",
    languages: ["html", "tailwindcss", "javascript", "nextjs"],
    website: "https://eat-habit.vercel.app/",
    thumbnail: eatinghabit,
    category: "Personal project",
  },
];
