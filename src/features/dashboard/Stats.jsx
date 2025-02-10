import { formatCurrency } from "../../utils/helpers";
import Stat from "./stat";
import { HiOutlineBanknotes, HiOutlineBriefcase,  HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"

function Stats({ bookings, confirmedStays, numCount, cabinCount }) {

    const numBookings = bookings.length
    const sales = bookings.reduce((acc, cur ) => acc + cur.totalPrice, 0 )
    const checkins = confirmedStays.length
    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numCount * cabinCount)
  return (
    <>
      <Stat title='bookings' color='blue' icon={<HiOutlineBriefcase />} value={numBookings}/>
      <Stat title='sales' color='green' icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
      <Stat title='check ins' color='indigo' icon={<HiOutlineCalendarDays />} value={checkins} />
      <Stat title='Ocupancy rate' color='yellow' icon={<HiOutlineChartBar />} value={Math.round(occupation  * 100) +'%'} />
    </>
  );
}

export default Stats;
