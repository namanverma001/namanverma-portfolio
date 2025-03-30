import { Button } from "@/components/ui/button"
import { FileText, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import naman from "@/assets/naman.png"
export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="text-muted-foreground md:text-xl">
            Computer Engineering student passionate about building innovative solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-xl">
              <Image src={naman} alt="Naman Verma" width={250} height={250} className="object-cover" />
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com/namanverma001" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/naman-verma-824baa257" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:namanverma0219@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <Link href="https://drive.google.com/file/d/1Bwkcm6anEEAjGq7kqMfV_qcRRrnl3NvL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Hello, I&apos;m Naman Verma</h2>
              <p className="mt-2 text-muted-foreground">
                I&apos;m a Computer Engineering student at K.K. Wagh Institute of Engineering Education and Research,
                passionate about web development and creating innovative solutions through code.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">My Journey</h3>
              <p className="mt-2 text-muted-foreground">
                My journey in technology began during my early college years when I discovered my passion for building
                web applications. Since then, I&apos;ve been constantly learning and improving my skills through
                personal projects, internships, and academic coursework.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">What I Do</h3>
              <p className="mt-2 text-muted-foreground">
                I specialize in frontend development using React.js and Tailwind CSS, with experience in building
                responsive and user-friendly interfaces. I&apos;m also familiar with backend technologies like Node.js
                and databases like MongoDB.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="font-medium">K.K. Wagh Institute of Engineering Education and Research,Nashik</p>
                  <p className="text-sm text-muted-foreground">B.Tech Computer Engineering (2022 - 2026)</p>
                </div>
                <div>
                  <p className="font-medium">B.D. Public School, Bihar</p>
                  <p className="text-sm text-muted-foreground">CBSE-HSC (2020 - 2022)</p>
                </div>
                <div>
                  <p className="font-medium">St. John's Academy, Bihar</p>
                  <p className="text-sm text-muted-foreground">CBSE-SSC (2019 - 2020)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Interests</h3>
              <p className="mt-2 text-muted-foreground">
                Beyond coding, I enjoy participating in hackathons, contributing to open-source projects, and staying
                updated with the latest technology trends. In my free time, I like to read tech blogs and experiment
                with new frameworks and libraries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

