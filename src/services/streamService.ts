import axios from "axios";

export const fetchStreamsFn = async () => {
  const response = await axios("http://localhost:5000/streams", {
    method: "GET",
  });
  const data = await response.data;
  return data;
};

export const createStreamFn = async (form: any) => {
  const response = await axios("http://localhost:5000/streams", {
    method: "POST",
    data: {
      ...form,
    },
  });
  const data = await response.data;
  return data;
};
