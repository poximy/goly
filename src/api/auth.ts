interface Token {
  access_token: string;
}

const token = async (username: string, password: string) => {
  const body = `username=${username}&password=${password}`;
  const apiUrl = window.location.origin + "token";

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application",
        "Content-type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const data: Token = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};

export default token;
