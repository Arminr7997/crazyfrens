import React from "react";
import Slider from "react-slick";
import { Images } from "@/utils/images";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: 32 }}
      onClick={onClick}
    >
      <img src={Images.arrowRight} alt="arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: 32 }}
      onClick={onClick}
    >
      <img src={Images.arrowLeft} alt="arrow" />
    </div>
  );
}

function CarouselSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <SampleNextArrow className={"next"} />,
    prevArrow: <SamplePrevArrow className={"prev"} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-12">
      <Slider {...settings}>
        <div className="px-6">
          <div className="border-2 border-white rounded-4xl text-center py-8">
            <img src={Images.avatar1} alt="avatar" className="m-2 mx-auto " />
            <h3 className="font-oswald text-xl">Mahsa Okhravi</h3>
            <h5 className="font-oswald text-gray-400 text-lg ">
              UI/UX Designer
            </h5>
            <div className="w-full flex items-center justify-center ">
              <div
                className="bg-dark px-12 rounded"
                style={{ marginBottom: "-56px", marginTop: "20px" }}
              >
                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>

                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="border-2 border-white p-4 rounded-4xl text-center py-8">
            <img src={Images.avatar2} alt="avatar" className="m-2 mx-auto " />
            <h3 className="font-oswald text-xl">Amirhossein Rahmani</h3>
            <h5 className="font-oswald text-gray-400 text-lg">
              Full Stack Developer
            </h5>
            <div className="w-full flex items-center justify-center ">
              <div
                className="bg-dark px-12 rounded"
                style={{ marginBottom: "-56px", marginTop: "20px" }}
              >
                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase  hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>

                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="border-2 border-white p-4 rounded-4xl text-center py-8">
            <img src={Images.avatar3} alt="avatar" className="m-2 mx-auto " />
            <h3 className="font-oswald text-xl">Bahareh Okhravi</h3>
            <h5 className="font-oswald text-gray-400 text-lg">
              Graphic Designer
            </h5>
            <div className="w-full flex items-center justify-center ">
              <div
                className="bg-dark px-12 rounded"
                style={{ marginBottom: "-56px", marginTop: "20px" }}
              >
                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>

                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="border-2 border-white p-4 rounded-4xl text-center py-8">
            <img src={Images.avatar4} alt="avatar" className="m-2 mx-auto " />
            <h3 className="font-oswald text-xl">Narmin Rahmani</h3>
            <h5 className="font-oswald text-gray-400 text-lg">
              Product Manager
            </h5>
            <div className="w-full flex items-center justify-center ">
              <div
                className="bg-dark px-12 rounded"
                style={{ marginBottom: "-56px", marginTop: "20px" }}
              >
                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>

                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="border-2 border-white p-4 rounded-4xl text-center py-8">
            <img src={Images.avatar4} alt="avatar" className="m-2 mx-auto " />
            <h3 className="font-oswald text-xl">Narmin Rahmani</h3>
            <h5 className="font-oswald text-gray-400 text-lg">
              Product Manager
            </h5>
            <div className="w-full flex items-center justify-center ">
              <div
                className="bg-dark px-12 rounded"
                style={{ marginBottom: "-56px", marginTop: "20px" }}
              >
                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>

                <a
                  href="#!"
                  className="rounded-full text-white leading-normal uppercase hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-8 h-8 m-1 py-2 px-1"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselSlider;
