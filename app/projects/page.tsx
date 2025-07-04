import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ctshirts from "@/assets/ctshirts.png"
import skillverse from "@/assets/skillverse.png"
import nextmart from "@/assets/nextmart.png"
import portfolio from "@/assets/portfolio.png"
import adichem from "@/assets/adichem.png"
import skillcraftai from "@/assets/skillcraftai.png"
import optmahealth from "@/assets/optimahealth.jpg"
import algovisual from "@/assets/algovisuallab.png"
import Finsmart from "@/assets/finsmartai.png"
import Mindly from "@/assets/mindly.png"
import Vheekle from "@/assets/vheekle.png"
export default function ProjectsPage() {
  const projects = [
    {
      title: "Vheekle",
      description: "AI-Powered Car Marketplace Platform",
      longDescription:
        "An AI-powered car marketplace platform enabling users to buy, sell, and manage vehicles online with advanced search and filtering. Key contributions include:\n\n- Advanced Search & Filtering: Developed robust search and filter features for users to easily find vehicles matching their preferences.\n- Secure Authentication: Integrated Clerk for secure user authentication and data privacy.\n- Dynamic Listings: Built dynamic car listing and management with real-time updates using Supabase and Prisma.\n- Admin Dashboard: Designed an admin dashboard for managing users, listings, and analytics.\n- Test Drive Booking: Implemented a seamless test drive booking system and notification workflow.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "Prisma", "Clerk Authentication"],
      image: Vheekle,
      github: "https://github.com/namanverma001/Vheekle.git",
      live: "https://vheekle.vercel.app/",
      date: "June 2025",
    },
    {
      title: "FinSmart.ai",
      description: "AI-Powered Finance Platform",
      longDescription:
        "An AI-powered finance platform with smart expense tracking, budgeting tools, and auto-generated financial insights. Key contributions include:\n\n- Smart Expense Tracking: Built modules for tracking expenses across multiple accounts with real-time updates.\n- Budgeting Tools: Developed interactive budgeting tools and visualizations for better financial planning.\n- AI Insights: Integrated Google Generative AI for personalized financial insights and monthly reports.\n- Receipt Scanning: Implemented smart receipt scanning and data extraction.\n- Secure Authentication: Used Clerk for secure user authentication and privacy.\n- Event Automation: Leveraged Inngest for automating monthly report generation and notifications.",
      technologies: ["Next.js", "Prisma", "Clerk", "Inngest", "Google Generative AI"],
      image: Finsmart,
      github: "https://github.com/namanverma001/Finsmart.ai.git",
      live: "https://finsmartai.vercel.app/",
      date: "April 2025",
    },

    {
      title: "Mindly",
      description: "Personal Journal & Mood Insight Platform",
      longDescription:
        "A web application for organizing your thoughts and files. Users can add journal entries, organize them into folders, and receive mood insights based on their input. Key features include:\n\n- Thought Organization: Add, edit, and categorize your journal entries for better organization.\n- File Management: Attach and manage files alongside your thoughts.\n- Mood Insights: The app analyzes your entries and provides insights about your mood trends over time.\n- Privacy Focused: All data is securely stored and accessible only to the user.\n- Responsive Design: Works seamlessly across devices.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", 'Clerk', "Prisma"],
      image: Mindly,
      github: "https://github.com/namanverma001/Mindly.git",
      live: "https://mindly-eosin.vercel.app/",
      date: "March 2025",
    },
    {
      title: "SkillCraft AI",
      description: "AI-Powered Career Development Platform",
      longDescription:
        "An AI-driven career development platform that provides personalized industry insights, resume building, and interview preparation tools. Key contributions include:\n\n- Industry Insights: Integrated Google Generative AI to analyze market trends, salary ranges, and in-demand skills, delivering weekly updated insights tailored to users' industries.\n- Custom Content Generation: Built intelligent systems for generating resumes, cover letters, and interview questions based on user profiles and industry standards.\n- Secure Authentication: Implemented Clerk for secure user authentication and data encryption, ensuring user privacy and compliance with industry standards.\n- Scalable Backend: Designed a robust backend using Prisma and Next.js to handle dynamic data updates and real-time user interactions.\n- Event-Driven Architecture: Leveraged Inngest for scheduling and automating weekly updates of industry insights.",
      technologies: ["Next.js", "Prisma", "Google Generative AI", "Clerk Authentication", "Prisma"],
      image: skillcraftai,
      github: "https://github.com/namanverma001/SkillCraft-ai.git",
      live: "https://skillcraftai.vercel.app/",
      date: "March 2025",
    },
    {
      title: "AlgoVisualLab",
      description: "Algorithm Visualizer and Learning Platform",
      longDescription:
        "AlgoVisualLab is an interactive platform designed to help users visualize and understand various algorithms. It features:\n\n- Algorithm Visualization: Users can visualize sorting algorithms, data structures, and more in real-time.\n- Interactive Learning: The platform allows users to step through algorithms, providing a hands-on learning experience.\n- User-Friendly Interface: Designed for ease of use, making it accessible for both beginners and advanced users.",
      technologies: ["React.js", "Tailwind CSS", "Vite", "JavaScript"],
      image: algovisual,
      github: "https://github.com/namanverma001/AlgoVisualLab.git",
      live: "https://algovisuallab.vercel.app/",
      date: "March 2025",
    },
    {
      title: "SkillVerse",
      description: "A Prototype Website for Google Solution Challenge Hack2Skill For Education Domain",
      longDescription:
        "SkillVerse is a platform designed to help students from low-income backgrounds learn and grow. It offers a Learning Hub with free courses, AI-generated lecture notes, and an AI chatbot for doubts. The Scholarship Section connects students with NGO-funded scholarships, while the Freelancing Hub enables them to earn a side income",
      technologies: ["HTML5", "CSS", "JavaScript", "JSON", "Firebase"],
      image: skillverse,
      github: "https://github.com/namanverma001/SkillVerse.git",
      live: "https://skillverse-virid.vercel.app/",
      date: "Mar 2024",
    },
    {
      title: "OptimaHealth",
      description: "Medication Management Application",
      longDescription:
        "OptimaHealth is a cross-platform mobile application designed to help individuals manage their medications effectively. Key features include:\n\n- Medication Scheduling: Allows users to set reminders for medications based on specific times and frequencies.\n- Dose Tracking: Enables users to log their medication intake and track missed or extra doses.\n- Refill Alerts: Notifies users when their medication supply is running low to ensure timely refills.\n- Health Assistant: Integrates a chatbot to assist users with general health-related queries and guidance.\n- Data Security: Ensures sensitive health information is stored securely and accessed only by authorized users.\n- User-Friendly Interface: Features an intuitive design suitable for users of all age groups, including the elderly.\n- Cross-Platform Support: Works seamlessly on Android, iOS, and web platforms.",
      technologies: ["React Native", "Typescript", "Gemini API", "Chatbot Integration"],
      image: optmahealth,
      github: "https://github.com/namanverma001/OptimaHealth.git",
      live: "https://expo.dev/accounts/namanverma0001/projects/optimahealth/builds/fc9dab09-2912-4453-8533-852e524ccbe4",
      date: "April 2025",
    },
    {
      title: "Adichem Technology Pvt. Ltd. Nashik",
      description: "Official Website for Adichem Technology Pvt. Ltd.",
      longDescription:
        "Adichem Technology Pvt. Ltd. is a leading manufacturer of specialty chemicals and polymers. The website showcases their products, services, and company information.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      image: adichem,
      github: "#",
      live: "https://www.adichemtechnology.com/",
      date: "Feb 2025",
    },
    {
      title: "Personal Portfolio",
      description: "My Personal Portfolio Website and Deployed on my Own Domain",
      longDescription:
        "A personal portfolio website showcasing my projects, skills, and experiences. Built with Next.js and Tailwind CSS, it features a responsive design and smooth navigation.",
      technologies: ["Next.js", "Tailwind CSS", "React.js"],
      image: portfolio,
      github: "https://github.com/namanverma001/namanverma-portfolio.git",
      live: "https://www.namanverma.site/",
      date: "March 2025",
    },
    {
      title: "Cshirts.in",
      description: "Custom T-shirt Design and Ordering Platform",
      longDescription:
        "An interactive and user-friendly website that allows customers to customize and order their own t-shirts. The platform offers a seamless experience from design to purchase, integrating user authentication and customization options.",
      technologies: ["HTML5", "CSS", "JavaScript", "JSON", "Firebase"],
      image: ctshirts,
      github: "https://github.com/namanverma001/ctshirts.in.git",
      live: "#",
      date: "Apr 2024",
    },
    {
      title: "NEXTMART",
      description: "Comprehensive E-commerce Platform",
      longDescription:
        "A user-centric e-commerce platform with a responsive React.js UI, integrated MongoDB, Express.js, and Node.js for scalability, and implementing features like authentication, shopping cart, product catalog, and payment gateway to enhance user experience.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      image: nextmart,
      github: "https://github.com/namanverma001/NextMart.git",
      live: "#",
      date: "Dec 2024",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Projects</h1>
          <p className="text-muted-foreground md:text-xl">A showcase of my work, projects, and contributions</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{project.longDescription}</p>
                <div className="mt-4">
                  <p className="text-sm font-medium">Technologies:</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">{project.date}</div>
                <div className="flex space-x-2">
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Globe className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </Link>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

