import { useTimersContext } from "../store/TimersContext";
import Timer from "./Timer";

export default function Timers() {

    const {timers} = useTimersContext();

  return <ul>
{
  timers.map((timer, i) => (
    <li key={i}>
      <Timer {...timer} />
    </li>
  ))
}
  </ul>;
}
