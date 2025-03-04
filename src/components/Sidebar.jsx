import { useState, useEffect } from "react";
import MobileContacts from "./MobileContacts";

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1250);
  const [isOpen, setIsOpen] = useState(!isMobile); // Open only if not mobile

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 1250;
      setIsMobile(mobileView);
      setIsOpen(!mobileView); // Keep open on large screens, toggle on mobile
      console.log(("size:", window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/logo.png" alt="avatar" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Benson Raro</h1>
          <p className="title">Web Developer</p>
        </div>
        {/* Button to toggle sidebar */}
        <button
          className="info-more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
          <ion-icon name={isOpen ? "chevron-up" : "chevron-down"}></ion-icon>
        </button>
      </div>

      {isMobile && isOpen && <MobileContacts />}

      {/* Contacts Section */}
      <div className={isMobile ? "hidden" : "visible"}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:raro@example.com" className="contact-link">
                raro@example.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+12133522795" className="contact-link">
                +1 (213) 352-2795
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">June 23, 1982</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Sacramento, California, USA</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
