import { useEffect } from "react";
const Three = (props) => {
  useEffect(() => {
    console.log("Three");
  });
  return (
    <div>
      <div>Three</div>
      <button onClick={() => props.history.push("/")}>to home</button>
    </div>
  );
};
export default Three;
