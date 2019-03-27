import qs from "qs";
const TOKEN = process.env.TOKEN;
const baseUrl = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/";

export const fetchJson = async (input, options = {}) => {
  const headers = options.headers || {};
  const response = await fetch(input, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
};

export const sendMessage = data =>
  fetchJson(baseUrl, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      token: TOKEN
    }
  });

export const getMessages = options =>
  fetchJson(`${baseUrl}?${qs.stringify({ ...options, token: TOKEN })}`);
