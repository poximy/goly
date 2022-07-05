import axios from 'axios';

async function create(apiUrl: string, url: string): Promise<string> {
  const res = await postGoly(apiUrl, url);
  const goly = validateGoly(res.data);
  return window.location + goly.id;
}

async function postGoly(apiUrl: string, url: string) {
  const res = await axios.post(apiUrl, {
    url,
  });

  if (res.status !== 200) {
    throw Error('failed creating request');
  }

  return res;
}

function validateGoly(json: any) {
  if ('id' in json && 'url' in json) {
    if (typeof json.id === 'string' && typeof json.url === 'string') {
      return json as Goly;
    }
    throw Error('Field types are not correct');
  }
  throw Error('Missing body fields');
}

export { create };
