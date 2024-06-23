import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

function Appointments() {
  const data = [
    {
      name: "Training Session",
      img: "/pexels-abuti-engidashet-2941405-20817818.jpg",
      description:
        "Our training sessions are meticulously designed to cater to a wide range of fitness levels and goals. Whether you're aiming to build muscle, lose weight, improve cardiovascular health, or enhance athletic performance.",
    },
    {
      name: "Diet Consultation",
      img: "/pexels-polina-tankilevitch-3872373.jpg",
      description:
        "Our diet consultation services are designed to provide you with personalized nutrition advice and meal planning tailored to your specific health goals and lifestyle. Whether you're aiming to lose weight, manage a health condition, improve athletic performance, or simply eat healthier, our expert dietitians are here to guide you every step of the way.",
    },
    {
      name: "Gym Tour",
      img: "/pexels-heyho-7031705.jpg",
      description:
        "Our comprehensive gym tour is designed to give you a detailed overview of our state-of-the-art facilities, innovative equipment, and the wide range of services we offer to support your fitness journey. Whether you are a beginner or an experienced athlete, our tour will ensure you are well-acquainted with everything you need to achieve your health and wellness goals.",
    },
  ];
  return (
    <>
      <div className="w-full bg-black relative">
        <Navbar />
      </div>
      <div className="w-[90%] mx-auto">
        {data?.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
      <Testimonial />
    </>
  );
}

export default Appointments;
