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
            <p className="text-muted-foreground">My professional experience and qualifications</p>
          </div>
          <Button className="mt-4 sm:mt-0">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <Card className="border-2">
          <CardContent className="p-6">
            <div className="space-y-8">
              {/* Header */}
              <div className="border-b pb-6 text-center">
                <h2 className="text-3xl font-bold">NAMAN VERMA</h2>
                <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>+917808400233</span>
                  <span>namanverma2019@gmail.com</span>
                  <span>LinkedIn</span>
                  <span>GitHub</span>
                  <span>Portfolio</span>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Education</h3>
                <div className="space-y-4">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="font-bold">K.K. Wagh Institute of Engineering Education and Research</h4>
                      <p>B.Tech Computer Engineering (Average CGPA : 9.93)</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>2022 - 2026</p>
                      <p>Nashik, India</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="font-bold">B.D. Public School, Rajpur</h4>
                      <p>CBSE-HSC (Percentage : 84.20)</p>
                      <p>JEE Mains - 91.33 Percentile</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>2020 - 2022</p>
                      <p>Bihar, India</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <div>
                      <h4 className="font-bold">St. John's Academy, Mahua</h4>
                      <p>CBSE-SSE (Percentage : 78)</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>2019 - 2020</p>
                      <p>Bihar, India</p>
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
                        <h4 className="font-bold">SDE Intern (Co-Team Lead)</h4>
                        <p className="text-muted-foreground">BlueStock Fintech, Pune (Virtual)</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>Dec 2024 - Jan 2025</p>
                      </div>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>
                        Worked as a Co-Team Lead at BlueStock Fintech, handling the frontend development using React.js
                      </li>
                      <li>
                        Ensured a seamless and user-friendly interface while collaborating with backend developers and
                        designers for efficient implementation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="font-bold">Web Development Intern</h4>
                        <p className="text-muted-foreground">Adichem Technology Pvt. Ltd., Nashik (On-site)</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>Jan 2025 - March 2025</p>
                      </div>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>Developed the official website of Company using React.js and Tailwind CSS</li>
                      <li>
                        Ensured a responsive, optimized, and visually appealing user interface while collaborating with
                        the team to implement features and enhance website performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Projects</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="font-bold">Qshirts.in - Custom T-shirt Design and Ordering Platform</h4>
                        <p className="text-sm text-muted-foreground">
                          Technologies: HTML5, CSS, JavaScript, JSON, Firebase (Login Authentication)
                        </p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>Apr 2024</p>
                      </div>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>
                        Developed an interactive and user-friendly website that allows customers to customize and order
                        their own t-shirts
                      </li>
                      <li>
                        The platform offers a seamless experience from design to purchase, integrating user
                        authentication and customization options
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <h4 className="font-bold">NEXTMART - Comprehensive E-commerce Platform</h4>
                        <p className="text-sm text-muted-foreground">
                          Technologies: MERN Stack (MongoDB, Express.js, React.js, Node.js)
                        </p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>Dec 2024</p>
                      </div>
                    </div>
                    <ul className="mt-2 ml-6 list-disc space-y-1 text-sm">
                      <li>
                        Developing a user-centric e-commerce platform with a responsive React.js UI, integrated MongoDB,
                        Express.js, and Node.js for scalability
                      </li>
                      <li>
                        Implementing features like authentication, shopping cart, product catalog, and payment gateway
                        to enhance user experience
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Achievements / Extracurricular</h3>
                <ul className="ml-6 list-disc space-y-2 text-sm">
                  <li>3rd Position for Python Mini Project Competition for Z-mart Shoppy</li>
                  <li>
                    3rd Position for Logo Master Competition by Carrer Katta forum of K.K.Wagh Institute of Engineering
                    Education and Research, Nashik
                  </li>
                  <li>
                    2nd Winner in Database Mini Project Competition for ShortLift-Connecting College Student for Share
                    Rides
                  </li>
                  <li>Core Member of Computer Society of India Students' Chapter 2024-25</li>
                  <li>Core Committee of MBCS Club</li>
                  <li>Sponsorship and Curation Team at Innov-era. A National Level Hackathon organized by KKWIEER</li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="mb-4 text-xl font-bold uppercase">Technical Skills</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-medium">Languages:</p>
                    <p className="text-sm text-muted-foreground">C, C++, JavaScript, Python</p>
                  </div>
                  <div>
                    <p className="font-medium">Frameworks:</p>
                    <p className="text-sm text-muted-foreground">React, Tailwind CSS, Bootstrap, Express.js</p>
                  </div>
                  <div>
                    <p className="font-medium">Tools/Platforms:</p>
                    <p className="text-sm text-muted-foreground">Git, GitHub, Node.js</p>
                  </div>
                  <div>
                    <p className="font-medium">Database:</p>
                    <p className="text-sm text-muted-foreground">MySQL, MongoDB</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

