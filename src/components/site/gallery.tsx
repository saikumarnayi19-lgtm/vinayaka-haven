import { useEffect, useMemo, useRef, useState } from "react";
import heroRoom from "@/assets/hero-room.jpg";
import study from "@/assets/study.jpg";
import storage from "@/assets/storage.jpg";
import commonArea from "@/assets/common-area.jpg";
import food from "@/assets/food.jpg";
import building from "@/assets/building.jpg";
import { HOSTEL } from "@/lib/site-data";
import { IconArrow, IconStar } from "./icons";
import { useCountUp } from "@/hooks/use-reveal";

type Category = "All" | "Rooms" | "Common Areas" | "Food" | "Facilities" | "Around the Hostel";

const CATEGORIES: Category[] = [
  "All",
  "Rooms",
  "Common Areas",
  "Food",
  "Facilities",
  "Around the Hostel",
];

/* Placeholder imagery — replace each entry with client photography when available. */
const IMAGES: { src: string; alt: string; cat: Exclude<Category, "All">; w: number; h: number }[] =
  [
    {
      src: heroRoom,
      alt: "Room with a made bed, desk and warm daylight",
      cat: "Rooms",
      w: 1200,
      h: 1408,
    },
    {
      src: commonArea,
      alt: "Shared lounge with seating, plants and warm lighting",
      cat: "Common Areas",
      w: 1200,
      h: 912,
    },
    {
      src: food,
      alt: "Everyday vegetarian meal on a steel plate",
      cat: "Food",
      w: 1200,
      h: 912,
    },
    {
      src: storage,
      alt: "Numbered lockers beside wardrobe shelving",
      cat: "Facilities",
      w: 912,
      h: 1104,
    },
    {
      src: study,
      alt: "Study desk with lamp, notebooks and bookshelf",
      cat: "Rooms",
      w: 912,
      h: 1104,
    },
    {
      src: building,
      alt: "Hostel building exterior with balconies",
      cat: "Around the Hostel",
      w: 1200,
      h: 1008,
    },
  ];

export function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const shown = useMemo(
    () => (active === "All" ? IMAGES : IMAGES.filter((i) => i.cat === active)),
    [active],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section className="sec" id="gallery">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Gallery</span>
          <h2>A Look Around</h2>
          <p className="lead">
            Reference imagery shown while client photographs are being collected — every image
            here is a replaceable placeholder.
          </p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter gallery by category">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className="filter"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="masonry">
          {shown.map((img) => (
            <button
              type="button"
              className="tile reveal"
              key={img.src + img.cat}
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
            >
              <img src={img.src} width={img.w} height={img.h} loading="lazy" alt={img.alt} />
              <span className="tile__veil">
                <span>{img.cat}</span>
                <em>View</em>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p>{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export function Testimonials() {
  const scoreRef = useRef<HTMLSpanElement>(null);
  useCountUp(scoreRef, HOSTEL.rating);

  return (
    <section className="sec sec--cream grain">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Testimonials</span>
          <h2>What Residents Say</h2>
        </div>

        <div className="split">
          <div className="quote reveal">
            <blockquote>
              “Good accommodation with homely food and free WiFi, mineral water, lockers is
              provided (if needed) and CCTV available.”
            </blockquote>
            <footer>Google review · Sri Vinayaka Boys Hostel</footer>
          </div>

          <div className="reveal" data-delay="120">
            <div className="score">
              <b>
                <span ref={scoreRef}>{HOSTEL.rating.toFixed(1)}</span>
              </b>
              <span className="muted">/ 5</span>
            </div>
            <div className="stars" aria-hidden="true" style={{ marginTop: 10 }}>
              {[0, 1, 2].map((i) => (
                <IconStar key={i} />
              ))}
            </div>
            <p className="muted" style={{ marginTop: 12 }}>
              {HOSTEL.rating.toFixed(1)} out of 5 from {HOSTEL.reviewCount} Google reviews.
            </p>
            <a
              className="link-underline"
              href={HOSTEL.reviewsHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 22 }}
            >
              View Google Reviews <IconArrow size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
