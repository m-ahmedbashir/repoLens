import { createAgentServer } from './agent/index.js';
async function main() {
    const server = createAgentServer();
    await server.start();
}
main().catch((error) => {
    console.error(error);
});
//# sourceMappingURL=index.js.map