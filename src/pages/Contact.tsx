import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { SITE } from "../site";
import { ArrowRight, Mail, Phone } from "../components/icons";

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Mendip Maths Tutoring",
  url: "https://mendip-maths.com/contact",
  about: { "@id": "https://mendip-maths.com/#business" },
};

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Mendip Maths Tutoring"
        description="Get in touch with Mendip Maths Tutoring. Email learning@mendipmaths.com or call 07889 733 873 to arrange a free taster lesson."
        path="/contact"
        jsonLd={CONTACT_JSON_LD}
      />

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Contact</p>
            <h1>Let&rsquo;s talk maths.</h1>
            <p className="lead">
              Whether you have a question or you&rsquo;re ready to book, I&rsquo;d love to hear
              from you. I usually reply within a day.
            </p>
          </Reveal>

          <div className="contact-rows">
            <Reveal as="div">
              <a className="contact-row" href={`mailto:${SITE.email}`}>
                <div className="ic"><Mail /></div>
                <div><div className="k">Email</div><div className="v">{SITE.email}</div></div>
                <span className="arrow"><ArrowRight width={22} height={22} /></span>
              </a>
            </Reveal>
            <Reveal as="div" delay={1}>
              <a className="contact-row" href={SITE.phoneHref}>
                <div className="ic"><Phone /></div>
                <div><div className="k">Phone</div><div className="v">{SITE.phoneDisplay}</div></div>
                <span className="arrow"><ArrowRight width={22} height={22} /></span>
              </a>
            </Reveal>
          </div>

          <Reveal className="taster" delay={1}>
            <span className="tag">Free taster lesson</span>
            <h2>Not sure where to start?</h2>
            <p>
              Get in touch and I&rsquo;ll arrange a completely free taster lesson. No commitment
              and no payment details needed.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Free%20taster%20lesson%20enquiry`}
              className="btn btn-light"
            >
              Arrange my free taster <ArrowRight />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
