import { useEffect, useState } from "react";
import { HOSTEL, NAV_LINKS } from "@/lib/site-data";
import { IconArrow } from "./icons";

/** Brand lockup: illustrated arch mark + wordmark. */
function Brand({ className }: { className?: string }) {
  return (
    <a href="#home" className={`brand ${className ?? ""}`} aria-label={`${HOSTEL.name} — home`}>
      <svg
        className="brand__mark"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <path d="M6 34V17L20 6l14 11v17" />
        <path d="M14.5 34V24a5.5 5.5 0 0 1 11 0v10" />
        <path d="M20 12.5v3" stroke="#C86B3C" />
      </svg>
      <span>
        <span className="brand__name">{HOSTEL.shortName}</span>
        <span className="brand__sub">Boys Hostel • ECIL</span>
      </span>
    </a>
  );
}

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${solid || open ? "is-solid" : ""}`}>
        <div className="nav__inner">
          <Brand />
          <nav aria-label="Main">
            <ul className="nav__links">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className="btn btn--dark nav__cta">
            Enquire Now <IconArrow size={16} />
          </a>
          <button
            type="button"
            className={`burger ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`drawer ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn--primary" onClick={() => setOpen(false)}>
          Enquire Now <IconArrow size={16} />
        </a>
      </div>
    </>
  );
}
