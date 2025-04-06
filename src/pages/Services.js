import React from 'react';

const Services = () => (
  <section className="section py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        <div className="col-md-6">
          <ul>
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>Cloud Solutions (AWS & Azure)</li>
            <li>Frontend Development (Angular, React)</li>
            <li>Backend Development (.NET Core)</li>
            <li>Generative AI Integration</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/500x300"
            className="img-fluid rounded"
            alt="Software Development"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Services;
