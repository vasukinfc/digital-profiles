import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Our smart <span>business</span>
          <br /> ecosystem
        </h2>
        <div className="career-info">
          <div className="career-timeline"><div className="career-dot"></div></div>
          <div className="career-info-box">
            <div className="career-info-in"><div className="career-role"><h4>NFC Business Cards</h4><h5>Tap-to-share identity</h5></div><h3>CORE</h3></div>
            <p>Premium PVC, matte, metal and wooden NFC cards connected to a digital business profile. Share phone, WhatsApp, website, social links and more in seconds.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in"><div className="career-role"><h4>Digital Profiles</h4><h5>Always updatable</h5></div><h3>24/7</h3></div>
            <p>Your printed card can stay the same while the linked profile evolves. Update business information, links and contact details without reprinting the card.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in"><div className="career-role"><h4>Google Review Tools</h4><h5>Tap or scan to review</h5></div><h3>GROW</h3></div>
            <p>Review cards and counter stands make it easier for happy customers to reach your Google review page, helping businesses build stronger local trust.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in"><div className="career-role"><h4>Custom Business Solutions</h4><h5>QR, menu & branding</h5></div><h3>PLUS</h3></div>
            <p>Restaurant QR menus, smart rings, custom printing, branded NFC experiences and tailored solutions for shops, hotels, professionals and growing teams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
