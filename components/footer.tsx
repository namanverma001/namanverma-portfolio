import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Naman Verma. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/namanverma001"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted-foreground hover:text-muted"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/naman-verma-824baa257/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted-foreground hover:text-muted"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:namanverma0219@gmail.com"
            className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-muted-foreground hover:text-muted"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

