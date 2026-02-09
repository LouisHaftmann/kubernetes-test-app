import { eventHandler } from "h3"

// Learn more: https://nitro.build/guide/routing
export default eventHandler((event) => {
  const config = useRuntimeConfig(event)
  return `<p>commit: ${config.commit}</p>
  <p>test: ${config.test}</p>
  <p>test: hellow world</p>
  `;
});
