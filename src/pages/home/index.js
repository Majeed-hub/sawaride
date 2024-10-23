import React, { useEffect, useRef, useCallback } from "react";
import Hero from "../../components/hero/index";
import Section from "../../components/section/index";
import TeamSection from "../../components/teamSection/index";
import Footer from "../../components/footer/index";
// import img1 from "../../assets/images/undraw_map_dark_re_36sy.svg";
import img2 from "../../assets/images/undraw_personal_info_re_ur1n.svg";


function Home() {
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false); // Use useRef to keep the value across renders

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();

      if (isScrolling.current) return;

      isScrolling.current = true;
      const direction = event.deltaY > 0 ? 1 : -1; // 1 for down, -1 for up
      const currentSectionIndex = sectionRefs.current.findIndex(
        (ref) => ref && ref.getBoundingClientRect().top >= 0
      );

      const nextSectionIndex = currentSectionIndex + direction;

      if (
        nextSectionIndex >= 0 &&
        nextSectionIndex < sectionRefs.current.length
      ) {
        const target = sectionRefs.current[nextSectionIndex];

        if (target) {
          const start = window.scrollY;
          const end = target.getBoundingClientRect().top + window.scrollY;
          const distance = end - start;
          const duration = 800;
          let startTime = null;

          const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easing = easeInOutQuad(progress);

            window.scrollTo(0, start + distance * easing);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              isScrolling.current = false; // Reset scrolling flag after animation ends
            }
          };

          requestAnimationFrame(animation);
        }
      } else {
        isScrolling.current = false;
      }
    },
    [sectionRefs]
  );

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {/* Ensure the Hero section is referenced */}
      <div ref={(el) => (sectionRefs.current[0] = el)}>
        <Hero />
      </div>
      <div ref={(el) => (sectionRefs.current[1] = el)}>
        <Section
          title="About Us"
          content="We are a company focused on delivering the best products and services to our customers."
          imageUrl={img2}
          dark
        />
      </div>
      <div ref={(el) => (sectionRefs.current[2] = el)}>
        <Section
          title="Our Services"
          content="Our range of services is tailored to meet the specific needs of our clients."
          imageUrl={img2}
        />
      </div>
      <div ref={(el) => (sectionRefs.current[3] = el)}>
        <Section
          title="Contact Us"
          content="Feel free to reach out to us for any inquiries or support."
          imageUrl={img2}
          dark={1}
        />
      </div>
      <div ref={(el) => (sectionRefs.current[4] = el)}>
        <TeamSection />
      </div>
      <div ref={(el) => (sectionRefs.current[5] = el)}>
        <Footer />
      </div>
    </>
  );
}

export default Home;
