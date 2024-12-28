import { type CourseGoal as CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CourseGoalType[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete = {onDeleteGoal} >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList