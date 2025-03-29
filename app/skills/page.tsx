import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function SkillsPage() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", logo: "/placeholder.svg?height=80&width=80" },
        { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Python", logo: "/placeholder.svg?height=80&width=80" },
        { name: "C++", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Java", logo: "/placeholder.svg?height=80&width=80" },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Next.js", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Tailwind CSS", logo: "/placeholder.svg?height=80&width=80" },
        { name: "HTML5", logo: "/placeholder.svg?height=80&width=80" },
        { name: "CSS3", logo: "/placeholder.svg?height=80&width=80" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Express.js", logo: "/placeholder.svg?height=80&width=80" },
        { name: "MongoDB", logo: "/placeholder.svg?height=80&width=80" },
        { name: "MySQL", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Firebase", logo: "/placeholder.svg?height=80&width=80" },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", logo: "/placeholder.svg?height=80&width=80" },
        { name: "GitHub", logo: "/placeholder.svg?height=80&width=80" },
        { name: "VS Code", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Figma", logo: "/placeholder.svg?height=80&width=80" },
        { name: "Docker", logo: "/placeholder.svg?height=80&width=80" },
      ],
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Skills</h1>
          <p className="text-muted-foreground md:text-xl">My technical skills and competencies</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>Technologies I've worked with</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center gap-2">
                      <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-muted p-1">
                        <Image
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-center text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

