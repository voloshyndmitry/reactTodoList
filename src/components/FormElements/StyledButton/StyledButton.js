import { useMemo } from "react";
import "./styledButton.css";

export const ButtonTypes = {
  DEFAULT: "default",
  CONFIRM: "confirm",
  DELETE: "delete",
};

export default function StyledButton({
  type = ButtonTypes.DEFAULT,
  children,
  onClick,
}) {
  const className = useMemo(() => `${type}Button styledButton`, [type]);

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
