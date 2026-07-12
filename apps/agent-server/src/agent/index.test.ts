import { describe, expect, it } from 'vitest';

import { createAgentServer } from './index.js';

describe('createAgentServer', () => {
  it('returns a server whose start() resolves without throwing', async () => {
    const server = createAgentServer();
    await expect(server.start()).resolves.toBeUndefined();
  });
});
