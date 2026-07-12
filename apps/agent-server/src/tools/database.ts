export interface DatabaseQueryTool {
  name: 'database-query';
  description: string;
}

export const databaseQueryTool: DatabaseQueryTool = {
  name: 'database-query',
  description: 'Run read-only database queries against the repository index.'
};