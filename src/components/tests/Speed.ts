import fitGradeBounds from "../../utils/fitGradeBounds";
import { TestGrader } from "./testInterface";

const SpeedTest: TestGrader = (keymash: string) => {
    return ["Speed", fitGradeBounds(keymash.length / 2)];
}

export default SpeedTest;