import * as libsodium from "libsodium-wrappers";

console.log("[Worker] waiting for libsodium");

libsodium.ready
  .then(function(sodium) {
    console.log("[Worker] libsodium ready");
  })
  .catch(function(error) {
    console.error("[Worker] Initializing libsodium errored:", error);
  });
