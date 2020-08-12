export const useImageRequire = (data: string | null | undefined): string => {
  let require1 = ""
  if (data !== null) {
    if (data !== undefined) {
      if (data !== "") {
        require1 = require("../../content/" + data)
      }
    }
  }
  return require1
}
