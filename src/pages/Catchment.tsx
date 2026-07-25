import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import CatchmentMap from "../components/CatchmentMap";
import { CATCHMENT_AREAS, asset } from "../site";
import { ArrowRight, Pin, Globe } from "../components/icons";

export default function Catchment() {
  return (
    <>
      <Seo
        title="Catchment Area | Mendip Maths Tutoring"
        description="In-person maths tuition around Shepton Mallet: Wells, Frome, Glastonbury, Street, Midsomer Norton and the surrounding Mendip villages, plus online lessons worldwide."
        path="/catchment"
      />

      {/* Gorge header band */}
      <section className="band">
        <div className="band-bg">
          <img
            src={asset("assets/gorge.jpg")}
            width={1600}
            height={652}
            fetchPriority="high"
            alt="Cheddar Gorge and the Mendip Hills, Somerset"
          />
        </div>
        <div className="wrap">
          <p className="eyebrow">Catchment</p>
          <h1 className="band-title">Based in Shepton Mallet, teaching everywhere.</h1>
          <p>
            In-person lessons across the heart of Somerset, and online lessons
            wherever you are in the world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">In-person lessons</p>
            <h2>Areas I cover.</h2>
            <p className="lead">
              I&rsquo;m based out of Shepton Mallet and travel to homes across the
              following areas:
            </p>
          </Reveal>

          <Reveal>
            <CatchmentMap />
          </Reveal>

          <Reveal className="catch-box stack-top-sm">
            <ul className="catch-chips">
              {CATCHMENT_AREAS.map((area) => (
                <li className="chip" key={area}>{area}</li>
              ))}
            </ul>

            <div className="catch-note">
              <div className="pin"><Pin width={22} height={22} /></div>
              <p>
                Enquiries from outside this catchment or from very remote locations will be
                considered, but travel costs will affect lesson fees.
              </p>
            </div>
          </Reveal>

          <Reveal className="taster online-band">
            <div className="ic-round"><Globe width={26} height={26} /></div>
            <span className="tag">Online lessons</span>
            <h2>Not local? I teach online, worldwide.</h2>
            <p>
              Live one-to-one online lessons with the same tailored plans, marked homework
              and progress tracking, wherever you are in the world.
            </p>
            <Link to="/contact" className="btn btn-light">
              Arrange an online lesson <ArrowRight />
            </Link>
          </Reveal>

          <div className="hero-actions stack-top">
            <Link to="/contact" className="btn btn-primary">
              Check availability in your area <ArrowRight />
            </Link>
            <Link to="/fees" className="btn btn-outline">See fees</Link>
          </div>
        </div>
      </section>
    </>
  );
}
