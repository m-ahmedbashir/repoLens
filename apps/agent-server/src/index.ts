import { createAgentServer } from './agent/index.js';

async function main(): Promise<void> {
  const server = createAgentServer();
  await server.start();
}

main().catch((error) => {
  console.error(error);
});
