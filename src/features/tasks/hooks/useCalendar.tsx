import { format } from "date-fns";
import { useState } from "react";

export const useCalendar = (initialDate: Date | null = null) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const navigateMonth = (direction: number) => {
    if (!selectedDate) {
      setSelectedDate(
        new Date(today.getFullYear(), today.getMonth() + direction, 1)
      );
      return;
    }
    const newMonth = selectedDate.getMonth() + direction;
    const newYear = selectedDate.getFullYear();
    setSelectedDate(new Date(newYear, newMonth, 1));
  };

  const selectToday = () => setSelectedDate(today);

  const formatDate = (date: Date | null) =>
    date ? format(date, "dd/MM/yyyy") : "";

  return {
    selectedDate,
    showCalendar,
    setShowCalendar,
    toggleCalendar,
    navigateMonth,
    selectToday,
    setSelectedDate,
    formatDate,
  };
};
