interface Token {
  access_token?: string;
  detail?: string;
}

export const token = async (username: string, password: string) => {
  const body = `username=${username}&password=${password}`;
  const apiUrl = process["env"].API_URL + "/token";

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
  const apiUrl = process["env"].API_URL + "/register";
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
