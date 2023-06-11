import { useCallback, useState } from "react";
import StyledButton, {
  ButtonTypes,
} from "../FormElements/StyledButton/StyledButton";
import "./body.css";
import ListItem from "./ListItem/ListItem";

const defaultInputValue = "";

export default function Body() {
  const [noteList, setNoteList] = useState([]);
  const [inputValue, setInputValue] = useState(defaultInputValue);

  const onInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const onDelete = useCallback(
    (name) => {
      const newNoteList = noteList.filter((itemName) => itemName !== name);
      setNoteList(newNoteList);
    },
    [noteList]
  );

  const addNote = useCallback(() => {
    setNoteList([...noteList, inputValue]);
    setInputValue(defaultInputValue);
  }, [noteList, inputValue]);

  return (
    <div className="bodyContainer">
      <div className="formContainer">
        <input onChange={onInputChange} value={inputValue} />
        <StyledButton onClick={addNote} type={ButtonTypes.CONFIRM}>
          Add
        </StyledButton>
      </div>
      <div className="listContainer">
        {noteList.map((note, index) => (
          <ListItem onDelete={onDelete} key={index} itemName={note} />
        ))}
      </div>
    </div>
  );
}
