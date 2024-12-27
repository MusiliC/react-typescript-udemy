// type CourseGoalTypeProps = {title: string, description: string}

import { type PropsWithChildren, type ReactNode } from "react";

// interface CourseGoalTypeProps {
//   title: string;
// children: ReactNode
// }

type CourseGoalTypeProps = PropsWithChildren<{title: string}>

function CourseGoal({ title,  children }: CourseGoalTypeProps) {
  return (
    <article className="">
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;
