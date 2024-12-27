// type CourseGoalTypeProps = {title: string, description: string}

interface CourseGoalTypeProps {
  title: string;
  description: string;
}

function CourseGoal({ title, description }: CourseGoalTypeProps) {
  return (
    <article className="">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;
