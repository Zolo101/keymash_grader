import { Component, createMemo, createSignal, onMount } from "solid-js";
import "./Counter.css";
import TestList from "../tests/TestList";
import run, { blankAllTests } from "./run";
import Line from "../Line";
import TotalGrade from "../tests/TotalGrade";

const Counter: Component = () => {
    let running = false;
    let input;
    let counterButton;
    let countdown;

    const [results, setResults] = createSignal(blankAllTests());

    onMount(() => {
        // ez quick start hotkey (S)
        window.onkeydown = keyboardStart;
    })

    function startPreTest() {
        if (running) return;
        running = true;
        let c = 3;
        input.value = "get ready!";
        counterButton.disabled = true;
        countdown.textContent = c;
        countdown.classList.remove("countdown-running");
        countdown.classList.add("countdown-prerun");
        
        const pre_cd = setInterval(() => {
            c -= 0.1;
            countdown.textContent = Math.abs(c).toFixed(1);
            if (c <= 0) {
                clearInterval(pre_cd);
                mainTest()
            }
        }, 100)

    }
    
    function mainTest() {
        let c = 0.7;
        countdown.classList.remove("countdown-prerun");
        countdown.classList.add("countdown-running");
        input.value = "";
        input.disabled = false;
        input.select();
        
        const cd = setInterval(() => {
            c -= 0.01;
            countdown.textContent = Math.abs(c).toFixed(2);
            if (c <= 0) {
                clearInterval(cd);
                input.disabled = true;
                counterButton.disabled = false;
                countdown.classList.remove("countdown-running");
                countdown.textContent = "...";
                running = false
                setResults(run(input.value))
            }
        }, 10)
    }

    function keyboardStart(e: KeyboardEvent) {
        if (e.key === " " && !running) startPreTest();
    }

    return <div class="counter">
        <TotalGrade results={results()}/>
        <div class="counter-main">
            <div class="counter-input-container">
                <input ref={input} className="counter-input" disabled placeholder="type here"></input>
                <button ref={counterButton} onClick={startPreTest} class="counter-button">Start! (Space)</button>
                <p ref={countdown} class="countdown">...</p>
            </div>
            <div class="counter-info-container">
            <p class="counter-info">
                Press Start to get a 3 second count down to prepare. When it hits zero,
                start keymashing! You will have 700 milliseconds and it will be graded based on how good you are.
                <br></br><br></br> 
                You do not need to click on the input box at the start; it will automatically focus once the timer begins.
            </p>
            <Line/>
            <TestList results={results()}/>
            </div>
        </div>
        <Line/>
    </div>
};

export default Counter;
