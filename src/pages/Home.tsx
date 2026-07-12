import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { asset } from "../site";
import { ArrowRight, Plus, Clock, GradCap, Pin, Globe, Target, House, Notebook, TrendUp } from "../components/icons";

const OFFER_CARDS = [
  {
    icon: Target,
    title: "Tailored learning plans",
    body: "A unique pathway designed around your child’s academic needs, strengths and goals, never a one-size-fits-all curriculum.",
  },
  {
    icon: House,
    title: "In-home & online lessons",
    body: "Skip the after-school rush. Focused one-hour sessions at your home across Somerset, or live online worldwide.",
  },
  {
    icon: Notebook,
    title: "Reinforced learning & feedback",
    body: "Targeted homework, thoroughly marked, with constructive feedback so concepts genuinely stick between lessons.",
  },
  {
    icon: TrendUp,
    title: "Measurable progress",
    body: "Regular, low-stress assessments keep you updated every step of the way, so you can celebrate real success.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Seo
        title="Mendip Maths Tutoring | Confident Maths, Real Progress"
        description="One-to-one maths tutoring across the Mendips and Somerset, plus online lessons worldwide. GCSE & A-Level, tailored learning plans, and specialist support for ADHD, autism and dyslexia. Free taster lesson."
        path="/"
      />

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src={asset("assets/tor.jpg")}
            width={2400}
            height={1231}
            fetchPriority="high"
            alt="A railway viaduct in golden evening light over the Somerset countryside near Shepton Mallet"
          />
        </div>
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Maths tuition across the Mendips</Reveal>
          <Reveal as="h1" delay={1}>Confident maths.<br /><em>Real progress.</em></Reveal>
          <Reveal as="p" delay={2} className="lead">
            One-to-one tuition built around your child: GCSE and A-Level support that turns
            anxiety into understanding, and understanding into results.
          </Reveal>
          <Reveal delay={3} className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a free taster lesson <ArrowRight />
            </Link>
            <Link to="/fees" className="btn btn-outline">See fees</Link>
          </Reveal>
        </div>
      </section>

      {/* ===== Trust strip ===== */}
      <div className="trust">
        <div className="wrap">
          <span className="item"><Plus /> Maths degree, University of Manchester</span>
          <span className="item"><Clock /> 15 years&rsquo; teaching experience</span>
          <span className="item"><GradCap /> GCSE &amp; A-Level, all exam boards</span>
          <span className="item"><Pin /> Based in Shepton Mallet</span>
          <span className="item"><Globe /> Online lessons worldwide</span>
        </div>
      </div>

      {/* ===== Intro / approach ===== */}
      <section className="section">
        <div className="wrap split">
          <Reveal as="figure" className="media-frame">
            <img
              src={asset("assets/ryan.jpg")}
              width={1100}
              height={1100}
              loading="lazy"
              alt="Ryan Garvey, founder of Mendip Maths Tutoring"
            />
            <figcaption><b translate="no">Ryan Garvey</b><span>Founder &amp; tutor</span></figcaption>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow">Old-school values, new-school thinking</p>
            <h2>Tuition that meets your child where they are.</h2>
            <p>
              I&rsquo;m Ryan Garvey, founder of Mendip Maths Tutoring. With a maths degree and
              fifteen years in classrooms across the UK and overseas, I&rsquo;ve specialised since
              moving to Somerset in supporting students with diverse learning needs, including
              ADHD, autism and dyslexia.
            </p>
            <p>
              No cookie-cutter curriculum. Every student gets a learning plan built around their
              goals, whether that&rsquo;s an A* at A-Level, a place at a top university, or the
              crucial Grade 4 or 5 at GCSE.
            </p>
            <Link to="/about" className="btn btn-outline">
              Meet Ryan Garvey <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== What I offer (preview) ===== */}
      <section className="section stone">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">What I offer</p>
            <h2>Everything built around one student: yours.</h2>
            <p className="lead">Focused one-to-one lessons, at your home or online, with structure, feedback and progress you can actually see.</p>
          </Reveal>
          <div className="cards">
            {OFFER_CARDS.map((card, i) => (
              <Reveal as="article" className="card" key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="ic"><card.icon /></div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Gorge band / catchment teaser ===== */}
      <section className="band">
        <div className="band-bg">
          <img
            src={asset("assets/gorge.jpg")}
            width={2400}
            height={979}
            loading="lazy"
            alt="Cheddar Gorge and the Mendip Hills, Somerset"
          />
        </div>
        <div className="wrap">
          <p className="eyebrow">Proudly local</p>
          <h2>Rooted in the Mendips and the Somerset Levels.</h2>
          <p>
            Based out of Shepton Mallet, I cover Wells, Frome, Glastonbury, Street, Midsomer
            Norton and the surrounding villages, bringing expert maths tuition right to your door.
          </p>
          <div className="hero-actions band-actions">
            <Link to="/catchment" className="btn btn-light">
              View my catchment area <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Closing CTA ===== */}
      <section className="section cta-band">
        <div className="wrap">
          <p className="eyebrow center">Free taster lesson</p>
          <h2>Not sure where to start?</h2>
          <p className="lead">
            Get in touch and I&rsquo;ll arrange a completely free taster lesson. No commitment,
            no payment details needed.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get in touch <ArrowRight />
            </Link>
            <a href="tel:07889733873" className="btn btn-outline">07889&nbsp;733&nbsp;873</a>
          </div>
        </div>
      </section>
    </>
  );
}
