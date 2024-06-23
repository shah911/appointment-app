import { createClient, OAuthStrategy } from "@wix/sdk";
import { availabilityCalendar } from "@wix/bookings";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import moment from "moment";

type Props = {
  serviceId: string | string[] | undefined;
};

const myWixClient = createClient({
  modules: { availabilityCalendar },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: JSON.parse(Cookies.get("session") || "{}"),
  }),
});

async function queryAvailability(query: any, options: any) {
  const response = await myWixClient.availabilityCalendar.queryAvailability(
    query,
    options
  );
  return response;
}

function TimeSlots({ serviceId }: Props) {
  const router = useRouter();

  const fetchServiceTimeSlot = async () => {
    const today = new Date();
    const oneWeek = new Date(today);
    oneWeek.setDate(oneWeek.getDate() + 7);

    const query = {
      filter: {
        serviceId: serviceId || router.query.q,
        startDate: today.toISOString(),
        endDate: oneWeek.toISOString(),
      },
    };

    const options = {
      timezone: "UTC",
    };

    return await queryAvailability(query, options);
  };

  const { data, isLoading, error } = useQuery(
    "serviceTimeSlot",
    fetchServiceTimeSlot,
    { staleTime: 60000 }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  console.log(data);

  return (
    <div>
      {data?.availabilityEntries?.map((entry, i) => (
        <div
          key={i}
          className="flex items-center justify-center cursor-pointer mx-auto my-3 2xl:my-[0.75vw] text-xs md:text-sm  w-[90%] md:w-[65%] lg:w-[50%] 2xl:text-[1vw] 2xl:py-[1.5vw] 2xl:px-[1.5vw] font-medium bg-transparent px-6 py-3 border border-black uppercase transition-colors duration-300 hover:bg-black hover:text-white"
        >
          {moment(entry.slot?.startDate).format("ddd, MMMM Do YYYY, h:mm a")} -{" "}
          {moment(entry.slot?.endDate).format("ddd, MMMM Do YYYY, h:mm a")}
        </div>
      ))}
    </div>
  );
}

export default TimeSlots;
