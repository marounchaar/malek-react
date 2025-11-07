import React from "react";
import "./Library.css";
import bannerImage from "../../assets/carousel/mufti_carousel2.avif";
import Book1 from "../../assets/books/book1.png"
import Book2 from "../../assets/books/book2.png"
import Book3 from "../../assets/books/book3.png"
import Banner from "../Banner";

const books = [
  {
    title: "سماحة المفتي الدكتور الشيخ مالك الشعار الكلم الطيب",
    // author: "المفتي مالك الشعار",
    cover: Book1,
    pdf: "/pdfs/book1.pdf",
  },
  {
    title: "المفتي الشيخ مالك الشعار رجل الاعتدال والحوار",
    // author: "المفتي مالك الشعار",
    cover: Book2,
    pdf: "/pdfs/book2.pdf",
  },
  {
    title: "بسمات",
    // author: "المفتي مالك الشعار",
    cover: Book3,
    pdf: "/pdfs/book3.pdf",
  },
];
const bannerContent = [
  {
    title: "القيادة في الإيمان",
    subtitle: "تمكين التغيير بالنزاهة والرؤية",
    description:
      "كرجل دين ومصلح اجتماعي، تجاوزت رسالة الشيخ مالك الشعار حدود المنبر، فدعا إلى المسؤولية المدنية والتعليم والقيادة الأخلاقية في خدمة المجتمع.",
  },
];
const Library = () => {
  return (
    <>
      <Banner img={bannerImage} />
      <section className="library-section">
        <div className="library-header">
          <h2 className="library-title">مكتبة المفتي مالك الشعار</h2>
          <p className="library-subtitle">
            مجموعة من مؤلفات وكتب سماحته التي تعكس فكره الوسطي ورسائله في الوحدة
            الوطنية والإيمان.
          </p>
        </div>

        <div className="library-grid container">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-cover-wrapper">
                <img src={book.cover} alt={book.title} className="book-cover" />
                <div className="book-overlay">
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="book-button"
                  >
                    قراءة الكتاب
                  </a>
                </div>
              </div>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Library;
