import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="border-border mt-20 border-t">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Sugeng Priyanto. Built with care.</p>
        <Link className="hover:text-foreground transition-colors" href="mailto:hello@sugeng.dev">
          Let&apos;s work together →
        </Link>
      </div>
    </footer>
  )
}
