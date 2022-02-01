import * as reactTextfit from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <reactTextfit.Textfit className="screen" mode="single" max={70}>
      {value}
    </reactTextfit.Textfit>
  );
};

export default Screen;