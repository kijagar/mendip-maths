import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { ArrowRight, School, BookOpen, Clock, Calendar, Pin } from "../components/icons";

const FEES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One-to-one maths tuition",
  provider: { "@id": "https://www.mendipmaths.com/#business" },
  areaServed: "Somerset, UK",
  offers: [
    { "@type": "Offer", name: "Up to GCSE (Key Stage 3 & GCSE maths)", price: "40", priceCurrency: "GBP" },
    { "@type": "Offer", name: "Up to A-Level (AS & A-Level maths)", price: "45", priceCurrency: "GBP" },
  ],
};

export default function Fees() {
  return (
    <>
      <Seo
        title="Fees | Mendip Maths Tutoring"
        description="Transparent maths tutoring fees: £40 per hour up to GCSE, £45 per hour up to A-Level, plus my cancellation policy."
        path="/fees"
        jsonLd={FEES_JSON_LD}
      />

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
              <div className="label">Up to GCSE <small>Key Stage 3 &amp; GCSE maths</small></div>
              <div className="price">£40<small> / hour</small></div>
            </Reveal>
            <Reveal className="fee-row" delay={1}>
              <div className="ic"><BookOpen /></div>
              <div className="label">Up to A-Level <small>AS &amp; A-Level maths</small></div>
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
          </div>

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
