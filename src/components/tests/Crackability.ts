import fitGradeBounds from "../../utils/fitGradeBounds";
import RepetitionTest from "./Repetition";
import { TestGrader } from "./testInterface";

// stolen from wikipedia
const time: [string, number][] = [
    ["ns", 10E+0],
    ["µs", 10E+3],
    ["ms", 10E+6],
    ["s", 10E+9],
    // copilot made below, no clue if this is true
    ["minutes", 6E+10],
    ["hours", 3.6E+12],
    ["days", 8.64E+13],
    ["weeks", 6.048E+14],
    ["months", 2.628E+16],
    ["years", 3.154E+17],
    ["decades", 3.154E+19],
    ["centuries", 3.154E+21],
    ["millennia", 3.154E+23],
    ["millennium", 3.154E+25],
]

const CrackabilityTest: TestGrader = (keymash: string) => {
    let timeValue = keymash.length ** (8 + RepetitionTest(keymash)[1]);
    let timeUnit = "ns";
    
    let i = 0;
    while (timeValue / 100 > time[i][1] && i < time.length) {
        timeUnit = time[i][0];
        i++;
    }

    timeValue /= time[i][1];

    // space between
    if (i > 4) timeUnit = ` ${timeUnit}`;

    const timeToCrackText = timeValue > 0 ? `${timeValue.toPrecision(3)}${timeUnit}` : "an instant!";
    const crackMsg = `Bruteforced in ${timeToCrackText}`;
    return ["Crackability", fitGradeBounds(i), crackMsg];
}

export default CrackabilityTest;