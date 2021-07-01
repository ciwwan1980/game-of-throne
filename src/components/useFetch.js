import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [houseList, setHouseList] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let array = [];
        data.forEach((item) => {
          // console.log(item, "item")
          let id = item.url.split("/").pop();
          // console.log(id, "id");
          array.push({ id, ...item });
        });
        setIsPending(false);
        setHouseList(array);
      });
  }, [url]);

  return { houseList, isPending };
};

export default useFetch;
