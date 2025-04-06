import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Home = () => (
  <section className="hero text-black text-center py-5" style={{ backgroundColor: 'white' }}>
    <div className="container">
      <h1 className="display-4 fw-bold mb-4">Your Digital Success Partner</h1>
      <p className="lead mb-4">
        LinuxSoft Labs delivers tailor-made IT solutions—spanning web development, cloud platforms, and mobile innovation. We turn complex challenges into seamless digital experiences.
      </p>
      <Link to="/services" className="btn btn-warning btn-lg px-4 mb-5">Get Started with Us</Link>

      <div className="row text-start text-black">
        <div className="col-md-6">
          <h4 className="text-warning">Frontend Development</h4>
          <p>Creating the visual and interactive elements using HTML, CSS, and JavaScript.</p>
          <h4 className="text-warning">Backend Development</h4>
          <p>Server-side logic and database handling for dynamic apps and systems.</p>
          <h4 className="text-warning">Blockchain</h4>
          <p>Secure, transparent ledger systems for decentralized applications.</p>
        </div>
        <div className="col-md-6">
          <h4 className="text-warning">E-Commerce Solution</h4>
          <p>Robust platforms to manage sales, transactions, and customer engagement.</p>
          <h4 className="text-warning">Graphic Design</h4>
          <p>Visual storytelling using typography, imagery, and layout strategy.</p>
          <h4 className="text-warning">Mobile App Development</h4>
          <p>Developing intuitive and performant apps for mobile platforms.</p>
        </div>
      </div>

      <hr className="my-5 text-black" />

      <h2 className="mb-4">What Sets Us Apart</h2>
      <p>
        Eliminate IT roadblocks, understand evolving user expectations, and count on our tailored consulting to unlock your digital potential.
      </p>
      <p>
        We guide you from strategic planning to implementation, helping you make the most of every IT investment.
      </p>

      <div className="row text-center my-5">
        <div className="col">
          <h2 className="text-info">10+</h2>
          <p>Years of Expertise</p>
        </div>
        <div className="col">
          <h2 className="text-info">16+</h2>
          <p>Tech Experts</p>
        </div>
        <div className="col">
          <h2 className="text-info">1,300+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="col">
          <h2 className="text-info">275+</h2>
          <p>Clients Served</p>
        </div>
      </div>

      <hr className="my-5 text-black" />

      <h2 className="mb-3">Why Choose Us?</h2>
      <ul className="list-unstyled text-black">
        <li><i className="bi bi-lightning-fill text-warning me-2"></i><strong>Quick Response:</strong> Remote support to resolve issues fast.</li>
        <li><i className="bi bi-briefcase-fill text-warning me-2"></i><strong>Experienced:</strong> A decade of solving IT challenges across domains.</li>
        <li><i className="bi bi-graph-up text-warning me-2"></i><strong>Strategic Insights:</strong> Expert-driven data to guide decisions.</li>
      </ul>
    </div>
  </section>
);


const Services = () => (
  <section className="section py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <p className="text-center mb-5">
        At LinuxSoftLabs, we deliver cutting-edge solutions in Mobile App Development, Backend Development, and E-Commerce platforms
        to help businesses thrive in the digital age.
      </p>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <i className="bi bi-phone display-5 text-success"></i>
          <h5 className="mt-3">Mobile App Development</h5>
          <p>
            We build dynamic and intuitive mobile applications for Android and iOS using technologies like Java, Kotlin, Swift,
            React Native, and more. Our process includes everything from conceptualization to deployment and post-launch growth.
          </p>
        </div>


        <div className="col-md-3 mb-4">
          <i className="bi bi-laptop display-5 text-danger"></i>
          <h5 className="mt-3">Frontend Development</h5>
          <p>
            We craft captivating user interfaces using modern frontend technologies such as React.js, Angular, HTML5, CSS3, and JavaScript.
            Our designs are responsive, user-centric, and optimized for exceptional digital experiences.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <i className="bi bi-server display-5 text-info"></i>
          <h5 className="mt-3">Backend Development</h5>
          <p>
            Our backend solutions are built for scalability and performance. We use .NET, Node.js, Python, C/C++, and more to create
            reliable infrastructures, APIs, and database-driven systems that power robust applications.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <i className="bi bi-cart-check display-5 text-primary"></i>
          <h5 className="mt-3">E-Commerce Solutions</h5>
          <p>
            From shopping cart development to custom online store solutions, we provide complete e-commerce services using platforms
            like Shopify, WooCommerce, and Magento. We focus on seamless UX/UI, secure payment integrations, and fast deployments.
          </p>
        </div>
      </div>

      <h4 className="text-center mt-5">Comprehensive IT Services</h4>
      <ul className="list-unstyled text-center">
        <li>✔ Network Monitoring & Management</li>
        <li>✔ 24/7 IT Support Service Desk</li>
        <li>✔ Infrastructure Optimization</li>
        <li>✔ Endpoint Management</li>
        <li>✔ SaaS & On-Premise Application Support</li>
        <li>✔ Advanced IT Service Management Tools</li>
      </ul>
    </div>
  </section>
);





