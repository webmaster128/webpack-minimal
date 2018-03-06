import './index.css';

import * as libsodium from "libsodium-wrappers";

console.log("[Main thread] waiting for libsodium");

libsodium.ready.then(function(sodium) {
    console.log("[Main thread] libsodium ready");
});
