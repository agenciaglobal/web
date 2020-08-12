import { useMemo } from "react"

export const useRequireNewImage = (image: string): string => {
  return useMemo(
    /* eslint-disable  @typescript-eslint/no-var-requires */
    () => (image === "" ? "" : require("../../../../content/" + image)),

    [image],
  )
}
