import createFetchClient from "openapi-fetch";
import { CONFIG } from "../model";

// types <>
export const API = createFetchClient({
  baseUrl: CONFIG.API_BASE_URL
})
