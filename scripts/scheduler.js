// scheduler.js

export const schedule = [/* paste your schedule EXACTLY as-is */];

export function getMinutes() {
  const now = new Date();
  const m = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Manila" })
  );
  return m.getHours() * 60 + m.getMinutes();
}

export function inSlot(now, start, end) {
  if (start < end) return now >= start && now < end;
  return now >= start || now < end;
}

export function getActiveSlot() {
  const now = getMinutes();

  for (const block of schedule) {
    for (const slot of block.slots) {
      if (inSlot(now, slot.start, slot.end)) {
        return {
          block: block.block,
          slot
        };
      }
    }
  }

  return {
    block: schedule[0].block,
    slot: schedule[0].slots[0]
  };
}
