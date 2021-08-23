import { GradeScore } from "../components/Grade"

const fitGradeBounds = (value: number) => {
    return Math.max(Math.min(Math.floor(value), 9), 1) as GradeScore
}

export default fitGradeBounds