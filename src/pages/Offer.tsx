import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { asset } from "../site";
import { ArrowRight, Target, House, Notebook, TrendUp } from "../components/icons";

const OFFERS = [
  {
    num: "01",
    icon: Target,
    title: "Tailored learning plans",
    body: "I design a unique learning pathway built entirely around your child’s academic needs, strengths and goals, so every lesson moves them forward.",
  },
  {
    num: "02",
    icon: House,
    title: "Convenient in-home lessons",
    body: "Skip the stressful after-school rush. I come directly to you, with focused one-hour sessions in the comfort and safety of your own home.",
  },
  {
    num: "03",
    icon: Notebook,
    title: "Reinforced learning & feedback",
    body: "Learning doesn’t stop when the hour is up. I set targeted homework tasks, mark them thoroughly, and give constructive feedback so concepts truly stick.",
  },
  {
    num: "04",
    icon: TrendUp,
    title: "Measurable progress",
    body: "You’ll never have to guess how your child is doing. Regular, low-stress assessments keep you updated every step of the way so you can celebrate their success.",
  },
] as const;

export default function Offer() {
  return (
    <>
      <Seo
        title="What I Offer | Mendip Maths Tutoring"
        description="Tailored learning plans, convenient in-home lessons, reinforced learning with feedback, and measurable progress: maths tuition designed around your child."
        path="/what-i-offer"
      />

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">What I offer</p>
            <h1>Maths tuition, built around your child.</h1>
            <p className="lead">
              No cookie-cutter curriculums here. Every element of my tutoring is designed to give
              your child structure, confidence, and progress you can see.
            </p>
          </Reveal>

          <div className="cards">
            {OFFERS.map((offer, i) => (
              <Reveal as="article" className="card" key={offer.num} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <span className="num">{offer.num}</span>
                <div className="ic"><offer.icon /></div>
                <h3>{offer.title}</h3>
                <p>{offer.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialist support band */}
      <section className="band">
        <div className="band-bg">
          <img
            src={asset("assets/gorge.jpg")}
            width={2400}
            height={979}
            loading="lazy"
            alt="The Mendip Hills, Somerset"
          />
        </div>
        <div className="wrap">
          <p className="eyebrow">Specialist, inclusive support</p>
          <h2>Experienced with diverse learning needs.</h2>
          <p>
            Through years of alternative-provision teaching, I specialise in supporting students
            with ADHD, autism and dyslexia, adapting pace, materials and approach so every learner
            can thrive.
          </p>
          <div className="hero-actions band-actions">
            <Link to="/about" className="btn btn-light">
              Read my story <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-band stone">
        <div className="wrap">
          <p className="eyebrow center">Free taster lesson</p>
          <h2>See it for yourself.</h2>
          <p className="lead">Book a completely free taster lesson. No commitment, no payment details needed.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get in touch <ArrowRight />
            </Link>
            <Link to="/fees" className="btn btn-outline">See fees</Link>
          </div>
        </div>
      </section>
    </>
  );
}
