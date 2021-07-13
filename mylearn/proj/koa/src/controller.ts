const fs = require("fs");
const router = require("koa-router")();

import { user } from "./controllers/user";

function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith("GET ")) {
      var path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith("POST ")) {
      var path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      console.log(`invalid URL: ${url}`);
    }
  }
}

export function controller() {
  addMapping(router, user);
  return router.routes();
}
