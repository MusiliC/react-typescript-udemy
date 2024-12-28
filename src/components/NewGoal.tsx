import { useRef, type FormEvent } from "react";

type NewGoalPropTypes = {
  onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ onAddGoal }: NewGoalPropTypes) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);

  };

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
