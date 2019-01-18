import * as stubs from './stub';

async function wait() {
  return new Promise(r => setTimeout(r, Math.random() * 2000));
}

export async function getStatus() {
  // r.HandleFunc("/status", statusHandler)
  await wait();
  return stubs.status;
}

export async function scan() {
  // r.HandleFunc("/scan", scanHandler)
  await wait();
  return stubs.scan;
}

export async function connect({ ssid, password }) {
  // r.HandleFunc("/connect", connectHandler).Methods("POST")
  console.log({ ssid, password });
  await wait();
  return stubs.connect;
}
