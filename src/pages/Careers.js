import React from 'react';

const Careers = () => (
  <section className="section bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Careers</h2>
      <p className="text-center">
        Join our dynamic team! Check our current openings on
        <a
          href="https://linkedin.com/company/linuxsoftlabs"
          target="_blank"
          rel="noreferrer"
        >
          {" "}LinkedIn
        </a>{" "}
        or send your resume to
        <a href="mailto:hr@linuxsoftlabs.com" target="_blank" rel="noopener noreferrer">
        hr@linuxsoftlabs.com
</a>
      </p>
    </div>
  </section>
);

export default Careers;
