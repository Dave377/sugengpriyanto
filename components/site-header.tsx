"use client"

import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useState, useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navigation = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
]

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="border-border/60 bg-background/90 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          Sugeng Priyanto
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground rounded-full px-3 py-2 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button size="lg" render={<Link href="/start-project" />} nativeButton={false}>
            Start a project
          </Button>
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="hover:bg-muted flex size-10 items-center justify-center rounded-full transition-colors md:hidden"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={`${isMenuOpen ? "grid" : "hidden"} border-border/60 bg-background border-t px-4 py-3 md:hidden`}>
        <nav aria-label="Mobile navigation" className="grid gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-3 py-3 text-sm transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="mt-2 w-full" size="lg" render={<Link href="/start-project" />} nativeButton={false} onClick={closeMenu}>
            Start a project
          </Button>
          <ThemeToggle mobile />
        </nav>
      </div>
    </header>
  )
}

function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  )

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={mobile
        ? "text-muted-foreground hover:bg-muted hover:text-foreground flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors"
        : "hover:bg-muted flex size-10 items-center justify-center rounded-full transition-colors"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      {mobile && <span>{isDark ? "Light mode" : "Dark mode"}</span>}
    </button>
  )
}
