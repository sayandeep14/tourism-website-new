import React from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a tour?",
      answer:
        "Go to the Tours page and select 'Book Now' on your preferred package.",
    },
    {
      question: "Can I cancel my booking?",
      answer: "Yes, up to 7 days before the trip starts. See our Terms page.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes! Groups of 5+ travelers get 10% off automatically.",
    },
  ];

  return (
    <div className="faq-page">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item, i) => (
        <div key={i} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
