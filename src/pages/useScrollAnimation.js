import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    // Select all elements with the class "animate"
    const animatedEls = document.querySelectorAll(".animate");

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If element is in viewport, add "visible" class and stop observing
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    // Observe all animated elements
    animatedEls.forEach((el) => observer.observe(el));

    // Clean up observer on unmount
    return () => {
      animatedEls.forEach((el) => observer.unobserve(el)); // optional cleanup
      observer.disconnect();
    };
  }, []);
}
