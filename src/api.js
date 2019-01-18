// TODO remove stub stuff
import * as stubs from './stub';

const api = new URLSearchParams(window.location.search).get('api') || '';
const stubMode = api === 'stub';

async function request(type, params) {
  if (stubMode) {
    await new Promise(r => setTimeout(r, Math.random() * 2000));
    return JSON.parse(stubs[type]).payload;
  }
  const options = !params ? {} : {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };
  const response = await (await fetch(`${api}/${type}`, options)).json();
  if (response.status !== 'OK') {
    throw new Error(JSON.stringify(response));
  }
  return response.payload;
}


export async function status() {
  return request('status');
}

export async function connect({ ssid, psk }) {
  return request('connect', { ssid, psk });
}

export async function scan() {
  const response = await request('scan');
  return Object.values(response)
    .map(n => ({ ...n, strength: 100 + parseInt(n.signal_level, 10) }))
    .sort((a, b) => b.strength - a.strength);
}
