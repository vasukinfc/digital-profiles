import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const B = import.meta.env.BASE_URL;
const projects = [
  { title: "Premium NFC Card", category: "Digital Visiting Card + NFC", tools: "One-tap sharing, QR backup, premium finish, editable digital profile", image: `${B}images/vasuki-nfc-card.svg`, link: "https://vasukinfc.in/" },
  { title: "Google Review Stand", category: "Smart Review Collection", tools: "NFC tap, QR scan, countertop display, direct Google review journey", image: `${B}images/vasuki-review-stand.svg`, link: "https://vasukinfc.in/" },
  { title: "Metal NFC Card", category: "Luxury Business Identity", tools: "Premium metal build, NFC functionality, custom branding, executive look", image: `${B}images/vasuki-metal-card.svg`, link: "https://vasukinfc.in/" },
  { title: "Restaurant QR Menu", category: "Contactless Digital Menu", tools: "QR access, mobile-friendly menu, no app required, easy customer access", image: `${B}images/vasuki-qr-menu.svg`, link: "https://vasukinfc.in/" },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const goToSlide = useCallback((index: number) => { if (isAnimating) return; setIsAnimating(true); setCurrentIndex(index); setTimeout(() => setIsAnimating(false), 500); }, [isAnimating]);
  const goToPrev = useCallback(() => goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1), [currentIndex, goToSlide]);
  const goToNext = useCallback(() => goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1), [currentIndex, goToSlide]);
  return <div className="work-section" id="work"><div className="work-container section-container"><h2>Featured <span>Solutions</span></h2><div className="carousel-wrapper"><button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous solution" data-cursor="disable"><MdArrowBack /></button><button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next solution" data-cursor="disable"><MdArrowForward /></button><div className="carousel-track-container"><div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>{projects.map((project,index)=><div className="carousel-slide" key={project.title}><div className="carousel-content"><div className="carousel-info"><div className="carousel-number"><h3>0{index+1}</h3></div><div className="carousel-details"><h4>{project.title}</h4><p className="carousel-category">{project.category}</p><div className="carousel-tools"><span className="tools-label">Highlights</span><p>{project.tools}</p></div></div></div><div className="carousel-image-wrapper"><WorkImage image={project.image} alt={project.title} link={project.link}/></div></div></div>)}</div></div><div className="carousel-dots">{projects.map((_,index)=><button key={index} className={`carousel-dot ${index===currentIndex?"carousel-dot-active":""}`} onClick={()=>goToSlide(index)} aria-label={`Go to solution ${index+1}`} data-cursor="disable"/>)}</div></div></div></div>;
};
export default Work;
