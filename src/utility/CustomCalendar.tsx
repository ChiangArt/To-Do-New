import { format } from "date-fns";
import { es } from "date-fns/locale";
import Button from "../shared/components/ui/button/Button";

interface CustomCalendarProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  showCalendar: boolean;
  setShowCalendar: (show: boolean) => void;
  navigateMonth: (dir: number) => void;
}

export default function CustomCalendar({
  selectedDate,
  setSelectedDate,
  showCalendar,
  setShowCalendar,
  navigateMonth,
}: CustomCalendarProps) {
  if (!showCalendar) return null;

  const today = new Date();
  const currentMonth = selectedDate
    ? selectedDate.getMonth()
    : today.getMonth();
  const currentYear = selectedDate
    ? selectedDate.getFullYear()
    : today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days: { day: number; date: Date }[] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, date: new Date(currentYear, currentMonth, i) });
  }

  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleClearDate = () => {
    setSelectedDate(null);
    setShowCalendar(false);
  };

  const handleSelectToday = () => {
    setSelectedDate(today);
    setShowCalendar(false);
  };

  return (
    <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64">
      <div className="flex justify-between mb-2">
        <Button variant="primary" onClick={() => navigateMonth(-1)}>
          {"<"}
        </Button>
        <span className="font-semibold">
          {format(new Date(currentYear, currentMonth, 1), "MMMM yyyy", {
            locale: es,
          })}
        </span>
        <Button variant="primary" onClick={() => navigateMonth(1)}>
          {">"}
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"].map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-gray-500"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => {
          const isSelected =
            selectedDate &&
            format(d.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
          const isToday =
            format(d.date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");

          return (
            <Button
              key={d.day}
              variant="calendar"
              active={!!isSelected}
              isToday={isToday}
              onClick={() => handleSelectDate(d.date)}
            >
              {d.day}
            </Button>
          );
        })}
      </div>

      <div className="mt-3 flex justify-between text-xs">
        <Button variant="secondary" onClick={handleSelectToday}>
          Hoy
        </Button>
        <Button variant="terciary" onClick={handleClearDate}>
          Limpiar
        </Button>
      </div>
    </div>
  );
}
