import { MarqueeEffect } from "@/components/marquee-effect";
import Image from "next/image"

const logos = [
  {
    name: "Next.js",
    img: "/icons/tech-stack/Next.js Logo - Colored - zonalogo.com.svg"
  },
  {
    name: "React",
    img: "/icons/tech-stack/React Icon - Colored - zonalogo.com.svg"
  },
  {
    name: "Tailwind CSS",
    img: "/icons/tech-stack/Tailwind CSS Icon - Colored - zonalogo.com.svg"
  },
  {
    name: "Supabase",
    img: "/icons/tech-stack/Supabase Icon - Colored - zonalogo.com.svg"
  },
  {
    name: "Framer",
    img: "/icons/tech-stack/Framer Icon - Black - zonalogo.com.svg"
  },
  {
    name: "Shopify",
    img: "/icons/tech-stack/Shopify Icon - Colored - zonalogo.com.svg"
  },
  {
    name: "Webflow",
    img: "/icons/tech-stack/Webflow Icon - Colored - zonalogo.com.svg"
  }
];

export default function LogoClouds() {
  return (
    <section className="border-border border-y py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-muted-foreground mb-7 text-center text-sm font-medium uppercase tracking-wider">
          Tools I work with
        </p>
        {logos.length > 0 && (
          <MarqueeEffect className="mask-r-from-80% mask-l-from-80%" gap={64}>
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-3">
                <Image src={logo.img} width={28} height={28} className="size-7 opacity-60 grayscale dark:invert" alt="" aria-hidden="true" />
                <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </MarqueeEffect>
        )}
      </div>
    </section>
  );
}
