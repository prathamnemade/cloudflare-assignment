import { _parseJSON } from "../utils/common";

const URL = "https://workers.prathameshnemade.workers.dev/api";

const getPosts = async () => {
  const response = await fetch(`${URL}/posts`, {
    method: "GET",
  });
  return _parseJSON(response);
};

const createPost = async (data) => {
  const response = await fetch(`${URL}/post`, {
    method: "POST",
    body: data,
  });
  return _parseJSON(response);
};

export const postServices = {
  createPost,
  getPosts,
};
