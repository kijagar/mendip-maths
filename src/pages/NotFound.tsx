import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { ArrowRight } from "../components/icons";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Mendip Maths Tutoring"
        description="That page doesn't exist. Head back to Mendip Maths Tutoring's home page."
        path="/404"
      />
      <section className="section cta-band">
        <div className="wrap">
          <p className="eyebrow center">404</p>
          <h1>That one doesn&rsquo;t add up.</h1>
          <p className="lead">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-primary">
              Back to home <ArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">Contact</Link>
          </div>
        </div>
      </section>
    </>
  );
}
