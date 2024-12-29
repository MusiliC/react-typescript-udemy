/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimers: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("Timers Context used outside provider");
  }

  return timersCtx;
}

type TimersContextProvidersProps = {
  children: ReactNode;
};

function TimersContextProvider({ children }: TimersContextProvidersProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimers(timerData) {},
    startTimers() {},
    stopTimers() {},
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}

export default TimersContextProvider;
