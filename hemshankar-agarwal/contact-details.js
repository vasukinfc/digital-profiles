(() => {
  const DETAILS = {
    name: 'Hemshankar Agarwal',
    role: 'Founder, Vasuki NFC',
    location: 'Jaipur, Rajasthan, India',
    phoneDisplay: '+91 63773 93721',
    phoneHref: '+916377393721',
    email: 'hemshankar642@gmail.com',
    website: 'https://vasukinfc.in/',
    instagram: 'https://www.instagram.com/hemshankaragarwal/',
    instagramLabel: '@hemshankaragarwal'
  };

  const setLink = (link, href, label) => {
    if (!link) return;
    link.href = href;
    link.target = href.startsWith('http') ? '_blank' : '_self';
    link.rel = href.startsWith('http') ? 'noreferrer' : '';
    link.textContent = `${label} ↗`;
  };

  const patchContact = () => {
    const contact = document.querySelector('#contact.contact-section, #contact');
    if (!contact) return false;

    const boxes = contact.querySelectorAll('.contact-box');
    if (boxes.length < 2) return false;

    const profileBox = boxes[0];
    const profileTitle = profileBox.querySelector('h4');
    const profileParagraphs = profileBox.querySelectorAll('p');
    const websiteLink = profileBox.querySelector('a.contact-social');

    if (profileTitle) profileTitle.textContent = DETAILS.name;
    if (profileParagraphs[0]) profileParagraphs[0].textContent = DETAILS.role;
    if (profileParagraphs[1]) profileParagraphs[1].textContent = DETAILS.location;
    setLink(websiteLink, DETAILS.website, 'Website · vasukinfc.in');

    const contactBox = boxes[1];
    const contactTitle = contactBox.querySelector('h4');
    if (contactTitle) contactTitle.textContent = 'Contact Details';

    const links = Array.from(contactBox.querySelectorAll('a.contact-social'));
    setLink(links[0], `tel:${DETAILS.phoneHref}`, `Call · ${DETAILS.phoneDisplay}`);
    setLink(links[1], `https://wa.me/${DETAILS.phoneHref.replace('+', '')}`, `WhatsApp · ${DETAILS.phoneDisplay}`);
    setLink(links[2], `mailto:${DETAILS.email}`, `Email · ${DETAILS.email}`);

    let instagramLink = contactBox.querySelector('[data-founder-instagram="true"]');
    if (!instagramLink && links[0]) {
      instagramLink = links[0].cloneNode(true);
      instagramLink.dataset.founderInstagram = 'true';
      contactBox.appendChild(instagramLink);
    }
    setLink(instagramLink, DETAILS.instagram, `Instagram · ${DETAILS.instagramLabel}`);

    contact.dataset.founderContactPatched = 'true';
    return true;
  };

  if (patchContact()) return;

  const observer = new MutationObserver(() => {
    if (patchContact()) observer.disconnect();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(() => observer.disconnect(), 15000);
})();
