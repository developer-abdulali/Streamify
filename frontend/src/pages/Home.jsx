import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import faqImg from "../assets/images/faq-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-extrabold md:text-[60px] md:leading-[70px]">
                  We help patient live a healthy, loger life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                  explicabo illum minus adipisci accusamus enim sed fugiat optio
                  atque nostrum amet, veniam consequatur nesciunt maiores
                  tenetur itaque soluta earum reiciendis?
                </p>
                <button className="btn">Request an Appoinment</button>
              </div>

              {/* hero content start */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]" />
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]" />
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-bold text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]" />
                  <p className="text_para">Patient Satisfacation</p>
                </div>
              </div>
              {/* hero content end */}
            </div>

            {/* hero section img start */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt="Doctor 1" className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt="Doctor 2"
                  className="w-full mb-[30px]"
                />
                <img src={heroImg03} alt="Doctor 3" className="w-full" />
              </div>
            </div>
            {/* hero section img end */}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the medical services
            </h2>
            <p className="text_para text-center">
              World-class care of everyone. Our health system offers unmatched,
              export health care.
            </p>
          </div>
          {/* how it works section start */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="icon1" />
              </div>
              <div className="mt-[32px]">
                <h2 className="text-[26px] leading-7 text-textColor font-bold text-center">
                  Find a Doctor
                </h2>
                <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                  World-class care of everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="icon2" />
              </div>
              <div className="mt-[32px]">
                <h2 className="text-[26px] leading-7 text-textColor font-bold text-center">
                  Find a Location
                </h2>
                <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                  World-class care of everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="icon3" />
              </div>
              <div className="mt-[32px]">
                <h2 className="text-[26px] leading-7 text-textColor font-bold text-center">
                  Book Appointment
                </h2>
                <p className="text-base leading-7 text-textColor font-normal mt-4 text-center">
                  World-class care of everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </section>
          {/* how it works section start */}

          {/* about section start */}
          <About />
          {/* about section end */}

          {/* services section start*/}
          <section>
            <div className="container">
              <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our Medical Services</h2>
                <p className="text_para text-center">
                  World-class care of everyone. Our health system offers
                  unmatched, expert health care.
                </p>
              </div>
              <ServicesList />
            </div>
          </section>
          {/* services section end */}

          {/* feature section start */}
          <section>
            <div className="container">
              <div className="flex items-center justify-between flex-col lg:flex-row">
                <div className="xl:w-[670px]">
                  <h2 className="heading">
                    Get virtual treatment <br /> anytime.
                  </h2>
                  <ul className="pl-4">
                    <li className="text_para">
                      1. Schedule the appointment directly.
                    </li>
                    <li className="text_para">
                      2. Search for your physician here, and contact their
                      office.
                    </li>
                    <li className="text_para">
                      3. View your physicians who are accepting new patients,
                      use the online scheduling tool to select an appointment
                      time.
                    </li>
                  </ul>
                  <Link to="/">
                    <button className="btn">Learn More</button>
                  </Link>
                </div>
                {/* feature section img */}
                <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                  <img src={featureImg} alt="feature pic" />
                  <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-20 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 lg:gap-3">
                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-normal">
                          Tue, 24
                        </p>
                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-normal">
                          10:00 AM
                        </p>
                      </div>
                      <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                        <img src={videoIcon} alt="" />
                      </span>
                    </div>

                    <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-medium mt-2 lg:mt-4 rounded-full">
                      Consultation
                    </div>

                    <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                      <img src={avatarIcon} alt="" />
                      <h4 className="text-[10px] font-bold leading-3 lg:text-[16px] lg:leading-[22px] text-headingColor">
                        Adam Jackson
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* feature section end */}

          {/* doctors section start */}
          <section>
            <div className="container">
              <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">Our Great Doctors</h2>
                <p className="text_para text-center">
                  World-class care of everyone. Our health system offers
                  unmatched, expert health care.
                </p>
              </div>
              <DoctorsList />
            </div>
          </section>
          {/* doctors section end */}

          {/* FAQ section start */}
          <section>
            <div className="container">
              <div className="flex justify-between gap-[50px] lg:gap-0">
                <div className="w-1/2 hidden md:block">
                  <img src={faqImg} alt="FAQ" />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="heading">
                    Most questions by out beloved patients
                  </h2>
                  <FaqList />
                </div>
              </div>
            </div>
          </section>
          {/* FAQ section end */}

          {/* Testimonial section start  */}
          <section>
            <div className="container">
              <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">What our patient say</h2>
                <p className="text_para text-center">
                  World-class care for everyone. Our system offers unmatched,
                  expert health care.
                </p>
              </div>
              <Testimonial />
            </div>
          </section>
          {/* Testimonial section end  */}
        </div>
      </section>
    </>
  );
};

export default Home;
