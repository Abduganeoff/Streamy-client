import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const StreamPage = () => {
  const fetchStreams = (): Promise<any> =>
    api.get("/streams").then((response) => response.data);

  const { data } = useQuery({ queryKey: ["streams"], queryFn: fetchStreams });
  console.log(data);
  return (
    <div>
      {data?.map((d: string) => (
        <h1 key={d}>{d}</h1>
      ))}
    </div>
  );
};

export default StreamPage;
