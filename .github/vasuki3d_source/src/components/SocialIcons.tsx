import { FaInstagram, FaGlobe, FaWhatsapp } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbShoppingBag } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social"); if (!social) return;
    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement; const link = elem.querySelector("a") as HTMLElement; const rect = elem.getBoundingClientRect(); let mouseX = rect.width / 2, mouseY = rect.height / 2, currentX = 0, currentY = 0;
      const updatePosition = () => { currentX += (mouseX-currentX)*0.1; currentY += (mouseY-currentY)*0.1; link.style.setProperty("--siLeft", `${currentX}px`); link.style.setProperty("--siTop", `${currentY}px`); requestAnimationFrame(updatePosition); };
      const onMouseMove = (e: MouseEvent) => { const x=e.clientX-rect.left, y=e.clientY-rect.top; if(x<40&&x>10&&y<40&&y>5){mouseX=x;mouseY=y}else{mouseX=rect.width/2;mouseY=rect.height/2} };
      document.addEventListener("mousemove", onMouseMove); updatePosition();
    });
  }, []);
  return <div className="icons-section"><div className="social-icons" data-cursor="icons" id="social"><span><a href="https://vasukinfc.in/" target="_blank" rel="noreferrer" aria-label="Vasuki NFC website"><FaGlobe /></a></span><span><a href="https://www.instagram.com/_vasuki_99/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a></span><span><a href="https://vasukinfc.in/#contact" target="_blank" rel="noreferrer" aria-label="WhatsApp and contact"><FaWhatsapp /></a></span></div><a className="resume-button" href="https://vasukinfc.in/" target="_blank" rel="noreferrer"><HoverLinks text="SHOP NOW" /><span><TbShoppingBag /></span></a></div>;
};
export default SocialIcons;
