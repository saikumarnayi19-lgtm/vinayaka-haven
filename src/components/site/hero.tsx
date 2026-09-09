import heroRoom from "@/assets/hero-room.jpg";
import { HOSTEL } from "@/lib/site-data";
import {
  DecoBlob,
  DecoSquiggle,
  DecoStar,
  IconArrow,
  IconBed,
  IconCctv,
  IconClock,
  IconLocker,
  IconMeal,
  IconPhone,
  IconWater,
  IconWifi,
} from "./icons";

export function Hero() {
  return (
    <section className="hero grain" id="home">
      {/* decorative illustrated shapes */}
      <DecoBlob
        className="deco deco--green"
        // eslint-disable-next-line react/forbid-dom-props
      />
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="eyebrow rise rise--1">Premium Boys Hostel • ECIL</span>
            <h1 className="rise rise--1">
              A Comfortable Place to Stay.
              <br />
              A <em>Better</em> Place to Live.
            </h1>
            <p className="lead rise rise--2">
              A clean, secure and homely stay for students and working professionals in ECIL,
              Hyderabad.
            </p>
            <div className="btn-row rise rise--3">
              <a href="#contact" className="btn btn--primary">
                Book a Visit <IconArrow size={16} />
              </a>
              <a href={HOSTEL.phoneHref} className="btn btn--ghost">
                <IconPhone size={16} /> Call Now
              </a>
            </div>
            <p className="muted rise rise--4" style={{ marginTop: 4 }}>
              {HOSTEL.address}
            </p>
          </div>

          <div className="hero__media rise rise--2">
            <div className="hero__photo">
              <img
                src={heroRoom}
                width={1200}
                height={1408}
                alt="Hostel room with a neatly made bed, study desk and warm daylight from a large window"
                fetchPriority="high"
              />
            </div>

            <span className="chip chip--a">
              <IconCctv size={16} /> 24/7 Security
            </span>
            <span className="chip chip--b">
              <IconWifi size={16} /> Free Wi-Fi
            </span>
            <span className="chip chip--c">
              <IconMeal size={16} /> Homely Food
            </span>
            <span className="chip chip--d">
              <IconBed size={16} /> Clean Rooms
            </span>

            <DecoSquiggle className="deco" />
            <DecoStar className="deco deco--gold" />
          </div>
        </div>
      </div>
    </section>
  );
}

const FACTS = [
  { icon: IconClock, label: "24/7 Availability" },
  { icon: IconWifi, label: "Free Wi-Fi" },
  { icon: IconMeal, label: "Homely Food" },
  { icon: IconWater, label: "Mineral Water" },
  { icon: IconCctv, label: "CCTV Security" },
  { icon: IconLocker, label: "Lockers Available" },
];

export function QuickFacts() {
  return (
    <section className="facts" aria-label="Quick facts">
      <div className="wrap" style={{ padding: 0 }}>
        <div className="facts__grid">
          {FACTS.map(({ icon: Icon, label }) => (
            <div className="fact" key={label}>
              <Icon size={26} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
