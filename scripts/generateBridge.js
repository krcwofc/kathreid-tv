import { getBlockAnnouncementState } from "./scheduler.js";

const state = getBlockAnnouncementState();

fs.writeFileSync(
  "./data/state-bridge.json",
  JSON.stringify({
    slot: state.slot,
    blockChange: state.blockChange,
    announcement: state.announcementText,
    timestamp: state.timestamp
  }, null, 2)
);
