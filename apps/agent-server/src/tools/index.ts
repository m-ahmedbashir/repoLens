export interface AgentTool {
  name: string;
  description: string;
}

export { databaseQueryTool } from './database.js';
export { fullTextGrepTool } from './grep.js';

export const tools: AgentTool[] = [];
