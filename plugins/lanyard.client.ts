import { LanyardMessage, LanyardPresence } from "~/types/lanyard";

const websocketURL = "wss://api.lanyard.rest/socket";
const userID = "132479201470185472";
const subscribe: LanyardMessage = { op: 2, d: { subscribe_to_id: userID } };
const heartbeat: LanyardMessage = { op: 3 };

export default defineNuxtPlugin(() => {
  const lanyard = ref<LanyardPresence | null>(null);
  let interval = 30_000;

  const WS = new WebSocket(websocketURL);
  WS.onmessage = (event) => {
    const L = <LanyardMessage>JSON.parse(event.data);

    if (L.op == 0) {
      lanyard.value = L.d;
    } else if (L.op == 1) {
      interval = L.d.heartbeat_interval;
      WS.send(JSON.stringify(subscribe));
    }
  };

  setInterval(() => { WS.send(JSON.stringify(heartbeat)); }, interval);

  return {
    provide: {
      lanyard
    }
  };
});
