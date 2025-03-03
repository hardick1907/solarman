import { useState } from "react";
import { motion } from "framer-motion";
import faq from "../../assets/faq.png";

const faqs = [
  { question: "What is your refund policy?", answer: "We offer a 30-day refund policy on all purchases." },
  { question: "How long does shipping take?", answer: "Shipping typically takes 5-7 business days." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with additional fees." },
  { question: "Can I track my order?", answer: "Yes, you will receive a tracking link once your order is shipped." },
  { question: "Do you offer bulk discounts?", answer: "Yes, we offer discounts for bulk purchases. Contact us for details." },
  { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and Apple Pay." },
  { question: "Do you have a physical store?", answer: "No, we operate exclusively online." },

];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-5xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-24 px-20 mx-auto w-full">
        {/* Left-aligned Image */}
        <motion.img 
          src={faq} 
          alt="FAQ Illustration" 
          className="w-[900px] md:w-1/3"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
        />
        
        {/* Right-aligned FAQ Accordion */}
        <div className="w-full md:w-2/3 p-4">
          <div className="join join-vertical w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="radio" name="faq-accordion" checked={openIndex === index} onChange={() => handleChange(index)} />
                <div className="collapse-title text-lg font-medium">{faq.question}</div>
                <div className="collapse-content">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
