import { describe, expect, it } from 'vitest';

import { databaseQueryTool, fullTextGrepTool, tools } from './index.js';

describe('tool registry', () => {
  it('exposes the database query tool with a stable name', () => {
    expect(databaseQueryTool.name).toBe('database-query');
    expect(databaseQueryTool.description).toBeTruthy();
  });

  it('exposes the full-text grep tool with a stable name', () => {
    expect(fullTextGrepTool.name).toBe('full-text-grep');
    expect(fullTextGrepTool.description).toBeTruthy();
  });

  it('does not silently duplicate tool names', () => {
    const names = tools.map((tool) => tool.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
