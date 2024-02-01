export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          setMinutes(minutes + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setMinutes(minutes - 1);
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        Start
      </button>
      <br />
      <button
        onClick={() => {
          setStart(false);
        }}
      >
        Pause
      </button>
    </>
  );
}
