import { useWebSocket } from "@vueuse/core";
import { LanyardData, LanyardHeartbeat, LanyardInitialize, LanyardPresence } from "~/types/lanyard";

const Socket = "wss://api.lanyard.rest/socket";
const ID = "132479201470185472";

export default defineNuxtPlugin(() => {
  const lanyard = ref<LanyardPresence | null>(null);
  const heartbeat = JSON.stringify(<LanyardHeartbeat>{ op: 3 });
  const subscribe = JSON.stringify(<LanyardInitialize>{ op: 2, d: { subscribe_to_id: ID } });
  let interval = 30_000;

  function onMessage(ws: WebSocket, message: MessageEvent) {
    const L = JSON.parse(message.data) as LanyardData;

    switch (L.op) {
      case 0:
        lanyard.value = L.d || ({} as LanyardPresence);
        break;
      case 1:
        interval = L.d.heartbeat_interval;
        ws.send(subscribe);
        break;

      default:
        break;
    }
  }
  //TODO heartbeat is broken
  useWebSocket(Socket, {
    heartbeat: {
      message: heartbeat,
      interval: interval,
      pongTimeout: Number.POSITIVE_INFINITY
    },
    onMessage
  });

  return {
    provide: {
      lanyard
    }
  };
});
