import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { ArrowRight, Notebook } from "../components/icons";

const UPCOMING = [
  {
    title: "Beating maths anxiety",
    body: "Practical, low-stress ways for students to feel calmer and more in control before an exam.",
  },
  {
    title: "Smarter GCSE revision",
    body: "How to revise maths so it actually sticks, with techniques that work better than re-reading notes.",
  },
  {
    title: "Making sense of A-Level calculus",
    body: "Breaking down the ideas behind differentiation and integration so they finally click.",
  },
] as const;

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog | Mendip Maths Tutoring"
        description="Maths tips, revision advice and insights from Ryan Garvey at Mendip Maths Tutoring. New articles coming soon."
        path="/blog"
      />

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Blog</p>
            <h1>Maths tips, revision advice and ideas.</h1>
            <p className="lead">
              A place for me to share practical maths help, exam strategies and the occasional bit
              of mathematical curiosity. The first articles are on their way.
            </p>
          </Reveal>

          <Reveal className="blog-empty">
            <div className="ic"><Notebook width={28} height={28} /></div>
            <span className="tag">Coming soon</span>
            <h2>The blog is just getting started.</h2>
            <p>
              I&rsquo;m putting together articles to help students and parents tackle maths with
              more confidence. Want to be the first to read them? Get in touch and I&rsquo;ll let
              you know when they go live.
            </p>
            <div className="hero-actions center stack-top-sm">
              <Link to="/contact" className="btn btn-light">
                Get in touch <ArrowRight />
              </Link>
            </div>
          </Reveal>

          <Reveal as="p" className="eyebrow">On the way</Reveal>
          <div className="cards">
            {UPCOMING.map((post, i) => (
              <Reveal as="article" className="card soon" key={post.title} delay={(i % 4) as 0 | 1 | 2}>
                <span className="soon-badge">Coming soon</span>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
