import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const socialLinks = [
  { src: "/instagram.svg", alt: "instagarm" },
  { src: "/x-twitter.svg", alt: "twitter" },
];

const links = [
  "Contact Us",
  "Careers",
  "Privacy Policy",
  "Accessibility",
  "FAQ",
];

const data = [
  "Booking",
  "Training Sessions",
  ,
  "Diet Consultation",
  ,
  "Gym Tour",
  ,
  "location",
  ,
];

function Footer() {
  return (
    <div className="relative h-[840px] md:h-[600px] 2xl:h-screen flex flex-col items-center justify-center">
      <div className="hidden h-[20%] w-[90%] md:flex items-center justify-center">
        <motion.p className="text-center font-semibold text-2xl lg:text-[1.75vw] tracking-tight">
          {
            "A gym membership and healthy diet aren't expenses they're investments in your future health."
          }
        </motion.p>
      </div>
      <div className="h-[100%] md:h-[80%] w-[90%] flex flex-col items-center justify-evenly">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-[90%] md:h-[50%] w-full">
          <div className="flex-[1] h-full flex items-center">
            <Link
              className="uppercase text-[8vw] md:text-[5vw] lg:text-[3vw] font-medium tracking-[0.25vw] leading-[100%]"
              href="/"
            >
              Shah.
            </Link>
          </div>
          <div className="flex-[1] h-full flex flex-col justify-center gap-4 2xl:gap-[1.25vw]">
            <p className="font-medium 2xl:text-[1.25vw] text-center md:text-left">
              SHAH. <br /> 1234 Wellness Avenue, <br /> Springfield, <br />
              California 98765
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 2xl:gap-[1.25vw]">
              {socialLinks.map((link) => (
                <div
                  className="relative h-6 w-6 2xl:h-[2vw] 2xl:w-[2vw]"
                  key={link.alt}
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex-[1] h-full flex flex-col text-center md:text-left justify-center gap-3 2xl:gap-[1vw]">
            {links.map((link, i) => (
              <span
                className="font-medium 2xl:text-[1.25vw] cursor-pointer transition-all hover:text-gray-500"
                key={i}
              >
                {link}
              </span>
            ))}
          </div>
          <div className="flex-[1] h-full flex flex-col justify-center text-center md:text-left gap-3 2xl:gap-[1vw]">
            {data.map((link, i) => (
              <span
                className="font-medium 2xl:text-[1.25vw] cursor-pointer transition-all hover:text-gray-500"
                key={i}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="h-[10%] md:h-[20%] w-full flex items-center justify-center">
          <div className="flex-[1] h-full flex items-center">
            <span className="text-sm 2xl:text-[1vw] font-medium">
              © Copyright 2024 SHAH.
            </span>
          </div>
          <div className="flex-[1] h-full flex items-center justify-end">
            <span className="text-sm 2xl:text-[1vw] font-medium">
              Coded by M.S.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
