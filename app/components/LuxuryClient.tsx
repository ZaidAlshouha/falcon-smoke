"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  name: string;
  description: string;
  image: string;
};

const wa = "https://wa.me/962777961408";

const navItems = [
  {
    id: "molasses",
    href: "#molasses",
    label: "معسل",
  },
  {
    id: "charcoal",
    href: "#charcoal",
    label: "فحم",
  },
  {
    id: "hookahs",
    href: "#hookahs",
    label: "أراجيل",
  },
  {
    id: "accessories",
    href: "#accessories",
    label: "مستلزمات",
  },
  {
    id: "contact",
    href: "#contact",
    label: "تواصل",
  },
];

export function FalconMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "falcon-mark small" : "falcon-mark"} aria-hidden="true">
      <svg viewBox="0 0 82 64" role="img">
        <path d="M42 6c11 0 19 4 27 11l-13-3 15 13-19-8 10 15-18-11 3 17-10-14-5 17-2-19-11 13 5-19L8 27l19-12-11-1C25 8 32 6 42 6Z" />
        <path d="M35 20c6-9 17-12 27-8-8 1-13 4-16 9l8 1-11 7-8-9Z" />
      </svg>
    </span>
  );
}

export function WhatsAppIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M27.3 4.7A15.8 15.8 0 0 0 2.5 23.8L.3 31.7l8.1-2.1a15.8 15.8 0 0 0 18.9-24.9ZM16.1 28.9c-2.5 0-5-.7-7.1-1.9l-.5-.3-4.8 1.2L5 23.2l-.3-.5A13.1 13.1 0 1 1 16.1 28.9Zm7.2-9.8c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.6-.2.3-.5.3-.9.1-2.3-1.1-3.8-2.1-5.3-4.7-.4-.7.4-.7 1.1-2.2.1-.3.1-.6 0-.8l-1.2-2.9c-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.1 8.1 7.1 3 .9 4.1 1 5.6.8 1-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
    </svg>
  );
}

export function BrandSignature() {
  return (
    <span className="brand-signature" aria-label="FalconSmoke">
      <FalconMark small />
      <span><b>Falcon</b>Smoke</span>
    </span>
  );
}

export function LuxuryHeader() {
  const [active, setActive] = useState("molasses");

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-42% 0px -52% 0px", threshold: [0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="luxury-nav">
      <a href="#top" className="nav-brand" aria-label="العودة إلى بداية الصفحة"><BrandSignature /></a>
      <nav aria-label="أقسام الموقع">
        {navItems.map((item) => <a key={item.id} href={item.href} className={active === item.id ? "active" : ""}>{item.label}</a>)}
      </nav>
      <a className="nav-whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><WhatsAppIcon /><span>واتساب</span></a>
    </header>
  );
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="stat-item">
      <b dir="ltr" className="stat-number">
        {value}
        {suffix}
      </b>

      <span>{label}</span>
    </div>
  );
}