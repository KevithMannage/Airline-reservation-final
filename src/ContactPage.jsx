import React, { useState } from 'react';
import styles from './ContactPage.module.css';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    city: '',
    country: '',
    email: '',
    confirmEmail: '',
    question: '',
    comment: '',
  });
  const [charCount, setCharCount] = useState(0);
  const charLimit = 300;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'comment') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
      </header>

      <section className={styles.sectionHeader}>
        <h2>Office Contact Info</h2>
        <div className={styles.contactItem}>
          <h3>Office Address</h3>
          <p>123 Main St</p>
          <p>Suite 400</p>
          <p>Springfield</p>
        </div>
        <div className={styles.contactItem}>
          <h3>Phone Number</h3>
          <p><a href="tel:+18001234567">+1-800-123-4567</a></p>
        </div>
        <div className={styles.contactItem}>
          <h3>Email Address</h3>
          <p><a href="mailto:contact@airways.com">contact@airways.com</a></p>
        </div>
      </section>

     

     
    </div>
  );
};

export default ContactPage;
