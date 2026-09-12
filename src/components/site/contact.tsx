import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { HOSTEL, NAV_LINKS } from "@/lib/site-data";
import {
  DecoSquiggle,
  IconArrow,
  IconClock,
  IconMap,
  IconPhone,
  IconPin,
  IconWhatsapp,
  IllustrationMap,
} from "./icons";

export function Location() {
  return (
    <section className="sec sec--beige" id="location">
      <div className="wrap">
        <div className="location-grid">
          <div className="reveal">
            <span className="eyebrow">Location</span>
            <h2>Well Connected in ECIL</h2>
            <p className="lead">
              Conveniently located in South Kamala Nagar, with everyday essentials and transport
              connections within easy reach.
            </p>
            <div className="location-details">
              <div className="info-row">
                <IconPin />
                <div>
                  <h4>Address</h4>
                  <p>{HOSTEL.address}</p>
                </div>
              </div>
              <div className="info-row">
                <IconPhone />
                <div>
                  <h4>Phone</h4>
                  <a href={HOSTEL.phoneHref}>{HOSTEL.phoneDisplay}</a>
                </div>
              </div>
              <div className="info-row">
                <IconClock />
                <div>
                  <h4>Visits</h4>
                  <p>Call ahead to arrange a convenient time.</p>
                </div>
              </div>
            </div>
            <a
              className="btn btn--dark location-button"
              href={HOSTEL.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconMap size={17} /> Get Directions
            </a>
          </div>

          <div className="map-frame reveal" data-delay="120">
            <IllustrationMap className="map-illustration" />
            <iframe
              title="Map showing Sri Vinayaka Boys Hostel in South Kamala Nagar, ECIL"
              src={HOSTEL.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Enquiry() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Sri Vinayaka Boys Hostel, I would like to enquire about room availability.",
      `Name: ${String(data.get("name") ?? "")}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Moving in: ${String(data.get("moveIn") ?? "Not specified")}`,
      `I am a: ${String(data.get("residentType") ?? "Not specified")}`,
      `Message: ${String(data.get("message") ?? "Not specified")}`,
    ].join("\n");

    setSent(true);
    window.open(`${HOSTEL.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="reveal">
            <span className="eyebrow">Enquire</span>
            <h2>Find Your Place at Sri Vinayaka</h2>
            <DecoSquiggle className="deco-inline" />
            <p className="lead">
              Tell us what you need and continue the conversation directly on WhatsApp.
            </p>
            <div className="contact-direct">
              <a href={HOSTEL.phoneHref}>
                <IconPhone />
                <span>
                  <small>Call us</small>
                  {HOSTEL.phoneDisplay}
                </span>
              </a>
              <a href={HOSTEL.whatsappHref} target="_blank" rel="noopener noreferrer">
                <IconWhatsapp />
                <span>
                  <small>Message us</small>
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          <form className="form reveal" data-delay="120" onSubmit={submit}>
            <div className="form__row">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" autoComplete="name" required placeholder="Enter your name" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  placeholder="Enter your number"
                />
              </div>
            </div>
            <div className="form__row">
              <div className="field">
                <label htmlFor="moveIn">Expected move-in</label>
                <input id="moveIn" name="moveIn" type="date" />
              </div>
              <div className="field">
                <label htmlFor="residentType">You are a</label>
                <select id="residentType" name="residentType" defaultValue="Student">
                  <option>Student</option>
                  <option>Working professional</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="message">Anything else?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Room preference, questions or a suitable time to visit"
              />
            </div>
            <Button type="submit" className="btn btn--primary form__submit">
              Send Enquiry on WhatsApp <IconArrow size={16} />
            </Button>
            <p className={sent ? "form__msg" : "form__hint"} aria-live="polite">
              {sent
                ? "Your enquiry is ready in WhatsApp — tap send to reach us."
                : "Your details are only used to prepare your WhatsApp message."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function FinalCallToAction() {
  return (
    <section className="final grain">
      <div className="wrap final__inner reveal">
        <span className="eyebrow">Come See for Yourself</span>
        <h2>Your Comfortable Stay Starts Here.</h2>
        <p>Call us or arrange a visit to check current room availability.</p>
        <div className="btn-row">
          <a href="#contact" className="btn btn--light">
            Book a Visit <IconArrow size={16} />
          </a>
          <a href={HOSTEL.phoneHref} className="btn btn--outline-light">
            <IconPhone size={16} /> Call {HOSTEL.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="brand" aria-label={`${HOSTEL.name} — home`}>
              <svg className="brand__mark" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M6 34V17L20 6l14 11v17" />
                <path d="M14.5 34V24a5.5 5.5 0 0 1 11 0v10" />
                <path className="brand__accent" d="M20 12.5v3" />
              </svg>
              <span>
                <span className="brand__name">{HOSTEL.shortName}</span>
                <span className="brand__sub">Boys Hostel • ECIL</span>
              </span>
            </a>
            <p>{HOSTEL.tagline}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.filter((link) => link.label !== "Home").map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{HOSTEL.address}</li>
              <li><a href={HOSTEL.phoneHref}>{HOSTEL.phoneDisplay}</a></li>
              <li><a href={HOSTEL.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp enquiry</a></li>
              <li><a href={HOSTEL.mapsHref} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 {HOSTEL.name}. All rights reserved.</span>
          <span>South Kamala Nagar • ECIL • Hyderabad</span>
        </div>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick contact">
      <a href={HOSTEL.phoneHref}><IconPhone size={19} /> Call</a>
      <a href={HOSTEL.whatsappHref} target="_blank" rel="noopener noreferrer"><IconWhatsapp size={19} /> WhatsApp</a>
      <a href={HOSTEL.mapsHref} target="_blank" rel="noopener noreferrer"><IconMap size={19} /> Directions</a>
    </nav>
  );
}