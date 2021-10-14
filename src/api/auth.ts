interface Token {
  access_token?: string;
  detail?: string;
}

const url = env["API_URL"];

export const auth = async (username: string, password: string) => {
  const body = `username=${username}&password=${password}`;
  const apiUrl = url + "/token";

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

export const register = async (username: string, password: string) => {
  const apiUrl = url + "/register";
  const body = {
    username,
    password,
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data: boolean = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};
