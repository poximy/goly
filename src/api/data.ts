const data = async (token: string) => {
  const apiUrl = env["API_URL"] + "/user/metadata";

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const urls: Metadata[] = await res.json();
    return urls;
  } catch (error) {
    return null;
  }
};

export default data;
