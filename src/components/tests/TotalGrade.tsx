import { Component } from "solid-js";
import Grade, { GradeScore } from "../Grade";
import { TestGrader } from "./testInterface";
import "./TotalGrade.css";

const meanGrade = (results: ReturnType<TestGrader>[]) => Math.round(results.map((result) => result[1]).reduce((a, b) => (a + b) as GradeScore) / results.length) as GradeScore;

const TotalGrade: Component<{ results: ReturnType<TestGrader>[] }> = (props) => {
    return <div class="total-grade">
        <span>Total Grade: </span><Grade grade={meanGrade(props.results)} />
    </div>
};
  
export default TotalGrade;