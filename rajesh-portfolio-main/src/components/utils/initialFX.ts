import gsap from "gsap";
import { splitIntoChars } from "./splitHelpers";

export function initialFX() {
  document.body.style.overflowY = "auto";
  window.scrollTo(0, 0);
  document.getElementsByTagName("main")[0].classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // Split and animate landing heading chars
  const landingTargets = [
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1",
  ];
  const landingChars: HTMLElement[] = [];
  landingTargets.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      landingChars.push(...splitIntoChars(el));
    });
  });

  gsap.fromTo(
    landingChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );

  // Looping text pairs
  const h2Info = document.querySelector(".landing-h2-info");
  const h2Info1 = document.querySelector(".landing-h2-info-1");
  const h21 = document.querySelector(".landing-h2-1");
  const h22 = document.querySelector(".landing-h2-2");

  if (h2Info && h2Info1) {
    const chars1 = splitIntoChars(h2Info);
    const chars2 = splitIntoChars(h2Info1);
    LoopText(chars1, chars2);
  }

  if (h21 && h22) {
    const chars3 = splitIntoChars(h21);
    const chars4 = splitIntoChars(h22);
    LoopText(chars3, chars4);
  }
}

function LoopText(chars1: HTMLElement[], chars2: HTMLElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    chars2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      chars1,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      chars1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      chars2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
