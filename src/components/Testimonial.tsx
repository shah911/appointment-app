import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    client: "Sarah L",
    desigation: "HR",
    clientPhoto: "/pexels-pixabay-247322.jpg",
    feedback:
      "Joining SHAH was life-changing! With the support of the amazing staff and personalized fitness plan, I lost 30 pounds in six months. The community is incredibly motivating, and the group classes are fun and effective. I've never felt more confident and energetic. SHAH is perfect for anyone serious about weight loss and healthy living.",
  },
  {
    client: "Jason M",
    desigation: "Lawyer",
    clientPhoto: "/pexels-stefanstefancik-91227.jpg",
    feedback:
      "SHAH helped me achieve the aesthetic physique I always wanted. The trainers provided a personalized strength training regimen and nutrition advice, leading to incredible muscle gain and definition. The supportive environment and state-of-the-art facilities kept me motivated. If you're serious about building muscle, SHAH is the place to be.",
  },
];

const translate = {
  initial: { opacity: 0, y: "100%" },
  animate: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: {
      type: "tween",
      ease: [0, 0.55, 0.45, 1],
      delay: 0.1 * i,
      duration: 0.75,
    },
  }),
};

function Testimonial() {
  return (
    <div className="h-[960px] md:h-[600px] 2xl:h-screen flex flex-col items-center justify-evenly bg-[#FAF7F2] overflow-hidden">
      <motion.h1
        variants={translate}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="capitalize font-semibold text-4xl lg:text-[3vw]"
      >
        testimonial
      </motion.h1>
      <div className="h-[80%] w-[90%] flex flex-col md:flex-row items-center justify-center gap-10 2xl:gap-[3vw]">
        {testimonials.map((testimonial, i) => (
          <motion.div
            variants={translate}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="w-full md:w-[45%] flex flex-col border border-black rounded-md 2xl:rounded-[0.375vw]"
            key={i}
            custom={i}
          >
            <p className="w-[90%] mx-auto my-4 2xl:my-[1.5vw] lg:text-[1.15vw] font-medium">
              {testimonial.feedback}
            </p>
            <div className="w-[90%] mx-auto flex items-center gap-4 my-4 2xl:my-[1.5vw] 2xl:gap-[1.5vw]">
              <div className="relative h-16 w-16 2xl:h-[4vw] 2xl:w-[4vw]">
                <Image
                  src={testimonial.clientPhoto}
                  alt={testimonial.client}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <span className="2xl:text-[1.25vw] font-semibold">
                  {testimonial.client}
                </span>
                <span className="text-sm 2xl:text-[1vw] font-normal">
                  {testimonial.desigation}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
