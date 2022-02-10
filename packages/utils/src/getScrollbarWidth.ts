// See https://stackoverflow.com/a/13382873 for details on the this function
let memoedWidth: number | null = null
export function getScrollbarWidth() {
  if (memoedWidth) return memoedWidth
  // Creating invisible container
  const outer = document.createElement("div")
  outer.style.visibility = "hidden"
  outer.style.overflow = "scroll" // forcing scrollbar to appear

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  outer.style.msOverflowStyle = "scrollbar" // needed for WinJS apps

  document.body.appendChild(outer)

  console.log("Blah")

  // Creating inner element and placing it in the container
  const inner = document.createElement("div")
  outer.appendChild(inner)

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth

  // Removing temporary elements from the DOM
  outer.parentNode?.removeChild(outer)

  memoedWidth = scrollbarWidth
  return scrollbarWidth
}
