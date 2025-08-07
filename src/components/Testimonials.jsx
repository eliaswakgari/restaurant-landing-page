import { useEffect, useState, useRef } from 'react';
import testimonials from '../data/testimonials.json';
import '../styles/Testimonials.css'; // Ensure you have the correct path to your CSS file

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const sliderRef = useRef();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // 🔁 Auto-play every 5s
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // 👉 Swipe support
  useEffect(() => {
    const slider = sliderRef.current;
    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);

    return () => {
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // ⭐️ Star Renderer
  const renderStars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

  return (
    <section className="testimonials-section">
      <h2>What Our Guests Say</h2>
      <div className="testimonial-carousel" ref={sliderRef}>
        <button onClick={prevSlide} className="nav-btn prev">❮</button>

        <div className="testimonial-slide">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`testimonial-card ${index === current ? 'active' : ''}`}
            >
              <p className="quote">“{t.text}”</p>
              <div className="author-stars">
                <span className="author">– {t.author}</span>
                <span className="stars">{renderStars(t.rating)}</span>
              </div>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="nav-btn next">❯</button>
      </div>
    </section>
  );
};

export default Testimonials;
