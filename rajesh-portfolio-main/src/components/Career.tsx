import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Projects <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Websites & WordPress</h4>
                <h5>Frontend & CMS</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed multiple responsive websites using HTML, CSS, Tailwind CSS,
              and WordPress. Focused on delivering user-friendly and visually appealing interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile Development</h4>
                <h5>React Native</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built cross-platform mobile applications using React Native.
              Practicing full-stack development and modern web technologies to create full-featured apps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Database Management</h4>
                <h5>Backend & Data</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked with relational databases like MySQL and PostgreSQL.
              Implementing data storage, querying, and integrating with backend services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
