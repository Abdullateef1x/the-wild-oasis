import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import {  getStaysAfterDate } from "../../services/apiBookings";

export function useRecentStays() {
    const [searchParams] = useSearchParams()

    const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"))
    
    
    const queryDate = subDays(new Date(), numDays).toISOString()

    const {isLoading, data: stays} = useQuery({
        queryFn: () => getStaysAfterDate(queryDate),
        queryKey: ["stays", `last-${numDays}`]
    });

    const confirmedStays = stays?.filter((stay) => stay.status === "checked-in" || stay.status === "checked-out")
    
 
    // console.log("Query Date:", queryDate);
    // console.log("API Response (stays):", stays);
    // console.log("All statuses:", stays?.map(s => s.status));
    // console.log("Filtered stays (checked-in/out):", confirmedStays);
    


    return {isLoading, stays, confirmedStays, numDays}
}