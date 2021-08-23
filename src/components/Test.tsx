import { Component, Show } from "solid-js";
import Grade, { GradeScore } from "./Grade";
import "./Test.css";

type TestProps = {
    name: string,
    grade: GradeScore,
    info?: string
}

const Test: Component<TestProps> = (props) => {
    return <p class="test">
        {props.name}: 
        <Grade grade={props.grade} />
        <Show when={props.info}>
            <span class="test-info">{props.info}</span>
        </Show>
    </p>
};

export default Test;
