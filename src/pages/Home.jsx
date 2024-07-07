import React from "react";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* // Hero section */}
      <section
        className="hero__section 2xl:h-[700px]
        mb-10	"
      >
        <div className="container">
          <div
            className="flex flex-col lg:flex-row gap-[80px]
            items-center justify-between"
          >
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[36px] leading-[30px] text-headingColor
                    font-[800] md:text-[45px] md:leading-[70px]"
                >
                  Calm down, It'll be fine, let us help you out!
                </h1>
                <p className="text__para">
                  Welcome to Mindful Healing, your trusted resource for
                  depression and anxiety treatment. Our experienced
                  professionals offer personalized therapy and support,
                  dedicated to helping you achieve emotional well-being through
                  evidence-based practices and holistic approaches. Take the
                  first step towards healing today.
                </p>
                <Link to="/doctors">
                  <button className="btn bg-orange-950">
                    Book an Appointment
                  </button>
                </Link>
              </div>

              {/* hero counter */}
              <div
                className="mt-[15px] lg:mt-[30px] flex flex-col lg:flex-row
                  lg:items-center gap-5 lg:gap-[30px]"
              >
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor"
                  >
                    1+
                  </h2>
                  <span
                    className="w-[100px] h-2 bg-orange-200 rounded-full
                      block mt-[-14px]"
                  ></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px]
                      lg:leading-[54px] font-[700] text-headingColor"
                  >
                    100%
                  </h2>
                  <span
                    className="w-[100px] h-2 bg-orange-200 rounded-full
                      block mt-[-14px]"
                  ></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* hero content */}
            <div className="">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175174.jpg?t=st=1720277519~exp=1720281119~hmac=9f24436ec41eae57fce9e4cc87240fd3fa4b89987160b6d3843160e15a4ddf2a&w=996"
                  alt=""
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* feature sectoin */}
      <section>
        <div className="container">
          <div
            className="flex items-center justify-between flex-col
            lg:flex-row"
          >
            {/* feature content */}
            <div className="xl:w-[670]">
              <h2 className="heading">
                Get virtual treatement <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1.Schedule the appoinemnt directly
                </li>
                <li className="text__para">2.Know your mental condition</li>
                <li className="text__para">
                  3.Be ready to live like a happy life
                </li>
              </ul>
              <Link to="/">
                <button className="btn bg-orange-950">Learn More</button>
              </Link>
            </div>
            {/* feature img */}
            <div
              className="relative z-10 xl:w-[770px] flex justify-end
              mt-[50px] lg:mt-0"
            >
              <img
                src="https://img.freepik.com/free-photo/close-up-patient-talking-doctor-online_23-2148868132.jpg?t=st=1720278473~exp=1720282073~hmac=8756d8415a474173878726f465152bd500484a2402c2313108fb2347b116e7bb&w=996"
                alt=""
                className="w-3/4"
              />
              <div
                className="w-[150px] lg:w-[248px] bg-orange-950 absolute
                bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20
                p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-[6px]
                    lg:gap-3"
                  >
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px]
                      lg:leading-5 text-white font-[600]"
                    >
                      Mon, 18
                    </p>
                    <p
                      className="text-[10px] leading-[10px] lg:text-[14px]
                      lg:leading-5 text-gray-300 font-[600]"
                    >
                      7:00 PM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px]
                    flex items-center justify-center bg-orange-200 py-1 rounded
                    px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65px] lg:w-[96px] bg-orange-200 py-1
                  px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px]
                  lg:leading-4 text-orange-950 font-[500]
                  mt-2 lg:mt-4 rounded-full"
                >
                  Consultation
                </div>
                <div
                  className="flex items-center gap-[6px]
                  lg:gap-[10px] mt-2 lg:mt-[18px]"
                >
                  <img src={avatarIcon} alt="" />
                  <h4
                    className="text-[10px] leading-3 lg:text-[16px]
                    lg:leading-[22px] font-[700] text-white"
                  >
                    Dr john
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our great doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              aliquid quibusdam perferendis <br></br>
              quam ullam optio impedit fuga, vitae enim reiciendis! Soluta quae
              rem natus perspiciatis
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* faq */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our beloved patiens</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patients says</h2>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
