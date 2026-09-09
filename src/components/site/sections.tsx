import building from "@/assets/building.jpg";
import study from "@/assets/study.jpg";
import storage from "@/assets/storage.jpg";
import heroRoom from "@/assets/hero-room.jpg";
import food from "@/assets/food.jpg";
import {
  DecoSquiggle,
  IconArrow,
  IconBed,
  IconCctv,
  IconCheck,
  IconLocker,
  IconMeal,
  IconWater,
  IconWifi,
  IllustrationSafety,
} from "./icons";

/* ------------------------------- About -------------------------------- */

const ABOUT_POINTS = [
  "Comfortable accommodation",
  "Homely food",
  "Free Wi-Fi",
  "Mineral water",
  "CCTV availability",
  "Lockers when required",
];

export function About() {
  return (
    <section className="sec sec--cream grain" id="about">
      <div className="wrap">
        <div className="split split--wide-left">
          <div className="frame frame--offset reveal-img reveal">
            <img
              src={building}
              width={1200}
              height={1008}
              loading="lazy"
              alt="Exterior of the hostel building with balconies in warm evening light"
            />
          </div>
          <div className="reveal" data-delay="120">
            <span className="eyebrow">About Sri Vinayaka</span>
            <h2 style={{ margin: "18px 0 20px" }}>
              More than a hostel.
              <br />
              A place that feels like home.
            </h2>
            <DecoSquiggle className="deco-inline" />
            <p className="lead" style={{ margin: "18px 0 30px" }}>
              Sri Vinayaka Boys Hostel provides a comfortable and convenient living environment
              for students and working professionals in ECIL. With essential amenities, homely
              food, Wi-Fi connectivity and security features, the hostel is designed to make
              everyday living easier.
            </p>
            <ul className="ticks">
              {ABOUT_POINTS.map((p) => (
                <li key={p}>
                  <IconCheck /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Facilities ----------------------------- */

const FACILITIES = [
  {
    icon: IconWifi,
    title: "Free Wi-Fi",
    text: "Stay connected for study, work and entertainment.",
  },
  {
    icon: IconMeal,
    title: "Homely Food",
    text: "Comforting everyday meals designed to feel like home.",
  },
  { icon: IconWater, title: "Mineral Water", text: "Convenient access to drinking water." },
  {
    icon: IconCctv,
    title: "CCTV Security",
    text: "Security cameras for a safer living environment.",
  },
  { icon: IconLocker, title: "Lockers", text: "Lockers available when required." },
  {
    icon: IconBed,
    title: "Comfortable Rooms",
    text: "A practical and comfortable environment for everyday living.",
  },
];

export function Facilities() {
  return (
    <section className="sec" id="facilities">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Facilities</span>
          <h2>Everything You Need for Everyday Living</h2>
          <p className="lead">
            The essentials, looked after — so your days stay simple and your evenings stay
            restful.
          </p>
        </div>
        <div className="cards">
          {FACILITIES.map(({ icon: Icon, title, text }, i) => (
            <article className="card reveal" data-delay={i * 70} key={title}>
              <div className="card__icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Rooms ------------------------------- */

export function Rooms() {
  return (
    <section className="sec sec--beige" id="rooms">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Room Experience</span>
          <h2>Your Space. Your Routine. Your Comfort.</h2>
        </div>

        <div className="rooms__grid">
          <div className="frame rooms__main reveal-img reveal">
            <img
              src={heroRoom}
              width={1200}
              height={1408}
              loading="lazy"
              alt="Hostel room with a single bed, storage under the bed and a desk beside the window"
            />
          </div>
          <div className="rooms__side">
            <div className="frame reveal-img reveal" data-delay="100">
              <img
                src={study}
                width={912}
                height={1104}
                loading="lazy"
                alt="Study corner with a wooden desk, lamp, notebooks and a bookshelf"
              />
            </div>
            <div className="frame reveal-img reveal" data-delay="180">
              <img
                src={storage}
                width={912}
                height={1104}
                loading="lazy"
                alt="Wardrobe shelving beside numbered lockers for personal storage"
              />
            </div>
          </div>
        </div>

        <div className="split" style={{ marginTop: 64 }}>
          <div className="reveal">
            <h3>Designed around an everyday routine</h3>
            <p className="lead" style={{ marginTop: 16 }}>
              Space to rest, space to study and space to keep your things — arranged so the room
              stays easy to live in and easy to keep clean.
            </p>
            <p className="note" style={{ marginTop: 24 }}>
              Room details available on enquiry.
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a href="#contact" className="btn btn--dark">
                Check Room Availability <IconArrow size={16} />
              </a>
            </div>
          </div>
          <ul className="spec-list reveal" data-delay="120">
            <li>
              <span>Comfortable sleeping space</span>
              <span>Included</span>
            </li>
            <li>
              <span>Study / work area</span>
              <span>Included</span>
            </li>
            <li>
              <span>Storage</span>
              <span>Lockers when required</span>
            </li>
            <li>
              <span>Ventilation</span>
              <span>Details on enquiry</span>
            </li>
            <li>
              <span>Clean environment</span>
              <span>Maintained daily</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Food ------------------------------- */

export function Food() {
  return (
    <section className="sec" id="food">
      <div className="wrap">
        <div className="split">
          <div className="reveal">
            <span className="eyebrow">Food</span>
            <h2 style={{ margin: "18px 0 20px" }}>Homely Food, Every Day</h2>
            <p className="lead">
              Good food makes a place feel like home. Sri Vinayaka Boys Hostel offers homely food
              as part of the everyday living experience.
            </p>
            <p className="note" style={{ marginTop: 26 }}>
              Menu and meal timings available on enquiry.
            </p>
          </div>
          <div className="frame frame--offset reveal-img reveal" data-delay="120">
            <img
              src={food}
              width={1200}
              height={912}
              loading="lazy"
              alt="Everyday vegetarian meal served on a steel plate with rice, dal, curry, vegetables and chapati"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Safety ------------------------------ */

const SAFETY = [
  "CCTV Available",
  "Secure Living Environment",
  "Lockers Available",
  "24/7 Accessibility",
];

export function Safety() {
  return (
    <section className="sec sec--dark grain">
      <div className="wrap">
        <div className="split">
          <div className="reveal">
            <span className="eyebrow">Safety</span>
            <h2 style={{ margin: "18px 0 20px" }}>Comfort With Peace of Mind</h2>
            <p className="lead">
              Simple, practical measures that make daily living feel settled — for residents and
              for the families who worry about them.
            </p>
            <ul className="ticks ticks--dark" style={{ marginTop: 34 }}>
              {SAFETY.map((s) => (
                <li key={s}>
                  <IconCheck /> {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="safety-illo reveal" data-delay="140">
            <IllustrationSafety />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Why us ------------------------------- */

const WHY = [
  {
    n: "01",
    title: "Homely atmosphere",
    text: "A calm, lived-in place rather than an institutional one.",
  },
  {
    n: "02",
    title: "Essential amenities",
    text: "Wi-Fi, mineral water, homely food and lockers when required.",
  },
  {
    n: "03",
    title: "Convenient ECIL location",
    text: "Located in South Kamala Nagar, ECIL, Moula Ali.",
  },
  {
    n: "04",
    title: "Connectivity for study & work",
    text: "Wi-Fi connectivity to support classes, projects and remote work.",
  },
  {
    n: "05",
    title: "Security-conscious environment",
    text: "CCTV availability and lockers for personal belongings.",
  },
];

export function WhyUs() {
  return (
    <section className="sec sec--cream grain">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Everything That Makes Daily Life Easier</h2>
        </div>
        <div className="why-list">
          {WHY.map((w, i) => (
            <article className="why reveal" data-delay={i * 80} key={w.n}>
              <div className="why__num" aria-hidden="true">
                {w.n}
              </div>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
              <IconArrow />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
