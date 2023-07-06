import Learn from "@/app/components/Learn";
import "./header.css";
import React from "react";
import Programs from "@/app/components/Programs";
import Explore from "@/app/components/Explore";

export default function Header() {
  return (
    <>
      <Hero></Hero>
      <GetStarted></GetStarted>
      <Learn />
      <Programs />
      <Explore />
      <Initiatives></Initiatives>
      <Testimonials></Testimonials>
    </>
  );
}

function Hero() {
  return (
    <>
      <header className="heading__container">
        <div className="heading__text">
          <h1 className="heading__text__primary">
            a digital playground{" "}
            <span className="heading__text__primary--color">
              for every child
            </span>
          </h1>
          <h4 className="heading__text__secondary">
            Learn and play in a continuous learning gamify digital platform and
            also get connected to a lifetime professional mentors
          </h4>
          <button className="button__primary">get started</button>
        </div>
        <div className="heading__image">
          <h1>An image is coming here soon!</h1>
        </div>
      </header>
    </>
  );
}

function GetStarted() {
  return (
    <>
      <section className="get-started__container">
        <h2 className="get-started__heading heading__primary-2">
          get started with <span>codePlay72</span>
        </h2>
        <div className="get-started__content">
          <h3>parents and techers</h3>
          <p>
            Speak with a digital playground coach to unlock creative
            possibilities for your child.
          </p>
          <button className="button__primary">sign up</button>
        </div>
        <div className="get-started__content">
          <h3>digital experts</h3>
          <p>
            Get the chance to share your experience with a young and creative
            innovators as they become global creators.
          </p>
          <button className="button__primary">be a mentor</button>
        </div>
      </section>
    </>
  );
}

function Initiatives() {
  return (
    <>
      <section className="initiative__container">
        <div className="initiative__heading">
          <h2 className="heading__primary-2">
            Changing the world one initiative at a time
          </h2>
          <p>
            Even the underserved population can save the world, hence we have
            put different initiatives to serve these groups.
          </p>
          <button className="button__primary">sponsor an initiative</button>
        </div>
        <div className="initiative__content">
          <div className="content__program game-changer">
            <h3 className="heading-3">the gamechanger</h3>
            <p>
              We believe that every child has in him/her all it takes to be the
              next creator or innovator and we are on a mission to help each
              child become just that through our digital playground
            </p>
            <button className="button__primary-outline">learn more</button>
          </div>
          <div className="content__program">
            <h3 className="heading-3">children's day code party</h3>
            <p>
              We believe that every child has in him/her all it takes to be the
              next creator or innovator and we are on a mission to help each
              child become just that through our digital playground
            </p>
            <button className="button__primary-outline">learn more</button>
          </div>
          <div className="content__program">
            <h3 className="heading-3">school outreach</h3>
            <p>
              We believe that every child has in him/her all it takes to be the
              next creator or innovator and we are on a mission to help each
              child become just that through our digital playground
            </p>
            <button className="button__primary-outline">learn more</button>
          </div>
        </div>
      </section>
    </>
  );
}

function Testimonials() {

  return(

    <>
      <section className="testimonial__section">
        <h2 className="heading__primary-2 testimonial__container">
            Hear from our community
        </h2>
        <div className="testimonial__container">
        <picture className="testimonial__picture">
          <img className="testimonial__image" src="/images/pm.jpg" alt="testimonial picture from pm"/>
          <div className="testimonial__content">
            <h5 className="testimonial__name">Paul Michael</h5>
            <h5 className="testimonial__person">student</h5>
            <p className="testimonial__testimony">I love coding and learning and connecting with my intructors and coaches has given me the leverage i need to succed in live.</p>
          </div>
        </picture>

        <picture className="testimonial__picture">
          <img className="testimonial__image" src="/images/pm.jpg" alt="testimonial picture from pm"/>
          <div className="testimonial__content">
            <h5 className="testimonial__name">Paul Michael</h5>
            <h5 className="testimonial__person">student</h5>
            <p className="testimonial__testimony">I love coding and learning and connecting with my intructors and coaches has given me the leverage i need to succed in live.</p>
          </div>
        </picture>

        <picture className="testimonial__picture">
          <img className="testimonial__image" src="/images/pm.jpg" alt="testimonial picture from pm"/>
          <div className="testimonial__content">
            <h5 className="testimonial__name">Paul Michael</h5>
            <h5 className="testimonial__person">student</h5>
            <p className="testimonial__testimony">I love coding and learning and connecting with my intructors and coaches has given me the leverage i need to succed in live.</p>
          </div>
        </picture>

        <picture className="testimonial__picture">
          <img className="testimonial__image" src="/images/pm.jpg" alt="testimonial picture from pm"/>
          <div className="testimonial__content">
            <h5 className="testimonial__name">Paul Michael</h5>
            <h5 className="testimonial__person">student</h5>
            <p className="testimonial__testimony">I love coding and learning and connecting with my intructors and coaches has given me the leverage i need to succed in live intructors and coaches has given me the leverage i need to succed in live.</p>
          </div>
        </picture>
        </div>

      </section>
    </>
  )
}