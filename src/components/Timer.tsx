import { useEffect, useRef, useState } from "react";
import {
  Timer as TimeProps,
  useTimersContext,
} from "../store/TimersContext.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimeProps) {
  const { isRunning } = useTimersContext();

  const intervalTimer = useRef<number | null>(null);

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0 && intervalTimer.current) {
    clearInterval(intervalTimer.current);
  }

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(function () {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);

      intervalTimer.current = timer;
    } else if (intervalTimer.current) {
      clearInterval(intervalTimer.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>TODO: TIMER NAME</h2>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
