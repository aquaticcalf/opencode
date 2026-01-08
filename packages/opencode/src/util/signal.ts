export function signal() {
  let resolve: () => void = () => {
    throw new Error("signal not initialized")
  }
  const promise = new Promise<void>((r) => {
    resolve = () => r()
  })
  return {
    trigger() {
      return resolve()
    },
    wait() {
      return promise
    },
  }
}
