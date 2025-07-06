import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Award,
  Briefcase,
  Calendar,
  Code,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
  Twitter,
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { SiLeetcode } from "react-icons/si"

import Finsmart from "@/assets/finsmartai.png"
import Vheekle from "@/assets/vheekle.png"
export default function Home() {
  const words = [
    {
      text: "Building Solution",
    },
    {
      text: "Full Stack Developer",
    },
    {
      text: "Let's Connect!",
      className: "text-primary",
    },
  ]

  const projects = [
    {
      title: "Vheekle",
      description: "AI-Powered Car Marketplace Platform",
      technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "Prisma", "Clerk Authentication"],
      link: "https://vheekle.vercel.app/",
      thumbnail: Vheekle,
    },
    {
      title: "FinSmart.ai",
      description: "AI-Powered Finance Platform",
      technologies: ["Next.js", "Prisma", "Clerk", "Inngest", "Google Generative AI"],
      link: "https://finsmartai.vercel.app/",
      thumbnail: Finsmart,
    },
  ]

  const experiences = [
    {
      title: "Web Development Intern",
      company: "Adichem Technology Pvt. Ltd.",
      location: "Nashik (On-site)",
      period: "Jan 2025 - March 2025",
      description: [
        "Developed the official website of Company using React.js and Tailwind CSS",
        "Ensured a responsive, optimized, and visually appealing user interface while collaborating with the team to implement features and enhance website performance",
      ],
      skills: ["React.js", "Tailwind CSS", "Responsive Design", "Web Performance"],
    },
    {
      title: "SDE Intern (Co-Team Lead)",
      company: "BlueStock Fintech",
      location: "Pune (Virtual)",
      period: "Dec 2024 - Jan 2025",
      description: [
        "Worked as a Co-Team Lead at BlueStock Fintech, handling the frontend development using React.js",
        "Ensured a seamless and user-friendly interface while collaborating with backend developers and designers for efficient implementation",
      ],
      skills: ["React.js", "JavaScript", "UI/UX", "Team Leadership"],
    },

  ]

  const blogPosts = [
    {
      title: "Getting Started with React.js",
      excerpt: "Learn the basics of React.js and how to create your first React application.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "React",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANEBANEA0QDw0PERETEw0NDxMQDREQFhMZGhQRHxUZHSggGhonGxYXITQhJSktOi4wHSs1ODMtNygtLisBCgoKDg0OGxAQGysmICYyMC8zLystLy0uLy0wMi0tLy81MDAtLTIwLy0rLS0tLi4tNS01LTUvNS8tLS0tLS0tLv/AABEIAKgBLAMBEQACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgMHAv/EAEIQAAICAQIDBQUDCAcJAAAAAAECAAMRBBIFITEGE0FRYRQiMnGBB0KRIzNSU2KCocEkQ3KSouHwFTRzdKOxsrPS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EADQRAQACAgAFAQYFBQABBQAAAAABAgMRBBIhMVFBEyJhcYHwBZGhsdEUMsHh8UIVIzNScv/aAAwDAQACEQMRAD8A+ZQLAQLAQECwECwECwECwECwLAQLAsCwEC5gXMBmBYFzAuYDMC5gXMBmBYFgWAgWBYCBp4FgIFgIFgICBYCBYCBYCBYCBcwLmAzAuYFzAuYDMCwLAQLAsCwECwLAQLmBcwLmAzAuYGngWAgWAgWAgWAgIFgIGbp8JWr7EZ7LWQG0A1oFVD0PLJL9T0CwMpuHbs2FdiYT3KXrdWZt2WUswAX3DyyeuOnQPSvh9KtUjFnLWXqzIRsZVUFT15dR/HygYzaasVrazMF214CIu9t73deeM4q6/SB+34ciMqPa35R9qMiAjblcO2Ty+LoM4wevLIeOn0is9iFj7hICrtFlhDYwNxA9cf6Ae7aFMVqO97w2XKx7s7iqAH4Ccg8/Hpk5OBmAt4eiKbGdwuxWCgIz5Z3XaSGx1TOfI9MwPW7hybmZd4rXu12jZvLNWGJ95gMcx9T4CA02hrS6lLLNxe1cbVDVMgtKczn7xUjHgPPpAw9Fpe9HXBD1g8uiNnc/0wPxgZJ0QQWEtkAWY90EmtWrw4yeRIfl8jA9tVp6F3Ll1Uaq6sEKGfACDmSeYHP55ga26sozIeqMynHTIOP5QPzmAzAuYFzAuYDMC5gXMBmBYFgIGogWAgWAgWAgWAgWAgbzUaPRUJp+99say/TV3nubKFrG8sNoDIT90+MumuOsRvfWN+n8Mtcma825eXUTMdd+n1Y/E+H1pVVqqLHfT2s6YuCi6q1QCUbbyOQcgiRvSIiLV7J4stptNLx1jr07TDDbR3BO9NFoqOD3pqcVEHod+MfxkOWdb0s9pTfLuN+N9X5ope1tldb2P12VozvjzwBmIiZ6Qla0Vjdp18y6l62KOjVuOqWKUcfQ84mJjpJW0WjcTt6ex27O+7i3ucZ77un7rHnvxjH1jlnW9dHntKc3LuN+N9fyZen4LdZp21SpYwWxUCLS7bwQ2bAR4ArgycY7TXmj9lVuIpXJGOZjt5/RiaCkW201EkLZbWhK4yAzgEj15yFY3MQsyW5aTbxEyzu0PCfY7dqP3mnct3VvIk7W2uhxy3qwIP8AniTy4+SenZVw+f2tNzGp9Y/b6THZ5anRKmm0+oBbfc96spI2AVlNuOWfvHOTPJrEVi3naVckzltTxr9dvA6O4J3potFWM96anFWPPfjEjy21vXRP2lN8u43431Zen4NdZp21SpYwWxUCLU7bwQ2XBHgCuDJxjtNeaP2V24ilckUmY7ef0eNlINdTV1X7tljWOy5qYK2N64HwgciT0MjMdI1EpxaYtMWmPTXn6/Hw8Kq2chVVmY9FQFmPLJ5D0kYjfZOZiI3L002ltuya6bLQOpqrZ8fPaDiexWZ7Q8tetf7piPnOnkeXI9RyIPUHxE8SMwLmBcwLmAzAuYFzAZgXMCwGYGpgWAgWAgWAgWAgWAgdPxX2PZofaDqxZ7Bp+enFRrCbnwfe55zu6ek0X5NV5t9o7MOL228nJy65p77+DMXT1jXaPhgr/oVbm5Wdu8OqL171uJAAwdgXaB5jnJaj2lcfp3+fxVc1vYXz796en/5661+u2NpeJot66l+MtYCwNlbabU91ZWfjr2H3dpXIxjl9J5F45uab/pKy+GZpyRi146xuJ8vDTArVe1eqTSaC3UuEv22+03KmdlYCDcUCsCc45n6SEdp1Oo38dp21N6xavNeI7dNR5nr022en01WpThyPqDq09uervbEdG7vYjmn3ySVz/wCWBLIiLRXc76/cKLXtjnJMV5fd3qPPbfRoreP6oak6jvrA4sJFW5u6AB/NbOm3HLH85TOW/NvbXHDYvZ8mo1rv6/Pfllpqn9g1TAtV/TKsV1syrWGWwmsDPJc+EnFp9nPzVTSvt6xPX3Z+vbq1XBv9503/ADFH/tWVU/uj5w05v/jt8p/ZuF1CWX6vQXMFpu1Vxrtbpp9T3jBbP7LfC348sZlu4m1qT6zP0lmms1pTLTvERuPMajp847w/eo0Ny08P03cg6hdXq17mwe6XD1e6fNT5+Ins1ty1rrruXlclJvkvvpy16/Sf1ZvCry2urNnFe9tst2vRVXe+ncMcNUC2F2YOOmJOk7ydb/TrpVlrrBPLj1ER3mY38/O2uS1q9BqlV3UJrKlUB2GF22e716SvcxjmI8rpiLZ6zMf+M/4e2n1o09fCrG/NbNUloPQ0vey2D+6SfpPYtyxSZ+P7o2xzktlrHf3dfOI3Dxp0raAa6xj+UqzpKm8WstzmweoqBP74kYr7Pmn6ff0TteM844jtPvT8o9Pz6fRm8WWuoUULxFtNXXRSwqrquwWdQzXFk5FiT18JO8RGo5tdPj+arDNrc15x80zM9ZmPTprr4avtFqqrmqsru763ugt1vdtXvsUkByGHMlduT6SvLNZmJid+WjhqXpExaNRvpG96j/rU5lTSuYCBYFgWAgWBYCBYGqgICBYCBYCBYCBYCBYCAgWAgWAgWAgWAgWAgIFgXMBmBcwLAsBAsCwEC5gauAgWAgIFgIFgIFgIFgIFgIGRodI+otSipd1tjbVGcD1JPgAASfQT2tZtOoQvetKza3aHav2Q4dpsV6viRTUEAlVsqrUZ8drKTj1J5zXPD4q9L26/RzI47iMnXFj6fWf4YnFewdip3+juXV1EZCjAsI8wQdr/THyMjfhZiN0ncLMX4jWZ5cscs/p/pyBBBIIIIJBBGCCOoI8DMrpNnwPgOo17EUp7inDXP7tS+mfE+gzLMeK2SeijPxOPDHvT9PV1D9kuHabCaviRF2Oaq9dePXaQxHzM0/0+KvS9urBHG8Rk648fT6z/DVdpuyvsla6qi72jRvj8p7pZd3wnK8mUnlkY5yrNg5I5qzuGjheM9racd41ZzUztxAsBAsBAQLAsBAuYFgXMBmBcwLmBq4CBYCBYCAgWAgWAgWAgWAgdp9lenDaq2w9a6cD5u45/gpH1mvg43eZcz8UtMYojzP7OV4lqjffdexy1ljtk+RPIfQYH0ma9ua0y6GKkUpFY9IZHBON36F99L4BOWqbnVZ818/Uc57jyWpO6oZ+HpmjV4+vrDv6+GaTj6V63u7KLA+23aMGzb1TdjDDphxz8OR5DdyUzxFuzkTly8Face4mPT4ffhp+1Has07uH6JDpqac1tYqlLCR1VR1UftdT15dTVmz69ynSIaeF4OLf+9lncz1/7/Dic9T4k5J8ST1Mxuo7zsWTqOG6/Sscqocrn7u+snl+8u75mbcHvYrVcnjfc4nHePvU/wAdHBgzE6ywLAQLAQLAQECwECwECwECwEDAgIEgICAgWAgWAgWAgWAgWAgIFgIFgIFgIFgIFgIFgICBYCBYCBYCBiQECQEBAQEBAkBAQECwECwECwECwEBAsBAsBAsBAsBAsBAQLAQLAQLAQMWAgICBICAgICAgIEgICBYCBYCBYCAgWAgWAgWAgWAgWAgWAgIFgIFgIH//2Q==",
      slug: "getting-started-with-react",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/50">
        {/* Modern animated background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/10 via-background/60 to-secondary/20 animate-gradient-slow z-0" />

        <div className="absolute left-1/4 top-1/3 w-[200px] h-[200px] bg-secondary/30 rounded-full blur-2xl animate-bounce opacity-20" />
        <div className="absolute right-1/4 bottom-1/4 w-[150px] h-[150px] bg-primary/30 rounded-full blur-2xl animate-bounce-slow opacity-20" />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-10 py-12">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-gradient">
                <TypewriterEffect words={[{ text: "Hi, I'm Naman Verma" }, { text: "Full Stack Developer", className: "text-primary" }]} />
              </h1>
              <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl/relaxed lg:text-2xl/relaxed mx-auto animate-fade-in delay-300">
                Computer Engineering student passionate about building innovative solutions through code.<br />
                <span className="text-primary font-semibold">Full Stack Developer</span> specializing in <span className="text-primary font-semibol">React.js</span> & <span className="text-primary font-semibol">Next.js</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-500">
              <Link href="/projects">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1V1dZ-eK-hjGsPHNEd1qXdHlhQ9pnH__2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 shadow-lg">
                  Check Out My Resume
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 animate-fade-in delay-700">
              <Link href="https://github.com/namanverma01" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-7 w-7" />
              </Link>
              <Link href="https://www.linkedin.com/in/naman-verma-824baa257/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-7 w-7" />
              </Link>
              <Link href="https://leetcode.com/u/namanverma01/" className="text-yellow-500 hover:text-yellow-400 transition-colors">
                <SiLeetcode className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      < section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Get to know more about my background, education, and interests
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-2xl font-bold mb-4">Hello, I&apos;m Naman Verma</h3>
                <p className="text-muted-foreground">
                  I&apos;m a Computer Engineering student at K.K. Wagh Institute of Engineering Education and Research,
                  passionate about web development and creating innovative solutions through code.
                </p>
                <p className="mt-4 text-muted-foreground">
                  My journey in technology began during my early college years when I discovered my passion for building
                  web applications. Since then, I&apos;ve been constantly learning and improving my skills through
                  personal projects, internships, and academic coursework.
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <Link href="/about">
                    <Button variant="outline">
                      Learn More About Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-bold">K.K. Wagh Institute of Engineering Education and Research,Nashik</h4>
                    <p className="text-sm text-muted-foreground">B.Tech Computer Engineering (2022 - 2026)</p>
                    <p className="text-sm text-muted-foreground">CGPA: 8.93</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-bold">B.D. Public School, Bihar</h4>
                    <p className="text-sm text-muted-foreground">CBSE-HSC (2020 - 2022)</p>
                    <p className="text-sm text-muted-foreground">Percentage: 84.20</p>
                  </div>
                  <div>
                    <h4 className="font-bold">St. John's Academy, Bihar</h4>
                    <p className="text-sm text-muted-foreground">CBSE-SSC (2019 - 2020)</p>
                    <p className="text-sm text-muted-foreground">Percentage: 78</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Experience Section - Comes right after About */}
      < section className="w-full py-12 md:py-24 lg:py-32" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              My journey in the tech industry and professional work experience
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative border-l border-primary/30 pl-6 ml-6 md:ml-0 md:pl-0 md:border-l-0">
              {experiences.map((experience, index) => (
                <div key={index} className="relative mb-12 md:grid md:grid-cols-5 md:gap-8">
                  {/* Timeline dot for mobile */}
                  <div className="absolute -left-[25px] h-10 w-10 rounded-full border-4 border-background bg-primary md:hidden">
                    <Briefcase className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary-foreground" />
                  </div>

                  {/* Date column */}
                  <div className="hidden md:block md:col-span-1">
                    <div className="flex h-full flex-col items-center justify-center">
                      <div className="h-10 w-10 rounded-full border-4 border-background bg-primary flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="mt-2 text-sm font-medium text-muted-foreground">{experience.period}</div>
                    </div>
                  </div>

                  {/* Content column */}
                  <Card className="md:col-span-4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-xl">{experience.title}</CardTitle>
                          <CardDescription className="text-base">{experience.company}</CardDescription>
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                      <div className="md:hidden text-sm text-muted-foreground mt-1">
                        <Calendar className="inline-block mr-1 h-4 w-4" />
                        {experience.period}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-disc pl-5">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">
                        <p className="text-sm font-medium">Skills utilized:</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

              <div className="flex justify-center mt-8">
                <Link href="/experience">
                  <Button>
                    View Full Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Projects Section - Similar to Projects Page */}
      < section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Check out some of my recent work and personal projects
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:grid-cols-2 lg:gap-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
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
                  <Link href={project.link}>
                    <Button variant="outline" size="sm">
                      Watch Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section >

      {/* Skills Section - Similar to Skills Page */}
      < section className="w-full py-12 md:py-24 lg:py-32" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">Technologies and tools I work with</p>
          </div>

          <div className="mx-auto max-w-5xl py-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Programming Languages</CardTitle>
                  <CardDescription>Languages I've worked with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "JavaScript", image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
                      { name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
                      { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                      { name: "C++", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
                      { name: "Java", image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
                    ].map((skill, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-muted p-1">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="text-center text-xs font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Frontend technologies I use</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                      { name: "Next.js", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
                      { name: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
                      { name: "HTML5", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
                      { name: "CSS3", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
                    ].map((skill, index) => (
                      <div key={index} className="flex flex-col items-center gap-2">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-muted p-1">
                          <Image
                            src={skill.image}
                            alt={skill.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="text-center text-xs font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/skills">
                <Button variant="outline">
                  View All Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* Achievements Section - Similar to Achievements Page */}
      < section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Achievements & Extracurricular</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A showcase of my accomplishments and involvement in activities
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Python Mini Project</CardTitle>
                      <CardDescription>3rd Position</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Z-mart Shoppy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>November 2023</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Logo Master Competition</CardTitle>
                      <CardDescription>3rd Position</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Career Katta forum, KKWIEER</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>October 2023</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Database Mini Project</CardTitle>
                      <CardDescription>2nd Position</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>ShortLift Project</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>September 2023</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/achievements">
                <Button variant="outline">
                  View All Achievements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section - Similar to Contact Page */}
      < section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Interested in collaborating or have a project in mind? Let's connect!
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">namanverma0219@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Nashik, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">https://www.linkedin.com/in/naman-verma-824baa257</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">https://github.com/namanverma001</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button className="w-full">
                      Contact Me
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden border">
                  <Image src="https://sphero.com/cdn/shop/articles/pair_programming_1200x.png?v=1706023342" alt="Contact" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 flex items-end p-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Let's Work Together</h3>
                      <p className="text-white/80">Ready to start your next project?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Quick Links */}
      < section className="w-full py-12 md:py-24 lg:py-32" >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/about">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:bg-muted">
                <div className="rounded-full bg-primary/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">About Me</h3>
                <p className="text-sm text-muted-foreground">Learn more about my background and interests</p>
              </div>
            </Link>
            <Link href="/experience">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:bg-muted">
                <div className="rounded-full bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Experience</h3>
                <p className="text-sm text-muted-foreground">Explore my professional work experience</p>
              </div>
            </Link>
            <Link href="/projects">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:bg-muted">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Projects</h3>
                <p className="text-sm text-muted-foreground">Explore my portfolio of projects and applications</p>
              </div>
            </Link>
            <Link href="/contact">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 text-center transition-all hover:bg-muted">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="text-sm text-muted-foreground">Get in touch for collaborations or opportunities</p>
              </div>
            </Link>
          </div>
        </div>
      </section >
    </div >
  )
}

