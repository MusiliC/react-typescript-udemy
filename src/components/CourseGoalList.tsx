import { type CourseGoal as CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CourseGoalType[];
};

const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList