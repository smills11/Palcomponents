const handleKeyDown = (event, callBack) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    callBack();
  }
};

export const handleKeyDownEnterOnly = (event, callBack) => {
  if (event.key === "Enter") {
    event.preventDefault();
    callBack();
  }
};

export default handleKeyDown;
