import { useState } from 'react';
import '../styles/reservationForm.css'; // Adjust the path as necessary

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', date: '', time: '', guests: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email required';
    if (!formData.date) errs.date = 'Date required';
    if (!formData.time) errs.time = 'Time required';
    if (!formData.guests || parseInt(formData.guests) < 1) errs.guests = 'Guests must be at least 1';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('https://formspree.io/f/xyzpdoen', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', email: '', date: '', time: '', guests: '' });
          setErrors({});
          setTimeout(() => setSubmitted(false), 5000); // hide after 5s
        } else {
          alert('Something went wrong. Please try again later.');
        }
      } catch (err) {
        console.error(err);
        alert('Failed to send reservation.');
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(errs);
    }
  };

  return (
    <section id="reservations" className="reservation-section">
      <h2>Reserve a Table</h2>

      {submitted && (
        <p className="success-msg">✅ Reservation sent successfully!</p>
      )}

      <form onSubmit={handleSubmit} noValidate className="reservation-form">
        <div className="form-group">
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input name="date" type="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>

        <div className="form-group">
          <input name="time" type="time" value={formData.time} onChange={handleChange} />
          {errors.time && <span className="error">{errors.time}</span>}
        </div>

        <div className="form-group">
          <input name="guests" type="number" placeholder="Guests" value={formData.guests} onChange={handleChange} />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Booking...' : 'Book Now'}
        </button>
      </form>
    </section>
  );
};

export default ReservationForm;
