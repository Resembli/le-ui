import { commonVariants } from "./commonVariants"
import { css } from "./css"

export const BoxCss = css(commonVariants, {
  display: "flex",
  variants: {
    align: {
      center: { alignItems: "center" },
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      center: { justifyContent: "center" },
      start: { justifyContent: "flex-start" },
      end: { alignItems: "flex-end" },
      baseline: { alignItems: "baseline" },
    },
    reverse: {
      true: { flexDirection: "row-reverse" },
    },
    column: {
      true: { flexDirection: "column" },
      reverse: { flexDirection: "column-reverse" },
    },
  },
})

const shellAreas = `
"nav nav nav"
"sidebar app control"
`

export const GridCss = css(commonVariants, {
  variants: {
    layout: {
      shell: {
        gridTemplateAreas: shellAreas,
      },
    },
  },
})