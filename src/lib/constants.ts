import { ProjectProps } from "@/components/sections/projects"
import { WorkProps } from "@/components/sections/work-experience"

export const projects = [
  {
    title: "NutriGuard",
    description: "An Android application that helps users track the food in their kitchen, monitor expiry dates, and reduce food waste.",
    href: "https://github.com/Smat-ctrl/NutriGuard",
    status: "maintained"
  },
  {
    title: "Watapoly",
    description: "Watapoly is a C++ Monopoly-style board game that simulates turn-based gameplay, property management, and player interactions through a modular object-oriented design.",
    href: "https://github.com/Smat-ctrl/Watapoly",
    status: "maintained"
  },
  {
    title: "DataScrape",
    description: "This Python script automates the process of scraping company data from the WCA World Directory website using Selenium and OpenPyXL, storing the results in an Excel file.",
    href: "https://github.com/Smat-ctrl/DataScrape",
    status: "maintained"
  },
  {
    title: "Zombie Survival Game",
    description: "A top-down, diep.io-style zombie survival game where players upgrade their character, dodge swarms of enemies, and fight to survive increasingly difficult waves",
    href: "https://github.com/Smat-ctrl/Zombie_Survival",
    status: "maintained"
  }
] as ProjectProps[]

export const workExperience = [
  {
    title: "Digital Developer",
    href: "building-sheridan-digital-infrastructure",
    status: "contract",
    buttonText: "Constructing a Professional Academic Website"
  }
] as WorkProps[]
