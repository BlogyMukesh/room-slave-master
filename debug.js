// Debug helpers for play flow. Disabled by default.
// Set window.PLAY_DEBUG.enabled = true in the console to enable.
(function () {
  const debug = {
    enabled: false,
    logs: [],
    log(message, data) {
      if (!debug.enabled) return;
      const entry = {
        ts: new Date().toISOString(),
        message,
        data: data || null
      };
      debug.logs.push(entry);
      if (debug.logs.length > 200) {
        debug.logs = debug.logs.slice(-200);
      }
      if (typeof console !== "undefined" && console.log) {
        console.log("[play-debug]", entry);
      }
    }
  };

  window.PLAY_DEBUG = debug;
})();
