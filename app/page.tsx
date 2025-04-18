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
  User,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import naman from "@/assets/naman.png"
import adichem from "@/assets/adichem.png"
import skillcraftai from "@/assets/skillcraftai.png"
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
      title: "SKillCraft AI",
      description: "AI-Powered Career Development Platform",
      technologies: ["Next.js", "Prisma", "Google Generative AI", "Clerk Authentication", "Prisma"],
      link: "https://skillcraftai.vercel.app/",
      thumbnail: skillcraftai,
    },
    {
      title: "Adichem Technology Pvt. Ltd. Nashik",
      description: "Official Website for Adichem Technology Pvt. Ltd.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      link: "https://www.adichemtechnology.com/",
      thumbnail: adichem,
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
      image: "data:image/jpeg;base64,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",
      slug: "getting-started-with-react",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m <span className="text-primary">Naman Verma</span>
                </h1>
                <div className="h-16">
                  <TypewriterEffect words={words} className="text-xl md:text-2xl" />
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Computer Engineering student passionate about creating innovative solutions through code. Specializing
                  in full stack Web development with React.js, Tailwind CSS, and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://drive.google.com/file/d/1HlquOrnr4Oo0Tlu6vQ1uChXHUPkhUriu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full min-[400px]:w-auto">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] overflow-hidden">
                <Image
                  src={naman}
                  alt="Profile"
                  fill
                  className="object-cover rounded-full border-4 border-primary"
                  priority
                  style={{ objectPosition: "top" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* About Section - Similar to About Page */}
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

      {/* Blog Section - Similar to Blog Page */}
      < section className="w-full py-12 md:py-24 lg:py-32" >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Blog Posts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Thoughts, tutorials, and insights on web development and technology
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-3 text-xs">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center">{post.readTime}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 hover:bg-transparent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/blog">
                <Button variant="outline">
                  View All Blog Posts
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

