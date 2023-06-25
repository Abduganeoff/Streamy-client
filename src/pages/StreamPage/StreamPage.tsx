import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const StreamPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // Redirect to login page if userId doesn't exist
      navigate("/403");
    }
  }, []);

  const fetchStreams = (): Promise<any> =>
    api.get("/streams").then((response) => response.data);

  const { data } = useQuery({ queryKey: ["streams"], queryFn: fetchStreams });
  return (
    <div>
      {data?.map((d: string) => (
        <h1 key={d}>{d}</h1>
      ))}
    </div>
  );
};

export default StreamPage;
