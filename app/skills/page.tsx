import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function SkillsPage() {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "C++", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
      ],
    },
    {
      name: "Frontend",
      skills: [
        { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
        { name: "HTML5", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
        { name: "CSS3", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
        { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
        { name: "MongoDB", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9p_G7WR97buHsTlFGGRRufWq5e8ezZrRINw&s" },
        { name: "MySQL", logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
        { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Git", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
        { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
        { name: "VS Code", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
        { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
        { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
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
