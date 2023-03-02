import { useCallback } from "react";
import axios from "axios";

const useFetch = () => {
  const url = "https://asm3-be-theta.vercel.app";

  const sendGetRequest = useCallback(async (endPoint, getData) => {
    try {
      const res = await axios({
        method: "GET",
        url: url + endPoint,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      //console.log(res);
      getData(res.data.results);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const sendPostRequest = useCallback(
    async (endPoint, data, getResponse, getData, getStatus) => {
      const body = data;
      const fullUrl = url + endPoint;
      try {
        const res = await axios({
          method: "POST",
          url: fullUrl,
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          data: body,
        });
        //console.log("response data", res);
        if (getResponse) getResponse(res.data.message);
        if (getData) getData(res.data.results);
        if (getStatus) getStatus(res.status);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );
  const sendDelRequest = useCallback(
    async (endPoint, data, getResponse, getData) => {
      const body = data;
      const fullUrl = url + endPoint;
      //console.log(" req body: ", body);
      try {
        const res = await axios({
          method: "DELETE",
          url: fullUrl,
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          data: body,
        });
        //console.log("response data", res);
        if (getResponse) getResponse(res.data.message);
        if (getData) getData(res.data.results);
      } catch (res) {
        console.error(res.message);
      }
    },
    []
  );
  const sendFile = useCallback(async (endPoint, file, getResponse) => {
    const fullUrl = url + endPoint;

    try {
      const res = await axios({
        method: "POST",
        url: fullUrl,
        withCredentials: true,
        data: file,
      });
      if (getResponse) getResponse(res.data.message);
    } catch (res) {
      console.error(res.message);
    }
  }, []);

  return { sendGetRequest, sendPostRequest, sendFile, sendDelRequest };
};

export default useFetch;
