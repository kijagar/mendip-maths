import { Link } from "react-router-dom";
import { SITE, NAV_ITEMS } from "../site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <div className="fbrand" translate="no">{SITE.name}</div>
            <p className="fblurb">
              Helping students achieve their potential in maths. Quality tuition,
              real results. Every step of the way.
            </p>
          </div>
          <nav aria-label="Footer">
            <h4>Explore</h4>
            <ul>
              {NAV_ITEMS.filter((i) => i.to !== "/").map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></li>
              <li>{SITE.location}</li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <span>© {year} {SITE.name}</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
