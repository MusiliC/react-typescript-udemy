import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImage from "./assets/goals.jpg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: "Learn react & typescript",
      description: "New Challenge",
    };

    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A list of Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      {goals.map((goal) => (
        <li key={goal.id} >
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </main>
  );
}
