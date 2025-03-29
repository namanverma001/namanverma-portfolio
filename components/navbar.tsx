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
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // ✅ Close sidebar automatically when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname]) // 🔹 Runs whenever pathname changes

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/achievements", label: "Achievements" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-primary p-1">
            <Code className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">Naman Verma</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-4 py-6">
                  {routes.map((route) => (
                    <button
                      key={route.href}
                      onClick={() => router.push(route.href)}
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-primary",
                        pathname === route.href ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {route.label}
                    </button>
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
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {route.label}
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
