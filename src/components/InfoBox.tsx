import { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxPropsType = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxPropsType = HintBoxProps | WarningBoxPropsType;

function InfoBox(props: InfoBoxPropsType) {
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
