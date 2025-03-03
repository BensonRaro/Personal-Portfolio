import { clients, services, testimonials } from "../lib/constant";

const About = () => {
  return (
    <article className="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li className="testimonials-item" key={index}>
              <div className="content-card">
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width="60"
                  />
                </figure>
                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>
                <div className="testimonials-text">
                  <p>{testimonial.testimony}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((logo, index) => (
            <li className="clients-item" key={index}>
              <a href="#">
                <img src={logo} alt={`Client logo ${index + 1}`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
