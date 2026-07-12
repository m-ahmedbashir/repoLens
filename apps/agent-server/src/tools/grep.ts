export interface FullTextGrepTool {
  name: 'full-text-grep';
  description: string;
}

export const fullTextGrepTool: FullTextGrepTool = {
  name: 'full-text-grep',
  description: 'Search indexed repository text with full-text matching.'
};
