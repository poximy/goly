interface UrlID {
  _id: string;
}

const minifyUrl = async (urlText: string) => {
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

export default minifyUrl;
