import api from "./api";

export const fetchStreamsFn = async () => {
  const response = await api("/streams", {
    method: "GET",
  });
  const data = await response.data;
  return data;
};

export const createStreamFn = async (form: any) => {
  const response = await api("/streams", {
    method: "POST",
    data: {
      ...form,
    },
  });
  const data = await response.data;
  return data;
};

export const fetchStreamFn = async (streamId: string) => {
  const response = await api(`/streams/${streamId}`, {
    method: "GET",
  });
  const data = await response.data;
  return data;
};

export const updateStreamVotesFn = async (payload: any) => {
  const { streamId, upVotes, downVotes } = payload;
  const response = await api(`/streams/${streamId}`, {
    method: "PUT",
    data: {
      upVotes,
      downVotes,
    },
  });
  const data = await response.data;
  return data;
};
