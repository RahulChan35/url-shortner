import illustrationWorking from "../../src/assets/images/illustration-working.svg";

const GetStarted = () => {
  return (
    <div className="font-bold flex w-full justify-center items-center h-96 mt-8">
      <div className="flex flex-col justify-between w-1/3 h-60">
        <div>
          <h1 className="text-6xl">More than just shorter links</h1>
          <h4 className="text-gray-400 w-96">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing
          </h4>
        </div>
        <button className="bg-teal-400 p-2 rounded-full w-28 text-white">
          Get Started
        </button>
      </div>
      <div className="w-1/3 ml-10">
        <img src={illustrationWorking} alt="working illustration" />
      </div>
    </div>
  );
};
export default GetStarted;
