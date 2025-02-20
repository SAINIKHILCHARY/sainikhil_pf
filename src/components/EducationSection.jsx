import saroj from "../assets/saroj_logo.png";
import niet from "../assets/niet_logo.svg";
import angel from "../assets/angel_logo.jpeg";

const EducationSection = () => {
  return (
    <div className=" lg:w-3/5 w-full md:w-full h-full shadow-lg rounded-2xl bg-white p-10 min-h-[700px] flex">
      <div className=" flex flex-col justify-center items-center">
        <div className="flex lg:flex-row md:flex-col flex-col justify-between gap-5 lg:gap-0">
          <div className="lg:w-1/6 w-full flex justify-center items-center">
            <img src={niet} alt="" className="w-28" />
          </div>
          <div className="lg:w-4/5 md:w-full w-full h-full">
            <div className="flex justify-between w-full lg:flex-row flex-col lg:items-center md:items-start gap-3 lg:gap-0">
              <p className="lg:text-xl md:text-xl text-lg font-semibold text-gray-600 md:text-center lg:text-start text-center">
                Noida Institute Of Engineering And Technology, Greater Noida,
                Uttar Pradesh
              </p>
              <p className="font-normal text-sm text-gray-500 md:text-center lg:text-start text-center w-full lg:w-fit mb-3 lg:mb-0">
                October 2020 - Present
              </p>
            </div>
            <div className="flex flex-col gap-1 lg:gap-0">
              <p className="font-semibold text-gray-500 md:text-center lg:text-start text-center">
                Btech Biotechnology
              </p>
              <p className="font-normal text-sm text-gray-500 lg:w-5/6 w-full md:text-center lg:text-start text-center">
                From 2020 to 2024, I have remained actively enrolled in a
                full-time engineering degree program.
              </p>
            </div>

            <hr className="lg:mt-5 md:mt-5 mt-8 lg:mb-5 md:mb-5 mb-8" />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <div className="flex lg:flex-row md:flex-col flex-col justify-between gap-5 lg:gap-0">
            <div className="lg:w-1/6 w-full flex justify-center items-center">
              <img src={saroj} alt="" className="w-28 object-cover" />
            </div>
            <div className="lg:w-4/5 md:w-full w-full h-full">
              <div className="flex justify-between w-full lg:flex-row flex-col lg:items-center md:items-start gap-3 lg:gap-0">
                <p className="lg:text-xl md:text-xl text-lg font-semibold text-gray-600 md:text-center lg:text-start text-center">
                  Saroj Convent Higher Secondary School, Tikamgarh, Madhya
                  Pradesh
                </p>
                <p className="font-normal text-sm text-gray-500 md:text-center lg:text-start text-center w-full lg:w-fit mb-3 lg:mb-0">
                  June 2018 - May 2019
                </p>
              </div>

              <div className="flex flex-col gap-1 lg:gap-0">
                <p className="font-semibold text-gray-500 md:text-center lg:text-start text-center">
                  12<sup>th</sup> Class
                </p>
                <p className="font-normal text-sm text-gray-500 lg:w-5/6 w-full md:text-center lg:text-start text-center">
                  From 2018 to 2019, I was enrolled in 12<sup>th</sup> grade and
                  my major subjects were Physics, Chemistry, Biology.
                </p>
              </div>

              <hr className="lg:mt-5 md:mt-5 mt-8 lg:mb-5 md:mb-5 mb-8" />
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <div className="flex lg:flex-row md:flex-col flex-col justify-between gap-5 lg:gap-0">
            <div className="lg:w-1/6 w-full flex justify-center items-center">
              <img src={angel} alt="" className="w-28 object-contain" />
            </div>
            <div className="lg:w-4/5 md:w-full w-full h-full">
              <div className="flex justify-between w-full lg:flex-row flex-col lg:items-center md:items-start gap-3 lg:gap-0">
                <p className="lg:text-xl md:text-xl text-lg font-semibold text-gray-600 md:text-center lg:text-start text-center">
                  Angel Abode Public School, Tikamgarh, Madhya Pradesh
                </p>
                <p className="font-normal text-sm text-gray-500 md:text-center lg:text-start text-center w-full lg:w-fit mb-3 lg:mb-0">
                  April 2016 - June 2017
                </p>
              </div>

              <div className="flex flex-col gap-1 lg:gap-0">
                <p className="font-semibold text-gray-500 md:text-center lg:text-start text-center">
                  10<sup>th</sup> Class
                </p>
                <p className="font-normal text-sm text-gray-500 lg:w-5/6 w-full md:text-center lg:text-start text-center">
                  From 2016 to 2017, I was enrolled in 10<sup>th</sup> grade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
