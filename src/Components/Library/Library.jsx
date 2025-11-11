import React, { useEffect } from "react";
import "./Library.css";
import {Link} from "react-router-dom"
import bannerImage from "../../assets/carousel/mufti_carousel2.avif";
import Book1 from "../../assets/books/book1.png";
import Book2 from "../../assets/books/book2.png";
import Book3 from "../../assets/books/book3.png";
import PdfBook1 from "../../assets/pdf/الكلم الطيب.pdf"
import PdfBook2 from "../../assets/pdf/المفتي الشيخ مالك الشعار رجل الاعتدال والحوار.pdf"
import PdfBook3 from "../../assets/pdf/بسمات.pdf"
import Banner from "../Banner";

const books = [
  {
    title: "سماحة المفتي الدكتور الشيخ مالك الشعار الكلم الطيب",
    // author: "المفتي مالك الشعار",
    cover: Book1,
    pdf: PdfBook1,
  },
  {
    title: "المفتي الشيخ مالك الشعار رجل الاعتدال والحوار",
    // author: "المفتي مالك الشعار",
    cover: Book2,
    pdf: PdfBook2,
  },
  {
    title: "بسمات",
    // author: "المفتي مالك الشعار",
    cover: Book3,
    pdf: PdfBook3,
  },
];

const Library = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <Link to={book.pdf} target="_blank"
                    rel="noopener noreferrer" key={index} className="book-card">
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Library;
