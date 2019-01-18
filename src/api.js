import * as stubs from './stub';

async function wait() {
  return new Promise(r => setTimeout(r, Math.random() * 2000));
}

export async function status() {
  // r.HandleFunc("/status", statusHandler)
  await wait();
  return JSON.parse(stubs.status).payload;
}

export async function scan() {
  // r.HandleFunc("/scan", scanHandler)
  await wait();
  return JSON.parse(stubs.scan).payload;
}

export async function connect({ ssid, password }) {
  // r.HandleFunc("/connect", connectHandler).Methods("POST")
  console.log({ ssid, password });
  await wait();
  return JSON.parse(stubs.connect).payload;
}
