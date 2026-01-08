export function signal() {
  let resolve = () => {
    throw new Error("signal.trigger() called before initialization")
  }
  const promise = new Promise<void>((r) => (resolve = r))
  return {
    trigger() {
      return resolve()
    },
    wait() {
      return promise
    },
  }
}
