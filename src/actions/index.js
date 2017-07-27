export const FETCH_CLASSSUBJECTSLIST = "fetch_classSubjectsList";

export function fetchClassSubjectsList() {
  return {
    type: FETCH_CLASSSUBJECTSLIST,
    payload: [
      { classTitle: "6th", subjects: ["English", "Maths", "History", "Geography", ] },
      { classTitle: "7th", subjects: ["English", "Maths", "History", "Geography"] },
      { classTitle: "8th", subjects: ["English", "Maths", "History", "Geography"] },
      { classTitle: "9th", subjects: ["English", "History", "Geography"] },
      { classTitle: "10th", subjects: ["History", "Geography"] }
    ]
  };
}