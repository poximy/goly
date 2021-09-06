interface UrlID {
  _id: string;
}

export const minifyUrl = async (urlText: string) => {
  const bodyData = { url: urlText };
  const apiUrl = window.location.origin;

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bodyData),
    });

    const data: UrlID = await res.json();
    return apiUrl + data._id;
  } catch (error) {
    return null;
  }
};

export const deleteUrl = async (token: string, url_id: string) => {
  const apiUrl = window.location.origin + url_id;
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
