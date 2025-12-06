import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div
      id="skills"
      className="flex-center section-padding align-middle justify-center"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Tech Stack for Full-Stack Development"
          sub="🛠 Tools I use to build real-world web applications end-to-end"
        />
        <div className="tech-grid flex flex-wrap justify-center items-center gap-30">
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="flex card-border tech-card overflow-hidden group xl:rounded-full rounded-lg flex-center items-center justify-center"
              aria-label={techStackIcon.name}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}

          {/* img version commented out stays as-is */}
        </div>
      </div>
    </div>
  );
};

export default TechStack;