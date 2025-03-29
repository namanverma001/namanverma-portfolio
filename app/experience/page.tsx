import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Download, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "SDE Intern (Co-Team Lead)",
      company: "BlueStock Fintech",
      location: "Pune (Virtual)",
      period: "Dec 2024 - Jan 2025",
      description: [
        "Worked as a Co-Team Lead at BlueStock Fintech, handling the frontend development using React.js",
        "Ensured a seamless and user-friendly interface while collaborating with backend developers and designers for efficient implementation",
        "Led a team of 3 developers to implement new features and improve existing functionality",
        "Participated in daily stand-ups and sprint planning meetings to ensure project milestones were met",
        "Implemented responsive design principles to ensure compatibility across all devices",
      ],
      skills: ["React.js", "JavaScript", "UI/UX", "Team Leadership", "Responsive Design", "Git"],
    },
    {
      title: "Web Development Intern",
      company: "Adichem Technology Pvt. Ltd.",
      location: "Nashik (On-site)",
      period: "Jan 2025 - March 2025",
      description: [
        "Developed the official website of Company using React.js and Tailwind CSS",
        "Ensured a responsive, optimized, and visually appealing user interface while collaborating with the team to implement features and enhance website performance",
        "Implemented SEO best practices to improve website visibility and search engine rankings",
        "Created reusable components to maintain consistency across the website and improve development efficiency",
        "Optimized website performance by implementing lazy loading and code splitting techniques",
      ],
      skills: [
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
        "Web Performance",
        "SEO",
        "Component-Based Architecture",
      ],
    },
  ]

  const certifications = [
    {
      title: "Web Development Fundamentals",
      issuer: "Udemy",
      date: "January 2023",
      description: "Completed a comprehensive course on HTML, CSS, and JavaScript fundamentals.",
      link: "#",
    },
    {
      title: "React.js Certification",
      issuer: "freeCodeCamp",
      date: "March 2023",
      description: "Mastered React.js concepts including hooks, state management, and component lifecycle.",
      link: "#",
    },
    {
      title: "Database Design & SQL",
      issuer: "Coursera",
      date: "June 2023",
      description: "Learned database design principles and advanced SQL queries.",
      link: "#",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h1>
            <p className="text-muted-foreground">My journey in the tech industry and professional work</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* Work Experience Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Work Experience</h2>

          <div className="relative border-l border-primary/30 pl-6">
            {experiences.map((experience, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="absolute -left-3 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>

                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-primary" />
                          <CardTitle>{experience.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">{experience.company}</CardDescription>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Responsibilities & Achievements:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        {experience.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Skills Utilized:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
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
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Certifications</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">{cert.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  <Link href={cert.link} className="inline-flex items-center text-primary hover:underline mt-2">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    View Certificate
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Education</h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle>K.K. Wagh Institute of Engineering Education and Research</CardTitle>
                    <CardDescription>B.Tech Computer Engineering</CardDescription>
                  </div>
                  <div className="mt-2 md:mt-0 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>2022 - 2026</span>
                    </div>
                    <div className="mt-1">CGPA: 9.93</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Pursuing a degree in Computer Engineering with a focus on web development and software engineering.
                  Participating in various technical clubs and events.
                </p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Database Systems",
                      "Web Development",
                      "Object-Oriented Programming",
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Skills Summary</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "HTML", "CSS", "Python", "C++"].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Frameworks & Libraries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Tools & Platforms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "VS Code", "Firebase", "MongoDB", "MySQL"].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Communication:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Team Collaboration", "Technical Writing", "Presentation", "Client Communication"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Leadership:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Team Leadership", "Project Management", "Mentoring", "Problem Solving"].map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Other:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Time Management", "Adaptability", "Critical Thinking", "Attention to Detail"].map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

