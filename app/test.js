const Text = () => {
  let arr = ["d", "f", "t", "g"];
  let state = "d";
  return (
    <div className="bg_color">
      {arr.map((item) => {
        return (
        <div className={state === item ? "active" : "bg_color"} onClick={() => {state = item}}>
            <p>{item}</p>
        </div>)
      })}
    </div>
  );
};

// function Text () {}
// const Text = function () {}

{
  /* arr.map(() => {}) */
}
{
  /* {arr.map(function(){})} */
}
