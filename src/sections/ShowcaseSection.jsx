import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Invisible section heading for SEO & accessibility */}
          <h2 className="sr-only">
            Full-Stack Projects by Mohammed Yaseen
          </h2>

          <div ref={rydeRef} className="first-project-wrapper">
            <div className="p-2 mt-7">
              <img
                className="rounded-xl"
                src="/images/healthX.png"
                alt="HealthX web app interface for AI-assisted early diagnosis"
              />
            </div>
            <div className="text-content">
              <h2>
                HealthX – AI-Assisted Early Diagnosis for Everyday Users
              </h2>
              <p className="text-white-50 md:text-xl">
                A responsive web app built with React and TailwindCSS, focused
                on making early health insights simple, fast, and accessible.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/FormBuilder.png"
                  alt="Form builder interface with drag-and-drop fields"
                />
              </div>
              <h2>Form Building Made Simple</h2>
              <p className="text-white-50 md:text-xl">
                A form builder powered by Remix and Tailwind, designed for
                frictionless form creation with clean UX and built-in
                validation.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/CSSBattle.png"
                  alt="CSS Battle AI app showing challenges and feedback"
                />
              </div>
              <h2>CSS Battle AI</h2>
              <p className="text-white-50 md:text-xl">
                A practice platform that helps developers improve their CSS
                skills with feedback, ranking, and challenge-based learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;