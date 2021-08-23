import { GradeScore } from "../Grade";

export type TestGrader = (keymash: string) => [string, GradeScore, string?];