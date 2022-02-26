export const findPriorityTextBaseOnValue = (priority) => {
  switch (priority) {
    case 1:
      return "Important";

    case 2:
      return "Medium";

    case 3:
      return "Easy";

    default:
      return "-";
  }
};
