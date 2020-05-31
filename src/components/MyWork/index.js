import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './styles.scss';

const Experience = () => {
  const settings = {
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let slider = null;

  const slide = (e) => {
    console.log(e);
    if (slider) {
      const delta = e.wheelDelta;
      if (delta > 0) {
        slider.slickPrev();
      } else {
        slider.slickNext();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', slide);
    return () => {
      window.removeEventListener('wheel', slide);
    };
  }, []);

  return (
    <section className="timeline-carousel">
      <h1>History timeline</h1>
      <Slider
        className="timeline-carousel__item-wrapper"
        {...settings}
        ref={(element) => {
          slider = element;
        }}
      >
        <div className="timeline-carousel__item">
          <div className="timeline-carousel__image">
            <div
              className="media-wrapper media-wrapper--overlay"
              style={{
                background:
                  "url('https://www.historyonthenet.com/wp-content/uploads/2016/12/135151-004-0D4D550E.jpg') center center",
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="timeline-carousel__item-inner">
            <span className="year">1914</span>
            <span className="month">June 28</span>
            <p>
              Assassination of Archduke Franz Ferdinand of Austria, heir to the Austro-Hungarian
              throne, who was killed in Sarajevo along with his wife Duchess Sophie by Bosnian Serb
              Gavrilo Princip.
            </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        </div>

        <div className="timeline-carousel__item">
          <div className="timeline-carousel__image">
            <div
              className="media-wrapper media-wrapper--overlay"
              style={{
                background:
                  "url('http://factsforkids.net/wp-content/uploads/2013/09/13.jpg') center center",
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="timeline-carousel__item-inner">
            <div className="pointer"></div>
            <span className="month">July 5 </span>
            <p>
              Austria-Hungary seeks German support for a war against Serbia in case of Russian
              militarism. Germany gives assurances of support.
            </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        </div>

        <div className="timeline-carousel__item">
          <div className="timeline-carousel__image">
            <div
              className="media-wrapper media-wrapper--overlay"
              style={{
                background:
                  "url('https://cdn-images-1.medium.com/max/2000/1*tjpdoOeFp6PfczMjqh6JEA.jpeg') center center",
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="timeline-carousel__item-inner">
            <span className="year">1915</span>
            <span className="month">January 2</span>
            <p>
              The Russian offensive in the Carpathians begins. It will continue until April 12.{' '}
            </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        </div>

        <div className="timeline-carousel__item">
          <div className="timeline-carousel__image">
            <div
              className="media-wrapper media-wrapper--overlay"
              style={{
                background:
                  "url('https://ichef-1.bbci.co.uk/news/660/media/images/72349000/jpg/_72349652_generals-on-horseback.jpg') center center",
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="timeline-carousel__item-inner">
            <div className="pointer"></div>
            <span className="month">January 18–19 </span>
            <p>Battle of Jassin. </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        </div>

        <div className="timeline-carousel__item">
          <div className="timeline-carousel__image">
            <div
              className="media-wrapper media-wrapper--overlay"
              style={{
                background:
                  "url('https://thechive.files.wordpress.com/2014/05/world-war-1-photography-30.jpg?quality=85&strip=info&w=550') center center",
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="timeline-carousel__item-inner">
            <span className="year">1916</span>
            <span className="month">January 5–17</span>
            <p>Austro-Hungarian offensive against Montenegro, which capitulates. </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        </div>

        <div className="timeline-carousel__item">
          <div className="timeline-carousel__image">
            <div
              className="media-wrapper media-wrapper--overlay"
              style={{
                background:
                  "url('https://kidskonnect.com/wp-content/uploads/2010/10/Approaching_Omaha.jpg') center center",
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
          <div className="timeline-carousel__item-inner">
            <div className="pointer"></div>
            <span className="month">January 6–7 </span>
            <p>Battle of Mojkovac. </p>
            <a href="#" className="read-more">
              Read more
            </a>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Experience;
