import React from "react";
import starIcon from "../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    averageRating,
    photo,
    specialty,
    specialization,
    totalRating,
    totalPatients,
    hospital,
    experiences,
  } = doctor;

  const roundedTotalRating = Math.round(totalRating);

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="w-50 rounded-lg" />
      </div>

      <h3
        className="text-[16px] leading-[30px] lg:text-[24px] lg:leading-9
        text-headingColor font-[700] mt-3 lg:mt-5"
      >
        {name}
      </h3>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span
          className="bg-orange-950 text-white py-1 px-2 lg:py-2
            lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7
            font-semibold rounded "
        >
          {"Md, Psychiatry"}
        </span>
        <div className="flex items-center gap-[6px]">
          <span
            className="flex items-center gap-[6px] text-[14px] leading-6
                lg:text-[16px] lg:leading-7 font-semibold text-headingColor"
          >
            <img src={starIcon} alt="" /> {averageRating}
          </span>
          <span
            className="text-[14px] leading-6
                lg:text-[16px] lg:leading-7 font-normal text-textColor"
          >
            ({roundedTotalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          {/* <h3 className='text-base leading-7 lg:text-[18px]
                lg:leading-[30px] font-semibold text-headingColor'>
                    +{totalPatients} patiens
                </h3> */}
        </div>
        <Link
          to={`/doctors/${doctor._id}`}
          className="w-[44px] h-[44px] rounded-full border
                border-solid border-[#181A1E]
                flex items-center justify-center group hover:bg-primaryColor
                hover:border-none"
        >
          <BsArrowRight
            className="group-hover:text-white
                    w-6 h-5"
          />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
