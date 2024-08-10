/* eslint-disable react/prop-types */
const ShortenedLinks = ({ data, deleteUrl }) => {
  return (
    <div className="flex flex-col w-2/3 m-auto font-bold">
      {data &&
        data.map((link) => {
          const { id, url, shorterUrl } = link;
          return (
            <div
              key={id}
              className="flex justify-around items-center bg-white w-full h-16 mt-5 rounded-md"
            >
              <div className="flex justify-between w-3/4">
                <h1>{url}</h1>
                <h1 className="text-teal-400">{shorterUrl}</h1>
              </div>
              <button className="text-white h-1/2 bg-teal-400 rounded-md px-5 py-1">
                copy
              </button>
              <button
                className="text-white h-1/2 bg-red-400 rounded-md px-5 py-1"
                onClick={() => deleteUrl(id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default ShortenedLinks;
