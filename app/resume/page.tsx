import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Resume</h1>
            <div className="text-muted-foreground text-sm flex flex-wrap gap-2">
              <span>Naman Verma</span>
              <span>&bull;</span>
              <span>namanverma0219@gmail.com</span>
              <span>&bull;</span>
              <span>07808400233</span>
              <span>&bull;</span>
              <a href="https://namanverma.site" className="text-primary underline" target="_blank" rel="noopener noreferrer">namanverma.site</a>
              <span>&bull;</span>
              <a href="https://linkedin.com/in/namanverma001" className="text-primary underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>&bull;</span>
              <a href="https://github.com/namanverma001" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1V1dZ-eK-hjGsPHNEd1qXdHlhQ9pnH__2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 sm:mt-0">
              <Download className="mr-2 h-4 w-4" />
              View Resume
            </Button>
          </a>
        </div>
        <Card className="border-2">
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Education */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Education</h3>
                <div className="space-y-4">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="font-bold">Savitribai Phule Pune University (SPPU)</h4>
                      <p>B-Tech Computer Engineering &bull; CGPA: 8.85</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>2022–2026</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Experience</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="font-bold">Web Development Intern (On-Site)</h4>
                        <p className="text-muted-foreground">Adichem Technology Pvt. Ltd., Nashik</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>Jan 2025 – Feb 2025</p>
                      </div>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>Launched a responsive website (React.js, Tailwind CSS) that boosted user engagement by 20% and cut bounce rate by 15%.</li>
                      <li>Collaborated cross-functionally to implement new features and optimize website performance to 99% uptime.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="font-bold">Software Development Intern (Co-Team Lead)</h4>
                        <p className="text-muted-foreground">BlueStock Fintech, Pune</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>Dec 2024 – Jan 2025</p>
                      </div>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>Co-led a 10-person team at BlueStock Fintech in developing the frontend of a trading platform website.</li>
                      <li>Leveraged React.js, HTML, CSS, and JavaScript to build a seamless and user-friendly interface.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Projects */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Projects</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold">FinSmart.ai</h4>
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-2">
                      <span>Next.js, Prisma, Clerk, Inngest, Google Generative AI</span>
                      <span>&bull;</span>
                      <a href="https://github.com/namanverma001/FinSmart.ai" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <span>&bull;</span>
                      <a href="https://finsmart-ai.vercel.app/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>Built an AI-powered finance platform with smart expense tracking, budgeting tools, and auto-generated financial insights, improving user decision-making and retention.</li>
                      <li>Implemented smart receipt scanning, multi-account support, and monthly AI-generated financial reports for personalized recommendations.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">Vheekle</h4>
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-2">
                      <span>Next.js, React, Tailwind CSS, Supabase, Prisma</span>
                      <span>&bull;</span>
                      <a href="https://github.com/namanverma001/vheekle" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <span>&bull;</span>
                      <a href="https://vheekle.vercel.app/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>Developed an AI-powered car marketplace platform enabling users to buy, sell, and manage vehicles online with advanced search and filtering.</li>
                      <li>Built secure authentication, dynamic car listings, admin dashboard, and test drive booking features using modular React components and RESTful APIs.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold">SkillCraft AI</h4>
                    <div className="text-sm text-muted-foreground flex flex-wrap gap-2">
                      <span>Next.js, Prisma, Google Generative AI, Clerk, Inngest</span>
                      <span>&bull;</span>
                      <a href="https://github.com/namanverma001/SkillCraftAI" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <span>&bull;</span>
                      <a href="https://skillcraftai.vercel.app/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>Created an AI-driven career assistant that delivers tailored industry insights, resume optimization, and mock interview prep — streamlining the job-seeking process.</li>
                      <li>Integrated dynamic user dashboards and analytics tracking using Prisma and Clerk for personalized career recommendations.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Skills */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Skills</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-medium">Languages:</p>
                    <p className="text-sm text-muted-foreground">C, C++, JavaScript, Python</p>
                  </div>
                  <div>
                    <p className="font-medium">Frameworks:</p>
                    <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS, React Native, Bootstrap, Express.js</p>
                  </div>
                  <div>
                    <p className="font-medium">Tools/Platforms:</p>
                    <p className="text-sm text-muted-foreground">Git, GitHub, Node.js</p>
                  </div>
                  <div>
                    <p className="font-medium">Database:</p>
                    <p className="text-sm text-muted-foreground">MySQL, MongoDB, PostgreSQL</p>
                  </div>
                </div>
              </div>
              {/* Achievements and Responsibilities */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Achievements and Responsibilities</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm">
                  <li>3rd Position for Python Mini Project Competition for Z-mart Shoppy</li>
                  <li>3rd Position for Logo Master Competition by Career Katta forum of K.K Wagh Institute of Engineering Education and Research, Nashik</li>
                  <li>2nd Winner in Database Mini Project Competition for SharLift - Connecting College Students for Share Rides</li>
                  <li>Core Member of Computer Society of India Students’ Chapter 2024-25</li>
                  <li>Sponsorship and Curation Team at Innov-era, a National Level Hackathon organized by KKWIEER</li>
                  <li>Participated in GDG on Campus Solution Challange orgainsed by Google Developer Group</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

