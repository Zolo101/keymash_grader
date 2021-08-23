import { GradeScore } from "../Grade";
import tests from "../tests/tests";

const run = (keymash: string) => {
    return runAllTests(keymash)
}

export const runAllTests = (keymash: string) => {
    return tests.map((test) => test(keymash))
}

export const blankAllTests = (): [string, GradeScore][] => {
    return tests.map((test) => test("")).map((result) => [result[0], 0 as GradeScore])
}

export default run;