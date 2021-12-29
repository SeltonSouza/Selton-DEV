// Light/Darker mode
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
  window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeadings: getStyle(html, "--color-headings"),
  colorText: getStyle(html, "--color-text"),
  colorText1: getStyle(html, "--color-text1"),
  colorPanel2: getStyle(html, "--color-panel2"),
  colorNav: getStyle(html, "--color-nav"),
  colorFontnav: getStyle(html, "--color-fontnav"),
  colorBorder: getStyle(html, "--color-border"),
  colorBorder1: getStyle(html, "--color-border1"),
}

const darkMode = {
  bg: "#000000",
  bgPanel: "#434343",
  colorHeadings: "#3664FF",
  colorText: "#FFFFFF",
  colorText1: "#FFFFFF",
  colorPanel2: "000000",
  colorNav: "#292929",
  colorFontnav: "#faebd7",
  colorBorder: "#90caf9",
  colorBorder1: "#90caf9",
}

const transformKey = key =>
  "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key])
  )
}
checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
// Por favor, não mexa. ainda estou tentando ender como a localStorage funciona.
const isExistLocalStorage = (key) =>
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({ target }) => {
  if (target.checked) {
    changeColors(darkMode)
    createOrEditLocalStorage('modo', 'darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo', 'initialColors')
  }
})

if (!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}