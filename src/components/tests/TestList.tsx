import { Component, For } from "solid-js";
import Test from "../Test";
import { TestGrader } from "./testInterface";

const TestList: Component<{ results: ReturnType<TestGrader>[] }> = (props) => {
    return <div class="tests">
        <For each={props.results}>{(result) =>
            <Test name={result[0]} grade={result[1]} info={result[2]} />
        }</For>
    </div>
};
  
export default TestList;