// const Careers = () => (
//   <section className="section bg-light py-5">
//     <div className="container">
//       <h2 className="text-center mb-4">Careers</h2>
//       <p className="text-center">



        
//         Join our dynamic team! Check our current openings on
//         <a
//           href="https://linkedin.com/company/linuxsoftlabs"
//           target="_blank"
//           rel="noreferrer"
//         >
//           {" "}
//           LinkedIn
//         </a>{" "}
//         or send your resume to
//         <a href="mailto:hr@linuxsoftlabs.com"> hr@linuxsoftlabs.com</a>
//       </p>
//     </div>
//   </section>
// );

// const Contact = () => (
//   <section className="section py-5">
//     <div className="container">
//       <h2 className="text-center mb-4">Contact Us</h2>

//       <div className="row mb-4">
//         <div className="col-md-6">
//           <h5>Address</h5>
//           <p>
//             507,Global Business Hub,Kharadi,Pune,Maharashtra. 411014<br/>
            
//           </p>

         
//           <h5>Opening Hours</h5>
//           <p>Mon to Fri: 9:30 AM to 7:00 PM<br/></p>

//           <h5>Have Questions?</h5>
//           <p>
//             When it comes to managing your business's IT needs, expertise is crucial.
//             That's where we excel.
//           </p>

//         </div>
//         <div className="col-md-6">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const subject = e.target.subject.value;
//               const message = e.target.message.value;
//               window.location.href = `mailto:hr@linuxsoftlabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
//             }}
//           >
//             <div className="mb-3">
//               <label htmlFor="subject" className="form-label">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="subject"
//                 name="subject"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 rows="5"
//                 placeholder="Mention Mobile Number - Will call you later"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </section>
// );


const Careers = () => (
  <section className="section bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Careers</h2>
      <p className="text-center mt-4">
        Explore openings on
        <a href="https://linkedin.com/company/linuxsoftlabs" target="_blank" rel="noreferrer"> LinkedIn </a>
        or send your resume to
        <a href="mailto:hr@linuxsoftlabs.com"> hr@linuxsoftlabs.com</a>
      </p>
      <h4 className="text-center text-Success">Better Together, Grow Together</h4>
      <p className="text-center">
        We are one of the best places to work. LinuxSoftLabs creates an atmosphere where you can grow your inner self,
        show your talents, and get the best out of yourself. We believe in the invention of new processes that ease
        your work. The workplace at LinuxSoftLabs is very flexible.
      </p>

      <p className="text-center">
        We are looking for fresh talents who can add cultural values to LinuxSoftLabs , someone who has the same mission that is ours,
        but also brings diversity at the same time.
      </p>

      <div className="text-center mb-4">
        <h5 className="fw-bold">Discover Your Potential: LinuxSoftLabs's Culture of Growth and Diversity</h5>
        <p>
          At LinuxSoftLabs, we foster an environment that encourages personal growth and talent exploration,
          striving to innovate processes that enhance productivity. Our workplace offers flexibility,
          nurturing creativity and individuality.
        </p>
        <p>
          We're seeking fresh talents to enrich the cultural fabric of LinuxSoftLabs—individuals who share our mission
          while bringing diversity and unique perspectives to the table.
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <i className="bi bi-cash-coin display-6 text-primary"></i>
          <h6 className="mt-2">Competitive Salary</h6>
        </div>
        <div className="col-md-4 mb-3">
          <i className="bi bi-gift display-6 text-success"></i>
          <h6 className="mt-2">Regular Rewards & Benefits</h6>
        </div>
        <div className="col-md-4 mb-3">
          <i className="bi bi-clock-history display-6 text-warning"></i>
          <h6 className="mt-2">Flexible Work Timings</h6>
        </div>
        <div className="col-md-4 mb-3">
          <i className="bi bi-easel display-6 text-info"></i>
          <h6 className="mt-2">Training Programs</h6>
        </div>
        <div className="col-md-4 mb-3">
          <i className="bi bi-stars display-6 text-danger"></i>
          <h6 className="mt-2">Exciting Client Projects</h6>
        </div>
      </div>

      <p className="text-center mt-4">
        Explore openings on
        <a href="https://linkedin.com/company/linuxsoftlabs" target="_blank" rel="noreferrer"> LinkedIn </a>
        or send your resume to
        <a href="mailto:hr@linuxsoftlabs.com"> hr@linuxsoftlabs.com </a>
      </p>
    </div>
  </section>
);


