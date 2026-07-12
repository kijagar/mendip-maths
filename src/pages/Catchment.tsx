import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { CATCHMENT_AREAS, asset } from "../site";
import { ArrowRight, Pin } from "../components/icons";

export default function Catchment() {
  return (
    <>
      <Seo
        title="Catchment Area | Mendip Maths Tutoring"
        description="Based out of Shepton Mallet, Mendip Maths Tutoring covers Wells, Frome, Glastonbury, Street, Midsomer Norton and the surrounding Mendip villages."
        path="/catchment"
      />

      {/* Gorge header band */}
      <section className="band">
        <div className="band-bg">
          <img
            src={asset("assets/gorge.jpg")}
            width={2400}
            height={979}
            fetchPriority="high"
            alt="Cheddar Gorge and the Mendip Hills, Somerset"
          />
        </div>
        <div className="wrap">
          <p className="eyebrow">Catchment</p>
          <h1 className="band-title">Based in Shepton Mallet, serving the Mendips.</h1>
          <p>I bring expert one-to-one maths tuition directly to homes across the heart of Somerset.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="catch-box">
            <p className="eyebrow">Areas I cover</p>
            <h2 className="catch-title">I&rsquo;m based out of Shepton Mallet and cover the following areas:</h2>
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
