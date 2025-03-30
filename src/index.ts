#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { createServer } from "./server.js";

async function main() {
  const server: McpServer = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // Do not output anything to stdout here to avoid interfering with MCP communication
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
