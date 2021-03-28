import {setupServer} from 'msw/node'
import { apiMockHandlers } from "./apiHandlers";

export const testServer = setupServer(...apiMockHandlers)
