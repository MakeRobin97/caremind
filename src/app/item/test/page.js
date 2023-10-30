export default function Test() {
  let box = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h1>테스트</h1>
      {box.map((a, i) => {
        return <div>{box[i]}</div>;
      })}
    </div>
  );
}
