import React from "react";
import { createRoot } from "react-dom/client";
import { Phone, MessageCircle, ArrowRight, Leaf, ShieldCheck, Truck, Heart, Instagram, Facebook } from "lucide-react";
import "./styles.css";

const phone = "923494050691";
const displayPhone = "0349 4050691";

const products = [
  {
    icon: "🧈",
    name: "Desi Ghee",
    description: "Traditional desi ghee made with care for rich taste and authentic aroma.",
    tag: "Farm Fresh"
  },
  {
    icon: "🥚",
    name: "Desi Eggs",
    description: "Fresh desi eggs sourced from healthy, naturally raised hens.",
    tag: "Fresh Daily"
  },
  {
    icon: "🐇",
    name: "Rabbit Meat",
    description: "Fresh, carefully handled rabbit meat from our own farm.",
    tag: "Farm Raised"
  }
];

function orderUrl(product = "") {
  const message = product
    ? `Assalam-o-Alaikum, I would like to order ${product} from Desi Virsa.`
    : "Assalam-o-Alaikum, I would like to know more about Desi Virsa products.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">DV</span>
          <span>
            <strong>Desi Virsa</strong>
            <small>Pure. Traditional. Desi.</small>
          </span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-order" href={orderUrl()} target="_blank" rel="noreferrer">
          Order Now <ArrowRight size={17} />
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><Leaf size={16} /> From our farm to your home</div>
            <h1>Real Desi Taste.<br /><em>Purely from the farm.</em></h1>
            <p>
              Bringing you authentic farm-fresh products made with traditional values,
              honest care and the taste of our villages.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#products">Explore Products <ArrowRight size={18} /></a>
              <a className="text-btn" href={orderUrl()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Order on WhatsApp
              </a>
            </div>
            <div className="trust-row">
              <span><ShieldCheck size={18} /> Quality focused</span>
              <span><Heart size={18} /> Traditional values</span>
              <span><Truck size={18} /> Farm fresh</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="sun"></div>
            <div className="hill hill-one"></div>
            <div className="hill hill-two"></div>
            <div className="farm-card">
              <div className="farm-emoji">🌾</div>
              <span>DESI VIRSA</span>
              <strong>From the land we love</strong>
            </div>
            <div className="floating-card card-one">🥚 <span>Fresh Eggs</span></div>
            <div className="floating-card card-two">🧈 <span>Desi Ghee</span></div>
          </div>
        </section>

        <section className="intro">
          <div>
            <span className="section-kicker">OUR PROMISE</span>
            <h2>Simple products.<br />Honest goodness.</h2>
          </div>
          <p>
            Desi Virsa is built around a simple idea: bring genuine desi products
            from our farm closer to your family. We start small, care about quality,
            and will keep adding products rooted in our traditional food culture.
          </p>
        </section>

        <section id="products" className="products section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">OUR PRODUCTS</span>
              <h2>What we offer</h2>
            </div>
            <p>Our first collection is small and carefully selected. More desi favourites are coming.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-visual">
                  <span className="product-icon">{product.icon}</span>
                  <span className="product-tag">{product.tag}</span>
                </div>
                <div className="product-body">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <a href={orderUrl(product.name)} target="_blank" rel="noreferrer">
                    Ask / Order <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="future-products">
            <span>Coming to Desi Virsa</span>
            <strong>Makhan · Paneer · Khoya · Kheer · More traditional favourites</strong>
          </div>
        </section>

        <section id="story" className="story section">
          <div className="story-art">
            <div className="story-badge">DESI<br />VIRSA</div>
            <div className="story-illustration">🐄</div>
            <div className="story-grass">🌿 🌾 🌿</div>
          </div>
          <div className="story-copy">
            <span className="section-kicker">OUR STORY</span>
            <h2>Rooted in tradition.<br />Growing for tomorrow.</h2>
            <p>
              Desi Virsa is a farm-to-family brand focused on traditional Pakistani
              products. We believe good food starts with good care — of the animals,
              the ingredients and the people who enjoy them.
            </p>
            <p>
              We are starting with desi ghee, desi eggs and rabbit meat, with plans
              to grow into a wider collection of authentic dairy and farm products.
            </p>
            <a className="primary-btn small" href={orderUrl()} target="_blank" rel="noreferrer">
              Talk to us <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="values section">
          <div className="section-heading centered">
            <span className="section-kicker">WHY DESI VIRSA</span>
            <h2>Values you can taste</h2>
          </div>
          <div className="value-grid">
            <div><span>01</span><Leaf /><h3>Farm Focused</h3><p>We stay close to where our products begin.</p></div>
            <div><span>02</span><Heart /><h3>Traditional Values</h3><p>Respecting the foods and methods passed down to us.</p></div>
            <div><span>03</span><ShieldCheck /><h3>Quality First</h3><p>Careful handling and attention at every step.</p></div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div>
            <span className="section-kicker">READY TO ORDER?</span>
            <h2>Bring a little<br /><em>Desi Virsa</em> home.</h2>
            <p>Message us for product availability, prices and orders.</p>
          </div>
          <div className="contact-box">
            <a href={orderUrl()} target="_blank" rel="noreferrer" className="contact-action">
              <MessageCircle />
              <span><small>WhatsApp</small><strong>Chat with Desi Virsa</strong></span>
              <ArrowRight />
            </a>
            <a href={`tel:${phone}`} className="contact-action">
              <Phone />
              <span><small>Call us</small><strong>{displayPhone}</strong></span>
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">DV</span>
            <span><strong>Desi Virsa</strong><small>Pure. Traditional. Desi.</small></span>
          </div>
          <p>Authentic desi products, rooted in tradition.</p>
        </div>
        <div className="footer-links">
          <a href="#products">Products</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socials">
          <a href="#" aria-label="Facebook"><Facebook size={19}/></a>
          <a href="#" aria-label="Instagram"><Instagram size={19}/></a>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Desi Virsa. All rights reserved.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
