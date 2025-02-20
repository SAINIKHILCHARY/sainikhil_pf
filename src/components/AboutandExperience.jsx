import { FaAngleRight } from "react-icons/fa6";
import webzene from "../assets/logo copy.png";
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import udemy from "../assets/Udemy-Logo.png";
import octanet from "../assets/octanet.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logoRoomee from "../assets/logo_name.png";
import logoCodetex from "../assets/logo_codetex.png";
import tcsion from "../assets/tcsion.webp";

import byteXL from "../assets/bytexl.jpeg";
import Skills from "./Skills";

const AboutandExperience = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20 w-full flex flex-col">
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full h-full p-5 justify-center">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">About Me</h1>
            <Link
              to={"/about-me"}
              className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600"
            >
              View More
              <FaArrowRightLong />
            </Link>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white lg:p-16 md:p-16 p-10 pb-7 ">
            <p className="text-gray-600 lg:flex md:flex hidden  leading-[25px]  text-pretty lg:text-justify w-full md:text-justify  lg:tracking-normal md:tracking-normal tracking-tight text-justify">
              Experienced Full Stack Developer with over 1.8 years of hands-on
              internship experience in MERN Stack, proficient in Node.js, and
              skilled in leveraging Java for creative problem-solving.
              Possessing multiple certifications in diverse IT domains, I
              showcase expertise in web development and software engineering.
              Recognized as a collaborative team player, I am known for
              delivering high-quality code, demonstrating strong problem-solving
              acumen, and effective communication skills. Eagerly committed to
              staying ahead of the curve by embracing cutting-edge technologies.
            </p>
            <p className="text-gray-600   leading-[30px]   text-justify lg:hidden flex md:hidden">
              Experienced Full Stack Developer with 1.8+ years of internship in
              MERN Stack, adept in Node.js and proficient in Java. Holds
              certifications in diverse IT domains, showcasing expertise in web
              development and software engineering. Recognized as a
              collaborative team player, delivering high-quality code with
              strong problem-solving acumen and effective communication skills.
              Committed to staying ahead by embracing cutting-edge technologies.
            </p>
            <button
              onClick={() => navigate("/about-me")}
              className="mt-5 flex items-center gap-1 p-3 border rounded-xl font-semibold text-blue-500 hover:translate-y-1 duration-300 "
            >
              Read More
              <FaAngleRight />
            </button>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white lg:p-10 md:p-10 p-5 pb-7">
            <h1 className="text-xl font-semibold">Follow my work on</h1>
            <p className="mt-3 text-gray-600">
              Please view my most recent work videos and images by clicking on
              the links below.
            </p>
            <div className="lg:mt-4 md:mt-6 mt-8 flex gap-5">
              <Link
                to={"https://www.instagram.com/scribblecode/"}
                target="_blank"
              >
                <img src={insta} alt="" className="w-10 h-10" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/madupu-sainikhil-151928275/"}
                target="_blank"
              >
                <img src={linkedin} alt="" className="w-10 h-10" />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full h-full p-5 mt-10 lg:mt-0 md:mt-10 ">
          <div className="flex justify-between flex-col gap-3 lg:flex-row lg:gap-0 md:flex-row md:gap-0">
            <h1 className="lg:text-3xl text-3xl md:text-3xl font-semibold">
              Latest Experience
            </h1>
            <Link
              className="flex items-center gap-1 text-blue-400 text-lg lg:text-base md:text-base cursor-pointer hover:text-blue-600"
              to={"/experience"}
            >
              Browse all
              <FaArrowRightLong />
            </Link>
          </div>

          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-8 pb-7">
            <div className=" flex flex-col ">
              <div className="flex lg:flex-row flex-col md:flex-row gap-5 lg:gap-0 md:gap-0">
                <div className="lg:w-1/6 w-full md:w-1/6 flex justify-center">
                  <img
                    src={udemy}
                    alt=""
                    className="lg:w-20 w-32 lg:h-11 h-auto md:w-20 md:h-11 object-cover"
                  />
                </div>
                <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                  <div className="flex justify-between w-full lg:flex-row flex-col md:flex-row gap-3 lg:gap-0 md:gap-0 items-center">
                    <p className="text-xl font-bold">Udemy</p>
                    <p className="font-bold text-sm text-gray-500">
                      March 2023 - Present
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500 text-center mt-2 mb-3 lg:text-start lg:mt-0 lg:mb-0 md:text-start md:mt-0 md:mb-0">
                    Course Instructor
                  </p>
                  <div className="flex justify-center lg:justify-start md:justify-start">
                    <p className="font-normal text-sm text-justify text-gray-500 lg:w-5/6 md:w-5/6 w-fit  lg:text-start md:text-start">
                      Part-time course instructor at Udemy, where I have
                      published numerous courses on popular topics.
                    </p>
                  </div>
                  <hr className="mt-5 mb-5" />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col md:flex-row gap-5 lg:gap-0 md:gap-0">
                <div className="lg:w-1/6 w-full md:w-1/6 flex justify-center">
                  <img
                    src={byteXL}
                    alt=""
                    className="lg:w-20 w-32 lg:h-11 h-auto md:w-20 md:h-11 object-contain"
                  />
                </div>
                <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                  <div className="flex justify-between w-full lg:flex-row flex-col md:flex-row gap-3 lg:gap-0 md:gap-0 items-center">
                    <p className="text-xl font-bold">ByteXL</p>
                    <p className="font-bold text-sm text-gray-500">
                      March 2024 - Present
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500 text-center mt-2 mb-3 lg:text-start lg:mt-0 lg:mb-0 md:text-start md:mt-0 md:mb-0">
                    Technical Trainer
                  </p>
                  <div className="flex justify-center lg:justify-start md:justify-start">
                    <p className="font-normal text-sm text-gray-500 lg:w-5/6 md:w-5/6 w-fit text-justify lg:text-start md:text-start">
                      I have joined ByteXL as a technical trainer for the
                      ME(A)RN Stack at Parul University in Vadodara, Gujarat.
                    </p>
                  </div>
                  <hr className="mt-5 mb-5" />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col md:flex-row gap-5 lg:gap-0 md:gap-0">
                <div className="lg:w-1/6 w-full md:w-1/6 flex justify-center">
                  <img
                    src={tcsion}
                    alt=""
                    className="lg:w-20 w-32 lg:h-11 h-auto md:w-20 md:h-11 object-cover"
                  />
                </div>
                <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                  <div className="flex justify-between w-full lg:flex-row flex-col md:flex-row gap-3 lg:gap-0 md:gap-0 items-center">
                    <p className="text-xl font-bold">TCSiON</p>
                    <p className="font-bold text-sm text-gray-500">
                      July 2022 - Sep 2022
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500 text-center mt-2 mb-3 lg:text-start lg:mt-0 lg:mb-0 md:text-start md:mt-0 md:mb-0">
                    Frontend Developer Intern
                  </p>
                  <div className="flex justify-center lg:justify-start md:justify-start">
                    <p className="font-normal text-sm text-gray-500 lg:w-5/6 md:w-5/6 w-fit text-justify lg:text-start md:text-start">
                      I developed a full-stack e-commerce website using the MERN
                      Stack, with Strapi as the database management system and
                      Stripe for handling payment transactions.
                    </p>
                  </div>
                  <hr className="mt-5 mb-5" />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col md:flex-row gap-5 lg:gap-0 md:gap-0">
                <div className="lg:w-1/6 w-full md:w-1/6 flex justify-center">
                  <img
                    src={octanet}
                    alt=""
                    className="lg:w-20 w-32 lg:h-11 h-auto md:w-20 md:h-11 object-cover"
                  />
                </div>
                <div className="lg:w-5/6 md:w-5/6 w-full h-full">
                  <div className="flex justify-between w-full lg:flex-row flex-col md:flex-row gap-3 lg:gap-0 md:gap-0 items-center">
                    <p className="text-xl font-bold">Octanet</p>
                    <p className="font-bold text-sm text-gray-500">
                      Dec 2023 - Feb 2024
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500 text-center mt-2 mb-3 lg:text-start lg:mt-0 lg:mb-0 md:text-start md:mt-0 md:mb-0">
                    Web Development Intern
                  </p>
                  <div className="flex justify-center lg:justify-start md:justify-start">
                    <p className="font-normal text-sm text-gray-500 lg:w-5/6 md:w-5/6 w-fit text-justify lg:text-start md:text-start">
                      I&apos;ve developed a visually appealing to-do list
                      application and a landing page using React and Tailwind
                      CSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //!Project Section */}
      <div className="mt-20 w-full h-full p-5">
        <h1 className="text-3xl font-semibold">Latest Projects</h1>
        <div className="flex justify-between flex-col gap-3 lg:flex-row md:flex-row">
          <p className="mt-2 text-lg font-medium text-gray-500">
            Take a look at my standout projects crafted with the MERN Stack.
          </p>
          <Link className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600">
            Browse all
            <FaArrowRightLong />
          </Link>
        </div>
        <div className="flex justify-start lg:gap-10 gap-10 mt-5 md:flex-col lg:flex-row flex-col w-full">
          <div className="lg:w-1/2 w-full border h-full bg-white rounded-2xl p-8 flex flex-col gap-3 justify-between">
            <div className="flex gap-7 lg:gap-5 md:gap-5 items-center flex-col lg:flex-row md:flex-row">
              <div className="lg:w-1/5 md:w-1/5 w-1/2">
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col gap-2 lg:w-4/5 md:w-4/5 w-full text-center lg:text-start">
                <h1 className="text-xl font-semibold">
                  Social media Web Application
                </h1>
                <p className="font-medium text-gray-600">
                  Sharebuzz is a social media web application where user can
                  send friend request to each other, share post, and like each
                  other posts.
                </p>
              </div>
            </div>

            <div className="flex gap-7 lg:gap-5 md:gap-5 items-center flex-col lg:flex-row md:flex-row">
              <div className="lg:w-1/5 md:w-1/5 w-1/2">
                <img src={webzene} alt="" />
              </div>
              <div className="flex flex-col gap-2 lg:w-4/5 md:w-4/5 w-full text-center lg:text-start">
                <h1 className="text-xl font-semibold">Blog Web Application</h1>
                <p className="font-medium text-gray-600">
                  Webzene is a blog web application where user can share blogs
                  and view, comment on others posts. User can change there
                  username and email too.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full border h-full bg-white rounded-2xl p-8 flex flex-col gap-14 justify-between">
            <div className="flex gap-7 lg:gap-5 md:gap-5 items-center flex-col lg:flex-row md:flex-row">
              <div className="lg:w-1/5 md:w-1/5 w-1/2">
                <img src={logoRoomee} alt="" />
              </div>
              <div className="flex flex-col gap-2 lg:w-4/5 md:w-4/5 w-full text-center lg:text-start">
                <h1 className="text-xl font-semibold">
                  Furniture Renting Web Application
                </h1>
                <p className="font-medium text-gray-600">
                  Roomee is a web application focused on furniture renting,
                  showcasing exclusively my front-end development skills. It
                  lacks any backend functionality.
                </p>
              </div>
            </div>

            <div className="flex gap-7 lg:gap-5 md:gap-5 items-center flex-col lg:flex-row md:flex-row">
              <div className="lg:w-1/5 md:w-1/5 w-1/2">
                <img src={logoCodetex} alt="" />
              </div>
              <div className="flex flex-col gap-2 lg:w-4/5 md:w-4/5 w-full text-center lg:text-start">
                <h1 className="text-xl font-semibold">
                  Software development web application
                </h1>
                <p className="font-medium text-gray-600">
                  Codetex is a web application focused on software development
                  startup, showcasing exclusively my front-end development
                  skills. It lacks any backend functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skill Section */}
      <Skills />
      {/* Skill Section */}
    </div>
  );
};

export default AboutandExperience;
