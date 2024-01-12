import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Pagination = () => {
  const [productList, setProductList] = useState([]);
  const [page, setPage] = useState(1);

//   for backend Driven Approach
 const [totalPage  , setTotalPage] = useState(0) 

  useEffect(() => {
    const FakeApi = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${page * 10 -10}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data.products);
        setProductList(data.products);
        setTotalPage(data.total / 10)
      } catch (err) {
        console.log(err);
      }
    };
    FakeApi();
  }, [page]);

  const selectePageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPage &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <>
    
    <h1 style={{textAlign: "center" , background:"grey"}}>Products Pagination</h1>

      {productList.length > 0 && (
        <div className="list">

            {/* for Frontend based Approach */}

          {/* {productList.slice(page * 10 - 10, page * 10).map((item) => {
            return (
              <>
                <ProductCard key={item.id} {...item} />
              </>
            );
          })} */}

          {/* for Backend  Approach  */}

          {productList.map((item) => {
            return (
              <>
                <ProductCard key={item.id} {...item} />
              </>
            );
          })}

        </div>
      )}

      {productList.length > 0 && (
        <div className="pagination">
          <button className={page > 1 ? "" : "btnDisplay"} onClick={() => selectePageHandle(page - 1)}>⬅️</button>

          {[...Array(totalPage)].map((_, index) => {  // totalPage - productList.length / 10 (front-end Approch)
            return (
              <span
                className={page === index + 1 ? "pageCss" : ""}
                onClick={() => selectePageHandle(index + 1)}
                key={index}
              >
                {index + 1}
              </span>
            );
          })}
  
          <button className={page < totalPage ? ""  : "btnDisplay"} onClick={() => selectePageHandle(page + 1)}>➡️</button>
        </div>
      )}
    </>
  );
};

export default Pagination;
