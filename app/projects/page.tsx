import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ctshirts from "@/assets/ctshirts.png"
import skillverse from "@/assets/skillverse.png"
import nextmart from "@/assets/nextmart.png"
import portfolio from "@/assets/portfolio.png"
export default function ProjectsPage() {
  const projects = [
    {
      title: "Cshirts.in",
      description: "Custom T-shirt Design and Ordering Platform",
      longDescription:
        "An interactive and user-friendly website that allows customers to customize and order their own t-shirts. The platform offers a seamless experience from design to purchase, integrating user authentication and customization options.",
      technologies: ["HTML5", "CSS", "JavaScript", "JSON", "Firebase"],
      image: ctshirts,
      github: "https://github.com/namanverma001/ctshirts.in.git",
      live: 'https://ctshirts-in.vercel.app/',
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
    {
      title: "SkillVerse",
      description: "A Prototype Website for Google Solution Challenge Hack2Skill For Education Domain",
      longDescription:
        "SkillVerse is a platform designed to help students from low-income backgrounds learn and grow. It offers a Learning Hub with free courses, AI-generated lecture notes, and an AI chatbot for doubts. The Scholarship Section connects students with NGO-funded scholarships, while the Freelancing Hub enables them to earn a side income",
      technologies: ["HTML5", "CSS", "JavaScript", "JSON", "Firebase"],
      image: skillverse,
      github: "https://github.com/username/portfolio",
      live: "https://portfolio.example.com",
      date: "Mar 2024",
    },
    {
      title: "Personal Portfolio",
      description: "My Personal Portfolio Website and Deployed on my Own Domain",
      longDescription:
        "A personal portfolio website showcasing my projects, skills, and experiences. Built with Next.js and Tailwind CSS, it features a responsive design and smooth navigation.",
      technologies: ["Next.js", "Tailwind CSS", "React.js"],
      image: portfolio,
      github: "https://github.com/namanverma001/SkillVerse.git",
      live: "https://skillverse-hfw4.onrender.com/",
      date: "Nov 2023",
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

