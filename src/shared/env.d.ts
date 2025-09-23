interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_ENABLE_MOCKING: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
