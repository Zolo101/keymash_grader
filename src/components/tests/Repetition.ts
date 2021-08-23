import fitGradeBounds from "../../utils/fitGradeBounds";
import { TestGrader } from "./testInterface";

const RepetitionTest: TestGrader = (keymash: string) => {
    const charMap: Map<string, number> = new Map();
    for (const char of keymash) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char) + 1)
        } else {
            charMap.set(char, 1)
        }
    }

    const penalty = keymash.length < 6 ? 5 : 10;

    // automatic F--- if keymash is empty
    const grade = charMap.size > 0 ? fitGradeBounds(penalty - Math.max(...Array.from(charMap.values()))) : 1;
    return ["Repetition", grade];
}

export default RepetitionTest;