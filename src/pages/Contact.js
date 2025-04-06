import React from 'react';

const Contact = () => (
  <section className="section py-5">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form action="mailto:hr@linuxsoftlabs.com" method="post" encType="text/plain">
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" className="form-control" id="subject" name="subject" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            placeholder="Mention Mobile Number - Will call you later"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
