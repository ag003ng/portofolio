const basePath = '/portofolio'

export function withBasePath(path: string) {
  if (process.env.NODE_ENV === 'production') {
    return `${basePath}${path}`
  }
  return path
}
