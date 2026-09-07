import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.7, speed: 1.7, effects: true, autoResize: true, ignoreMobileResize: true });
    smoother.scrollTop(0); smoother.paused(true);
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => elem.addEventListener("click", (e) => { if (window.innerWidth > 1024) { e.preventDefault(); const section = (e.currentTarget as HTMLAnchorElement).getAttribute("data-href"); smoother.scrollTo(section, true, "top top"); } }));
    const refresh = () => ScrollSmoother.refresh(true); window.addEventListener("resize", refresh);
    return () => window.removeEventListener("resize", refresh);
  }, []);
  return <><div className="header"><a href="#" className="navbar-title" data-cursor="disable">VN</a><a href="https://vasukinfc.in/" className="navbar-connect" data-cursor="disable" target="_blank" rel="noreferrer">vasukinfc.in</a><ul><li><a data-href="#about" href="#about"><HoverLinks text="ABOUT" /></a></li><li><a data-href="#work" href="#work"><HoverLinks text="SOLUTIONS" /></a></li><li><a data-href="#contact" href="#contact"><HoverLinks text="CONTACT" /></a></li></ul></div><div className="landing-circle1"></div><div className="landing-circle2"></div><div className="nav-fade"></div></>;
};
export default Navbar;
