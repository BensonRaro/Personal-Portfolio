const MobileContacts = () => {
  return (
    <div className="mobile">
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
  );
};

export default MobileContacts;
