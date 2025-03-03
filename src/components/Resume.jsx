const Resume = () => {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              University school of the arts
            </h4>
            <span>2008 - 2010</span>
            <p className="timeline-text">
              There I learnt a wide range of topics that are essential to
              understanding both the theory and practical aspects of computing.
              This involves programming fundamentals, computer architecture,
              operating systems, databases, software engineering, problem
              solving, collaboration and communication soft skills.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">New York Academy of Art</h4>
            <span>2006 - 2007</span>
            <p className="timeline-text">
              I chose my master degree in technology. There I deepened my
              knowledge, enhanced my skills in the area and learnt how to
              increase my career prospects in a competitive job market.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              High School of Art and Design
            </h4>
            <span>2003 - 2005</span>
            <p className="timeline-text">
              There I learnt foundational courses and computer sciences
              fundamentals. In the institution, I chose my specialization in
              web-development that involves front-end and back-end technologies,
              user interface designs and content management systems.
            </p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Creative director</h4>
            <span>2015 - Present</span>
            <p className="timeline-text">
              I can develop and oversee creative concepts for projects and
              campaigns managing a team of designers, writers, and other
              creative professionals.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Art director</h4>
            <span>2013 - 2015</span>
            <p className="timeline-text">
              I create and develop visual concepts that align with the project's
              goals and objectives, supervising the design process and managing
              timelines and budgets for design projects.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web designer</h4>
            <span>2010 - 2013</span>
            <p className="timeline-text">
              I create logos, color schemes and typography for a brand's
              identity. Also I develop graphics for websites, social media and
              digital ads with applications that enhance user experience.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
