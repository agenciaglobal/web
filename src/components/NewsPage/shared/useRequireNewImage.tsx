import { useMemo } from "react"

export const useRequireNewImage = (image: string): string =>
  useMemo(
    /* eslint-disable  @typescript-eslint/no-var-requires */
    () => require("../../../../content/" + image),
    [image],
  )
