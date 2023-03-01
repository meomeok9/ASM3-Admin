import { useCallback } from "react";
const useConvertDate = () => {
  const convert = useCallback((inputDate) => {
    const date = new Date(inputDate);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Set",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dat = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return dat + "-" + month + "-" + year;
  }, []);
  return { convert };
};
export default useConvertDate;
