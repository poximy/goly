interface UrlID {
  _id: string;
}

interface UrlHeader {
  "content-type": string;
  Authorization?: string;
}

const apiUrl = env["API_URL"];

export const minifyUrl = async (urlText: string, token: string = "") => {
  const bodyData = { url: urlText };

  const headers: UrlHeader = { "content-type": "application/json" };

  if (token !== "") {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(apiUrl + "/", {
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
  try {
    const res = await fetch(apiUrl + "/" + url_id, {
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
