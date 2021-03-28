import '@testing-library/jest-dom';
import { cache } from "swr";
import { testServer } from "./mocks/server";

beforeAll(() => testServer.listen());
beforeEach(() => cache.clear());
afterEach(() => testServer.resetHandlers());
afterAll(() => testServer.close());
