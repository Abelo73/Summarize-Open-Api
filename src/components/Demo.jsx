import { useEffect, useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      console.log(newArticle);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col  w-full justify-between items-center gap-2">
        <form
          className="relative w-full flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img src={linkIcon} className="absolute left-0 ml-5 w-5 my-5" />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer peer-focus:border-gray-700 peer-focus:text-gray-700"
          />
          <button type="submit" className="submit_btn">
            []
          </button>
        </form>

        <div className="flex w-full flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn">
                <img
                  src={copy}
                  alt="copy"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-small">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex my-10 max-w-full justify-center items-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
        ) : error ? (
          <p>
            Well, That was not supposed to happed...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              {/* <h2 className="font-satoshi text-blue-700 font-medium">
               Article <span className="blue_gradient">Summary</span>
              <h2/> */}

              <h2 className="font-satoshi text-blue-700 font-medium">
                Article <span className="blue_gradient">Summary</span>{" "}
              </h2>

              <div className="summary_box">
                <p className="font-inter font-small text-sm text-gray-600">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;

// import { useState, useEffect } from "react";
// import { copy, linkIcon, loader, tick } from "../assets";

// // import { useLazyGetSummaryQuery } from "../services/article";
// import { useLazyGetSummaryQuery } from "../services/article";

// const Demo = () => {
//   const [article, setArticle] = useState({
//     url: "",
//     summary: "",
//   });

//   // const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
//   const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = await getSummary({ articleUrl: article.url });
//     if (data?.summary) {
//       const newArticle = { ...article, summary: data.summary };
//       setArticle(newArticle);
//       console.log(newArticle);
//     }
//   };
//   return (
//     <section className="mt-16 w-full max-w-xl">
//       <div className="flex w-full justify-between items-center gap-2">
//         <form
//           className="relative flex justify-center items-center"
//           onSubmit={handleSubmit}
//         >
//           <img src={linkIcon} className="absolute left-0 ml-5 w-5 my-5" />
//           <input
//             type="url"
//             placeholder="Enter a URL"
//             value={article.url}
//             onChange={(e) => setArticle({ ...article, url: e.target.value })}
//             required
//             className="url_input peer peer-focus:border-gray-700 peer-focus:text-gray-700"
//           />
//           <button type="submit" className="submit_btn">
//             []
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Demo;
