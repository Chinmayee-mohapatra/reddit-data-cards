import React, { useEffect, useRef } from "react";

const DataCards = ({ data }) => {
  const { title, selftext_html, link_flair_background_color, url, score } =
    data;
  console.log("link flair bg color: ", link_flair_background_color);

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = "Text: " + selftext_html;
    }
  }, [selftext_html]);

  return (
    <div
      className="w-[400px] h-[400px] overflow-y-scroll no-scrollbar flex flex-col justify-start text-justify
                    m-4 py-4 px-3 border-2 border-blue-950 hover:scale-105 hover:cursor-text duration-300 bg-white
                    hover:shadow-[0_4px_10px_1px] hover:shadow-sky-200"
    >
      <div className="font-semibold text-xl mb-2 ">{title}</div>
      <div
        ref={contentRef}
        className="max-w-[100%] inline-block break-words mb-2"
      />
      <div className={`mb-2 font-medium`}>
        URL:{" "}
        <a
          href={url}
          target="blank"
          style={{ "--color": link_flair_background_color }}
          className={`italic max-w-[100%] inline-block break-words font-normal p-2 bg-[color:var(--color)]`}
        >
          {url}
        </a>
      </div>
      <div className="text-lg font-medium">
        Score: <span className="font-normal">{score}</span>
      </div>
    </div>
  );
};

export default DataCards;
