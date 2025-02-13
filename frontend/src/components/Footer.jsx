import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* --------- Left section --------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            dolores esse distinctio vel quia impedit assumenda cumque possimus
            sed doloribus perspiciatis iste a officia tempore explicabo
            exercitationem, harum illum. Voluptatibus.
          </p>
        </div>
        {/* --------- center section --------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li
              onClick={() => {
                navigate("/");
                scrollTo(0, 0);
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                scrollTo(0, 0);
              }}
            >
              About us
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                scrollTo(0, 0);
              }}
            >
              Contact us
            </li>
            <li
              onClick={() => {
                navigate("/privacy-policy");
                scrollTo(0, 0);
              }}
            >
              Privacy Policies
            </li>
          </ul>
        </div>
        {/* --------- right section --------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 8658220051</li>
            <li>prescripto.business@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ---------copyright -------- */}
      <hr />
      <p className="py-5 text-sm text-center">
        Copyright 2024@ Prescripto - All Rights Reserve
      </p>
    </div>
  );
};

export default Footer;
