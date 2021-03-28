import { apiMockHandlers } from "./apiHandlers";
import { setupWorker } from "msw";

export const testWorker = setupWorker(...apiMockHandlers)