// const Contact = () => (
//   <section className="section py-5">
//     <div className="container">
//       <h2 className="text-center mb-4">Contact Us</h2>

//       <div className="row mb-4">
//         <div className="col-md-6">
//           <h5>Address</h5>
//           <p>  507,Global Business Hub,Kharadi,Pune,Maharashtra. 411014<br/> </p>            



//           <h5>Opening Hours</h5>
//           <p>Mon to Fri: 9:30 AM to 7:00 PM</p>

//           <h5>Have Questions?</h5>
//           <p>
//             When it comes to managing your business's IT needs, expertise is crucial.
//             That's where we excel.
//           </p>

//           <p><strong>Email:</strong> <a href="mailto:hr@linuxsoftlabs.com">hr@linuxsoftlabs.com</a></p>
//         </div>
//         <div className="col-md-6">
//           {/* <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const subject = e.target.subject.value;
//               const message = e.target.message.value;
//               window.location.href = `mailto:hr@linuxsoftlabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
//             }}
//           >
//             <div className="mb-3">
//               <label htmlFor="subject" className="form-label">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="subject"
//                 name="subject"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">
//                 Message
//               </label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 rows="5"
//                 placeholder="Mention Mobile Number - Will call you later"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Send Message
//             </button>
//           </form>
          
          
//           */}


// <form
//     onSubmit={(e) => {
//       e.preventDefault();
//       const email = e.target.email.value;
//       const subject = e.target.subject.value;
//       const message = e.target.message.value;
//       const fullMessage = `From: ${email}\n\n${message}`;
//       window.location.href = `mailto:hr@linuxsoftlabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
//     }}
//   >
//     <div className="mb-3">
//       <label htmlFor="email" className="form-label">
//         Your Email
//       </label>
//       <input
//         type="email"
//         className="form-control"
//         id="email"
//         name="email"
//         required
//       />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="subject" className="form-label">
//         Subject
//       </label>
//       <input
//         type="text"
//         className="form-control"
//         id="subject"
//         name="subject"
//         required
//       />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="message" className="form-label">
//         Message
//       </label>
//       <textarea
//         className="form-control"
//         id="message"
//         name="message"
//         rows="5"
//         placeholder="Mention Mobile Number - Will call you later"
//         required
//       ></textarea>
//     </div>
//     <button type="submit" className="btn btn-primary">
//       Send Message
//     </button>
//   </form>
//         </div>
//       </div>
//     </div>
//   </section>
// );



const Contact = () => (
  <section className="section py-5">
    <div className="container">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row mb-4">
        <div className="col-md-6">
          <h5>Address</h5>
          <p>507, Global Business Hub, Kharadi, Pune, Maharashtra. 411014</p>

          <h5>Opening Hours</h5>
          <p>Mon to Fri: 9:30 AM to 7:00 PM</p>

          <h5>Have Questions?</h5>
          <p>
            When it comes to managing your business's IT needs, expertise is crucial.
            That's where we excel.
          </p>

          <p>Feel free to send us a message on WhatsApp if you have any inquiries.</p>

<p>

<a class="whatsapp-button" href="https://wa.me/9021220423" target="_blank">Click for WhatsApp message </a>
</p>


          <p><strong>Email:</strong> <a href="mailto:hr@linuxsoftlabs.com">hr@linuxsoftlabs.com</a></p>
        </div>

        <div className="col-md-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value;
              const subject = e.target.subject.value;
              const message = e.target.message.value;
              const fullMessage = `From: ${email}\n\n${message}`;
              window.location.href = `mailto:hr@linuxsoftlabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
            }}
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Mention Mobile Number - Will call you later"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);


const Footer = () => (
  <footer className="bg-light text-center py-3">
    <div className="container">
      <p>&copy; 2025 LinuxSoftLabs. All Rights Reserved.</p>
    </div>
  </footer>
);

const NotFound = () => (
  <section className="section text-center py-5">
    <div className="container">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">The page you're looking for doesn't exist.</p>
      <Link className="btn btn-primary" to="/">
        Go Home
      </Link>
    </div>
  </section>
);

const App = () => (
  <Router>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LinuxSoftLabs
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </Router>
);

export default App;
