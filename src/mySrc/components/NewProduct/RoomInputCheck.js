import { useEffect, useState } from "react";

const RoomInputCheck = (props) => {
  const checked = props.checked;
  const id = props.id;
  const [isCk, setIsCk] = useState(false);
  useEffect(() => {
    setIsCk(checked);
  }, [checked]);
  const inputRoomsChangeHandler = (e) => {
    props.inputRoomsChangeHandler(e);
  };
  const clickHandler = (e) => {
    setIsCk(!isCk);
  };
  return (
    <input
      type="checkbox"
      onChange={inputRoomsChangeHandler}
      onClick={clickHandler}
      value={id}
      checked={isCk}
    />
  );
};
export default RoomInputCheck;
