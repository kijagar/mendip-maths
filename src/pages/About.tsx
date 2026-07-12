import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { asset } from "../site";
import { ArrowRight } from "../components/icons";

const STATS = [
  { value: "15", label: "years’ teaching experience" },
  { value: "All", label: "major exam boards" },
  { value: "1:1", label: "fully tailored tuition" },
] as const;

export default function About() {
  const [photoMissing, setPhotoMissing] = useState(false);

  return (
    <>
      <Seo
        title="About Ryan Garvey | Mendip Maths Tutoring"
        description="Meet Ryan Garvey, founder of Mendip Maths Tutoring, a maths graduate with 15 years' teaching experience and a specialism in supporting students with ADHD, autism and dyslexia."
        path="/about"
        image="/assets/ryan.jpg"
      />

      <section className="section">
        <div className="wrap">
          <div className="about-grid">
            <Reveal className="portrait">
              {photoMissing ? (
                <div className="ph">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                  </svg>
                  <span>Photo coming soon</span>
                </div>
              ) : (
                <img
                  src={asset("assets/ryan.jpg")}
                  width={1100}
                  height={1100}
                  alt="Ryan Garvey, founder of Mendip Maths Tutoring"
                  onError={() => setPhotoMissing(true)}
                />
              )}
            </Reveal>

            <Reveal className="about-bio" delay={1}>
              <p className="eyebrow">Hi, I&rsquo;m Ryan Garvey</p>
              <h1>The founder of Mendip Maths Tutoring.</h1>
              <p>
                With a degree in Mathematics from the University of Manchester and fifteen years
                of classroom experience, I&rsquo;m dedicated to helping students unlock their full
                potential in maths.
              </p>
              <p>
                Over the last decade and a half, I&rsquo;ve taught in a variety of educational
                settings both in the UK and overseas. I have a proven track record of helping
                students excel at GCSE and A-Level across all major exam boards, with many of my
                former students moving on to study at top UK universities.
              </p>
              <p>
                In 2022, I relocated to Somerset and transitioned into alternative provision. This
                rewarding work has allowed me to specialise in supporting students with diverse
                learning needs, including ADHD, autism and dyslexia.
              </p>
              <p>
                I believe that every student&rsquo;s goals are unique and worth celebrating.
                Whether you&rsquo;re aiming for an A* at A-Level to secure a university place, or
                working hard to get that crucial Grade 4 or 5 at GCSE, I&rsquo;m here to help you
                build confidence and achieve success.
              </p>
              <p className="sig" translate="no">Ryan Garvey</p>

              <div className="stats">
                {STATS.map((stat, i) => (
                  <Reveal className="stat" key={stat.label} delay={i as 0 | 1 | 2}>
                    <b>{stat.value}</b><span>{stat.label}</span>
                  </Reveal>
                ))}
              </div>

              <div className="hero-actions stack-top">
                <Link to="/contact" className="btn btn-primary">
                  Book a free taster lesson <ArrowRight />
                </Link>
                <Link to="/what-i-offer" className="btn btn-outline">What I offer</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
