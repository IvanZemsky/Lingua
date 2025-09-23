import type { paths, components } from "./schema/generated"

export { enableMocking } from "./mocks/init"
export { API } from "./instance"

export type APIPaths = paths
export type APISchemas = components["schemas"]
