import React, { useState, useEffect } from 'react';


const slidesData = [
  {
    header: "Fast Food Restaurant",
<<<<<<< HEAD
    text: " Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
=======
    text: "Doloremque, itaque aperiam facilis rerum...",
>>>>>>> 158bdea (slider)
  },
  {
    header: "Healthy Meals",
    text: "Lorem ipsum dolor sit amet, consectetur...",
  },
  {
    header: "Daily Specials",
    text: "Quis autem vel eum iure reprehenderit qui...",
  }
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesData.length);
    }, 3000); // Змінюється кожні 3 секунди
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider_section">
<<<<<<< HEAD
       <div id="customCarousel1" className="carousel slide" data-ride="carousel">
=======
>>>>>>> 158bdea (slider)
      <div className="carousel">
     
        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-item ${index === activeSlide ? 'active' : ''}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>{slide.header}</h1>
                      <p>{slide.text}</p>
                      <div className="btn-box">
                        <a href="#" className="btn1">Order Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container">
          <ol className="carousel-indicators">
            {slidesData.map((_, index) => (
              <li 
                key={index}
                className={index === activeSlide ? 'active' : ''}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </ol>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
