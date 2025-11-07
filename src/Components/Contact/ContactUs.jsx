import React, { useState } from "react";
import "./ContactUs.css";
import bannerImage from "../../assets/carousel/mufti_carousel2.avif";
import Banner from "../Banner";

const ContactBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال الرسالة بنجاح! (This is a demo submission)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Banner img={bannerImage} />
      <section className="contact-banner">
        <div className="contact-overlay">
          <div className="contact-container">
            <h2 className="contact-title">تواصل معنا</h2>
            <p className="contact-subtitle">
              يسعدنا تواصلكم معنا للاستفسارات أو الملاحظات حول نشاطات سماحة
              المفتي مالك الشعار.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="اكتب رسالتك هنا..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-button">
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
