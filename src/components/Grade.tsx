import type { Component } from "solid-js";
import "./Grade.css";

export type GradeScore = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const Grades: Map<GradeScore, string> = new Map([
    [9, "A"],
    [8, "B"],
    [7, "C"],
    [6, "D"],
    [5, "E"],
    [4, "F"],
    [3, "F-"],
    [2, "F--"],
    [1, "F---"],
    [0, "N/A"],
]);

const Grade: Component<{grade: GradeScore}> = (props) => {
    return <span class={`grade grade-${props.grade}`}>{Grades.get(props.grade)}</span>
};

export default Grade;
