import { useState } from "react";
import "./App.css";
import {
  Twitter,
  Facebook,
  Linkedin,
  BookOpenText,
  Users,
  ChartNoAxesCombined,
  Star,
  Check,
  Phone,
  MapPin,
  Mail,
  Menu,
  X,
} from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <nav>
        <h1>TaskFlow</h1>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
        <Menu size={30} className="menu_icon" onClick={toogleMenu} />
        <div
          className="mobile_nav"
          style={{ display: isOpen ? "flex" : "none" }}
        >
          <ul className="mobile_list">
            <X size={30} className="close_icon" onClick={closeNav} />
            <li onClick={closeNav}>Home</li>
            <li onClick={closeNav}>Pricing</li>
            <li onClick={closeNav}>Reviews</li>
            <li onClick={closeNav}>Contact</li>
          </ul>
        </div>
      </nav>
      <section className="top">
        <h1 className="title">Organize your life with TaskFlow</h1>
        <p>
          The ultimate task management app that helps you stay productive,
          organized, and focused on what matters most. Transform chaos into
          clarity.
        </p>
        <button className="download-btn">Start Your Journey</button>
      </section>
      <section className="features">
        <h1>Why choose TaskFlow?</h1>
        <div className="block">
          <div className="content">
            <BookOpenText size={34} />
            <h4>Smart Task Management</h4>
            <p>
              Organize your tasks with intelligent categorization, priority
              levels, and due date reminders. Never miss an important deadline
              again with our advanced scheduling system.
            </p>
          </div>
          <div className="content">
            <Users size={34} />
            <h4>Team Collaboration</h4>
            <p>
              Work seamlessly with your team through shared projects, real-time
              updates, and collaborative workspaces. Boost productivity with
              integrated communication tools.
            </p>
          </div>
          <div className="content">
            <ChartNoAxesCombined size={34} />
            <h4>Progress Analytics</h4>
            <p>
              Track your productivity with detailed analytics and insights.
              Identify patterns, optimize your workflow, and celebrate your
              achievements with visual progress reports.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h1>What Our Users Say</h1>
        <div className="testimonial">
          <div className="testi">
            <div className="stars">
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
            </div>
            <p>
              "TaskFlow completely transformed how I manage my daily workflow.
              The intuitive design and powerful features make it incredibly easy
              to stay organized and productive."
            </p>
            <div className="info">
              <div className="abbreviation">SA</div>
              <div className="name">
                <p>Sarah Anderson</p>
                <p className="job_title">Project Manager, TechCorp</p>
              </div>
            </div>
          </div>
          <div className="testi">
            <div className="stars">
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
            </div>
            <p>
              "As a freelancer juggling multiple clients, TaskFlow keeps me on
              track with everything. The team collaboration features are perfect
              for client projects."
            </p>
            <div className="info">
              <div className="abbreviation">MJ</div>
              <div className="name">
                <p>Michael Johnson</p>
                <p className="job_title">Freelance Designer</p>
              </div>
            </div>
          </div>
          <div className="testi">
            <div className="stars">
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
              <Star size={24} color="yellow" />
            </div>
            <p>
              "The analytics feature helped me understand my productivity
              patterns. I've increased my efficiency by 40% since using
              TaskFlow. Highly recommended!"
            </p>
            <div className="info">
              <div className="abbreviation">ER</div>
              <div className="name">
                <p>Emily Rodriguez</p>
                <p className="job_title">Marketing Director, StartupXYZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricings">
        <h1>Choose Your Plan</h1>
        <div className="pricing">
          <div className="price">
            <p className="pricing_title">Free</p>
            <div className="amount">
              <h1>$0</h1>
              <p className="month">/month</p>
            </div>
            <ul className="pricing_list">
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
            </ul>
            <button className="pricing_btn">Get Started Now</button>
          </div>
          <div className="price">
            <p className="pricing_title">Paid</p>
            <div className="amount">
              <h1>$30</h1>
              <p className="month">/month</p>
            </div>
            <ul className="pricing_list">
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
            </ul>
            <button className="pricing_btn">Start Pro Trial</button>
          </div>
          <div className="price">
            <p className="pricing_title">Team</p>
            <div className="amount">
              <h1>$50</h1>
              <p className="month">/month</p>
            </div>
            <ul className="pricing_list">
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
              <li>
                <Check
                  size={16}
                  color="green"
                  style={{ marginRight: "15px" }}
                />
                Get Notified
              </li>
            </ul>
            <button className="pricing_btn">Contact Sales</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer">
          <div className="footer-content">
            <h3>TaskFlow</h3>
            <p style={{ maxWidth: "400px" }}>
              Empowering productivity through intelligent task management. Join
              thousands of users who have transformed their workflow with
              TaskFlow.
            </p>
            <div>
              <Twitter
                style={{
                  borderRadius: "50px",
                  padding: "8px",
                  backgroundColor: "rgb(51,65,85)",
                  marginRight: "10px",
                }}
              />
              <Facebook
                style={{
                  borderRadius: "50px",
                  padding: "8px",
                  backgroundColor: "rgb(51,65,85)",
                  marginRight: "10px",
                }}
              />
              <Linkedin
                style={{
                  borderRadius: "50px",
                  padding: "8px",
                  backgroundColor: "rgb(51,65,85)",
                }}
              />
            </div>
          </div>
          <div className="footer-content">
            <h3>Product</h3>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Api Documentation</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Contact Status</li>
              <li>Community</li>
              <li>Tutorial</li>
            </ul>
          </div>
          <div className="footer-content">
            <h3>Contact Info</h3>
            <p>
              <Mail size={16} />
              amina@taskflow.com
            </p>
            <p>
              <Phone size={16} />
              123456789
            </p>
            <p>
              <MapPin size={16} />
              123 Productivity St
            </p>
          </div>
        </div>
        <div className="copywrite">
          <p>
            © 2024 TaskFlow. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
