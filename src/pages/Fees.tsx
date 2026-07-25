import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import JsonLd from "../components/JsonLd";
import { ArrowRight, School, BookOpen, Clock, Calendar, Pin, Globe } from "../components/icons";

const FEES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One-to-one maths tuition",
  provider: { "@id": "https://mendip-maths.com/#business" },
  areaServed: "Somerset, UK",
  offers: [
    { "@type": "Offer", name: "Up to GCSE (Key Stage 3, GCSE & IGCSE maths)", price: "40", priceCurrency: "GBP" },
    { "@type": "Offer", name: "Up to A-Level (AS, A-Level & IB maths)", price: "45", priceCurrency: "GBP" },
  ],
};

const FAQS = [
  {
    q: "Where do you offer in-person lessons?",
    a: "I am based in Shepton Mallet and travel to homes across the Mendips and Somerset, including Wells, Frome, Glastonbury, Street, Midsomer Norton and the surrounding villages.",
  },
  {
    q: "Do you teach online?",
    a: "Yes. I teach live one-to-one online lessons worldwide, with the same tailored plans, marked homework and progress tracking as in-person lessons.",
  },
  {
    q: "How much do lessons cost?",
    a: "Lessons are £40 per hour up to GCSE and IGCSE (including Key Stage 3), and £45 per hour up to A-Level and IB.",
  },
  {
    q: "Which qualifications do you cover?",
    a: "Key Stage 3, GCSE, IGCSE, AS and A-Level, and the International Baccalaureate (IB), across all major UK exam boards.",
  },
  {
    q: "Can you support students with ADHD, autism or dyslexia?",
    a: "Yes. Supporting students with diverse learning needs is my specialism, developed through years of alternative-provision teaching.",
  },
  {
    q: "Is the taster lesson really free?",
    a: "Yes. The first taster lesson is completely free, with no commitment and no payment details needed.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Fees() {
  return (
    <>
      <Seo
        title="Fees | Mendip Maths Tutoring"
        description="Transparent maths tutoring fees: £40 per hour up to GCSE and IGCSE, £45 per hour up to A-Level and IB, plus my cancellation policy."
        path="/fees"
      />
      <JsonLd data={FEES_JSON_LD} />
      <JsonLd data={FAQ_JSON_LD} />

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Fees</p>
            <h1>Simple, transparent pricing.</h1>
            <p className="lead">
              One-to-one, in-home lessons charged per hour. No hidden costs, just expert tuition
              tailored to your child.
            </p>
          </Reveal>

          <div className="fees-list">
            <Reveal className="fee-row">
              <div className="ic"><School /></div>
              <div className="label">Up to GCSE <small>Key Stage 3, GCSE &amp; IGCSE maths</small></div>
              <div className="price">£40<small> / hour</small></div>
            </Reveal>
            <Reveal className="fee-row" delay={1}>
              <div className="ic"><BookOpen /></div>
              <div className="label">Up to A-Level <small>AS, A-Level &amp; IB maths</small></div>
              <div className="price">£45<small> / hour</small></div>
            </Reveal>
          </div>

          <div className="notes">
            <Reveal className="note">
              <div className="ic"><Clock /></div>
              <p><b>Term-time cancellations.</b> For cancellations with less than 48 hours&rsquo; notice, the full lesson fee will be payable.</p>
            </Reveal>
            <Reveal className="note" delay={1}>
              <div className="ic"><Calendar /></div>
              <p><b>Holiday-time sessions.</b> For sessions during school holidays, two weeks&rsquo; cancellation notice is required.</p>
            </Reveal>
            <Reveal className="note" delay={2}>
              <div className="ic"><Pin /></div>
              <p>
                <b>Travel.</b> Enquiries from outside my catchment or from very remote locations
                will be considered, but travel costs will affect lesson fees.{" "}
                <Link to="/catchment" className="inline-link">See catchment →</Link>
              </p>
            </Reveal>
            <Reveal className="note" delay={3}>
              <div className="ic"><Globe /></div>
              <p>
                <b>Online lessons.</b> Lessons are also available online, worldwide. Get in touch
                to arrange a time that suits your time zone.
              </p>
            </Reveal>
          </div>

          <Reveal className="faq stack-top">
            <p className="eyebrow">Common questions</p>
            <h2 className="faq-title">Frequently asked questions.</h2>
            {FAQS.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </Reveal>

          <div className="hero-actions stack-top">
            <Link to="/contact" className="btn btn-primary">
              Book a free taster lesson <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">Ask a question</Link>
          </div>
        </div>
      </section>
    </>
  );
}
