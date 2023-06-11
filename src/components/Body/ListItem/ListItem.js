import "./listItem.css";
import StyledButton, {
  ButtonTypes,
} from "../../FormElements/StyledButton/StyledButton";
import { useCallback } from "react";

export default function ListItem({ itemName, onDelete }) {
  const onClick = useCallback(() => onDelete(itemName), [itemName, onDelete]);
  return (
    <div className="listItem">
      <div className="listItem_name">{itemName}</div>
      <StyledButton onClick={onClick} type={ButtonTypes.DELETE}>
        Delete
      </StyledButton>
    </div>
  );
}
