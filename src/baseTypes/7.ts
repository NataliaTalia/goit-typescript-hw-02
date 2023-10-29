/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum daysOfTheWeek {
  Mon = "Monday",
  Tue = "Tuesday",
  Wed = "Wednesday",
  Thu = "Thursday",
  Fri = "Friday",
  Sat = "Sat",
  Sun = "Sun",
}

function isWeekend(day: daysOfTheWeek): boolean {
  return day === daysOfTheWeek.Sat || day === daysOfTheWeek.Sun;
}
