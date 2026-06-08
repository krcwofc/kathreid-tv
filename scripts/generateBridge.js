let lastSlotKey = null;

export function getBlockAnnouncementState() {
  const { block, slot } = getActiveSlot();

  const slotKey = `${slot.start}-${slot.end}`;
  const isNewBlock = slotKey !== lastSlotKey;

  if (isNewBlock) {
    lastSlotKey = slotKey;
  }

  return {
    block,
    slot,
    blockChange: isNewBlock,
    announcementText: `${block} • ${slot.label}`,
    timestamp: Date.now()
  };
}
