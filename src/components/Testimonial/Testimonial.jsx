import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src="https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?t=st=1720279487~exp=1720283087~hmac=aac6a299634ff47bd5e9415739bea200170ef0ed28a6f846db72b850061bc3a3&w=996"
                alt=""
                className="w-20 rounded-lg"
              />
              <div>
                <h2
                  className="leading-[30px] text-lg font-semibold
                            text-headingColor"
                >
                  Rijurekh Ghosh
                </h2>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-textColor font-normal">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quidem quasi, quibusdam quod quaerat quasi, quibusdam quod
              quaerat quasi, quibusdam quod quaerat"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src="https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?t=st=1720279559~exp=1720283159~hmac=9e27739c150f7d5742a0242b4e6c804a447ded0fa7e4578c08af6f2397a0846d&w=996"
                alt=""
                className="w-20 rounded-lg"
              />
              <div>
                <h2
                  className="leading-[30px] text-lg font-semibold
                            text-headingColor"
                >
                  Swarnava Biswas
                </h2>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-textColor font-normal">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quidem quasi, quibusdam quod quaerat quasi, quibusdam quod
              quaerat quasi, quibusdam quod quaerat"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src="https://img.freepik.com/free-photo/smiling-cute-female-student-casual-shirt_176420-18233.jpg?t=st=1720279698~exp=1720283298~hmac=8fcc62818e92ea6a7f1221df77c5f7884302b55d3557e06a6f7a68b31bcd8b69&w=996"
                alt=""
                className="w-20 rounded-lg"
              />
              <div>
                <h2
                  className="leading-[30px] text-lg font-semibold
                            text-headingColor"
                >
                  Sayantika Ghosh
                </h2>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-textColor font-normal">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quidem quasi, quibusdam quod quaerat quasi, quibusdam quod
              quaerat quasi, quibusdam quod quaerat"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src="https://img.freepik.com/free-photo/beauty-people-emotions-summer-leisure-concept-joyful-carefree-laughing-asian-woman-enjoying-summertime-standing-pink-background-smiling-lively-having-positive-mood_1258-59418.jpg?t=st=1720279825~exp=1720283425~hmac=bb9354ee0b15d5e07962b02d30c8636248aeb2e70ad0a65d5e831360903fabf5&w=996"
                alt=""
                className="w-20 rounded-lg"
              />
              <div>
                <h2
                  className="leading-[30px] text-lg font-semibold
                            text-headingColor"
                >
                  Sanchari Majumder
                </h2>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-textColor font-normal">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quidem quasi, quibusdam quod quaerat quasi, quibusdam quod
              quaerat quasi, quibusdam quod quaerat"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?t=st=1720279752~exp=1720283352~hmac=b343ddb60f04e22576c6700cb429c2dbe27b397999deda3b3282964fa5cd6658&w=996"
                alt=""
                className="w-20 rounded-lg"
              />
              <div>
                <h2
                  className="leading-[30px] text-lg font-semibold
                            text-headingColor"
                >
                  Antara Mudi
                </h2>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-base leading-7 mt-4 text-textColor font-normal">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quaerat quidem quasi, quibusdam quod quaerat quasi, quibusdam quod
              quaerat quasi, quibusdam quod quaerat"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
