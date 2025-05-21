"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Code, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024) // Adjusted for medium and small devices
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // ✅ Close sidebar when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/achievements", label: "Achievements" },
    // { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="rounded-full bg-primary p-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Code className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Naman Verma</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="hover:bg-primary/10 transition-colors">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="grid gap-6 py-6">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      onClick={() => setTimeout(() => setOpen(false), 100)}
                      className={cn(
                        "flex items-center text-lg font-medium transition-all duration-300 hover:text-primary hover:translate-x-2",
                        pathname === route.href
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative group",
                    pathname === route.href
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {route.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === route.href && "w-full"
                  )} />
                </Link>
              ))}
            </nav>
            <ModeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
