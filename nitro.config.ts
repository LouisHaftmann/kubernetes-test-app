import { defineNitroConfig } from "nitropack/config"

// https://nitro.build/config
export default defineNitroConfig({
  compatibilityDate: "latest",
  srcDir: "server",
  runtimeConfig: {
    commit: 'dev',
    test: 'dev'
  }
});
