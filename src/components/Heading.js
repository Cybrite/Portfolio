export function Heading() {
  return (
    <>
      <div className="flex justify-center mt-3 text-4xl font-semibold animate-[fadeIn_1s_linear]">
        <l-trefoil
          size="40"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.4"
          color="black"
        ></l-trefoil>
        <p className="m-3">Welcome</p>
        <l-trefoil
          size="40"
          stroke="4"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="1.4"
          color="black"
        ></l-trefoil>
        <br></br>
      </div>
      <div className="text-center animate-fadeIn">
        <i className="text-l">To the stars, Through Hardships!</i>
      </div>
    </>
  );
}
