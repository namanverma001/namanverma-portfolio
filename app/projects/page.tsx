import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Cshirts.in",
      description: "Custom T-shirt Design and Ordering Platform",
      longDescription:
        "An interactive and user-friendly website that allows customers to customize and order their own t-shirts. The platform offers a seamless experience from design to purchase, integrating user authentication and customization options.",
      technologies: ["HTML5", "CSS", "JavaScript", "JSON", "Firebase"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/username/qshirts",
      live: "https://qshirts.example.com",
      date: "Apr 2024",
    },
    {
      title: "NEXTMART",
      description: "Comprehensive E-commerce Platform",
      longDescription:
        "A user-centric e-commerce platform with a responsive React.js UI, integrated MongoDB, Express.js, and Node.js for scalability, and implementing features like authentication, shopping cart, product catalog, and payment gateway to enhance user experience.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/username/nextmart",
      live: "https://nextmart.example.com",
      date: "Dec 2024",
    },
    {
      title: "Portfolio Website",
      description: "Personal Portfolio with React and Tailwind CSS",
      longDescription:
        "A modern, responsive portfolio website built with React.js and Tailwind CSS to showcase my projects, skills, and experience. Features include dark/light mode toggle, responsive design, and interactive elements.",
      technologies: ["React.js", "Tailwind CSS", "Next.js", "Framer Motion"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/username/portfolio",
      live: "https://portfolio.example.com",
      date: "Mar 2024",
    },
    {
      title: "Python Mini Project",
      description: "3rd Position in Python Mini Project Competition",
      longDescription:
        "A Python-based application developed for a competition at Z-mart Shoppy. The project demonstrates proficiency in Python programming and problem-solving skills.",
      technologies: ["Python", "Tkinter", "SQLite"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/username/python-mini",
      date: "Nov 2023",
    },
    {
      title: "Logo Master Competition Project",
      description: "3rd Position in Logo Master Competition",
      longDescription:
        "A logo design project that secured 3rd position in the Logo Master Competition by Carrer Katta forum of K.K.Wagh Institute of Engineering Education and Research, Nashik.",
      technologies: ["Adobe Illustrator", "Photoshop"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/username/logo-master",
      date: "Oct 2023",
    },
    {
      title: "Database Mini Project",
      description: "2nd Winner in Database Mini Project Competition",
      longDescription:
        "A database project for ShortLift-Connecting College Student for Share Rides that won 2nd place in the competition. The project demonstrates skills in database design, normalization, and query optimization.",
      technologies: ["MySQL", "MongoDB", "Express.js"],
      image: "/placeholder.svg?height=400&width=600",
      github: "https://github.com/username/database-mini",
      date: "Sep 2023",
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

