export interface AgentServer {
  start(): Promise<void>;
}

export function createAgentServer(): AgentServer {
  return {
    async start(): Promise<void> {
      console.log('Agent server scaffold is ready.');
    }
  };
}
