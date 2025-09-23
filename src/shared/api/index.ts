import type { paths, components } from "./schema/generated"

export { enableMocking } from "./mocks/init"
export { useFetchClient } from "./instance"

export type APIPaths = paths
export type APISchemas = components["schemas"]
