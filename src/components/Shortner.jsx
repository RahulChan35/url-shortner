import { useState } from "react";
import ShortenedLinks from "./ShortenedLinks";
import { nanoid } from "nanoid";

const Shortner = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("");

  const compressURL = () => {
    if (url) {
      const newData = {
        id: nanoid(),
        url,
        shorterUrl: "https://short-url/redirect",
      };
      setData((previousData) => {
        return [...previousData, newData];
      });
    }
    setUrl("");
  };

  const deleteUrl = (id) => {
    const updatedData = data.filter((data) => data.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <div className="bg-[url('../../src/assets/images/bg-shorten-desktop.svg')] bg-purple-950 w-2/3 h-24 m-auto flex justify-evenly items-center rounded-md">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="p-5 w-3/4 h-10 rounded-md"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="text-white bg-teal-400 rounded-md p-2"
          onClick={compressURL}
        >
          Shorten it
        </button>
      </div>
      <ShortenedLinks data={data} deleteUrl={deleteUrl} />
    </div>
  );
};
export default Shortner;
