interface UrlID {
  _id: string;
}

interface UrlHeader {
  "content-type": string;
  Authorization?: string;
}

export const minifyUrl = async (urlText: string, token: string = "") => {
  const bodyData = { url: urlText };
  const apiUrl = process["env"].API_URL + "/";

  const headers: UrlHeader = { "content-type": "application/json" };

  if (token !== "") {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { ...headers },
      body: JSON.stringify(bodyData),
    });

    const data: UrlID = await res.json();
    return apiUrl + data._id;
  } catch (error) {
    return null;
  }
};

export const deleteUrl = async (token: string, url_id: string) => {
  const apiUrl = process["env"].API_URL + "/" + url_id;
  try {
    const res = await fetch(apiUrl, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};
