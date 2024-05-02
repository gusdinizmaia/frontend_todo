// import { iTask } from "@/interfaces";
// import { UserContext } from "@/providers/userContext";
// import { useContext } from "react";

// export default function Filter() {
//   const { tasks } = useContext(UserContext);

//   const week = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thurday",
//     "friday",
//     "saturday",
//   ];

//   const mouths = [
//     "january",
//     "february, march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "a",
//     "september",
//     "octuber",
//     "november",
//     "december",
//   ];

//   function filterWeek(tasksSelecteds: iTask[]) {
//     const result: iTask[][] | [] = [];

//     const daysFill: number[] = tasksSelecteds.map((elem) =>
//       new Date(elem.date).getDay()
//     );

//     console.log(daysFill);

//     daysFill.forEach((dayOfWeek) => {
//       const dayForWeek = tasksSelecteds.filter(
//         (day) => day.getDate() === dayOfWeek
//       );

//       console.log(dayForWeek);

//       if (dayForWeek.length !== 0) {
//         result.push(dayForWeek);
//       }
//     });

//     console.log(result);
//     return result;
//   }

//   //   function convertDate(date: string) {
//   //     const day = date.getDay();
//   //     const mouth = date.getMouth();

//   //     const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
//   //         timeZone: 'UTC',
//   //       });
//   //   }

//   //   function filterMouth(tasksSelecteds: iTask[]) {
//   //     const result = filterWeek(tasksSelecteds);

//   //     console.log(result);
//   //   }
// }
