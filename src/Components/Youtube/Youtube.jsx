import React, { useEffect } from "react";
import "./Youtube.css";

function Youtube() {
  const videos = [
    {
      id: "pDyo4y_xMQU",
      title: "",
      description: "المفتي الدكتور الشيخ مالك الشعار",
    },
    {
      id: "R2Y-2vfd1f4",
      title: "",
      description:
        "في حلقة إستثنائية بمناسبة شهر رمضان المبارك.. المفتي الشيخ مالك الشعار ضيف بدنا الحقيقة مع وليد عبود",
    },
    {
      id: "aUzIdNLa9ik",
      title: "",
      description:
        'كرامة الإنسان." سماحة مفتي طرابلس والشمال الدكتور الشيخ مالك الشعار حفظه الله تعالى',
    },
    {
      id: "Z7HOpJeyA8M",
      title: "",
      description: "مؤتمر صحافي لمفتي طرابلس والشمال الشيخ مالك الشعار",
    },
    {
      id: "fT9aUX8SGTY",
      title: "",
      description:
        "رسالة سماحة المفتي طرابلس والشمال الشيخ الدكتور مالك الشعار لمناسبة عيد الفطر السعيد",
    },
    {
      id: "كلمة مفتي طرابلس والشمال د. مالك الشعار بمناسبة حلول شهر رمضان المبارك",
      title: "",
      description:
        "كلمة مفتي طرابلس والشمال د. مالك الشعار بمناسبة حلول شهر رمضان المبارك",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="youtube-container">
      <div className="youtube-hero">
        <h1>منبر سماحة المفتي مالك الشعار</h1>
        <p>
          مختارات من الخطب والمحاضرات والمقابلات التي تُجسّد فكر الاعتدال ورسالة
          الإيمان والوطن.
        </p>
      </div>

      <div
        className="videos-grid"
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}
      >
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Youtube;
