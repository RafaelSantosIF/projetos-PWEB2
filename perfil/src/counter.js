export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  element.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    setCounter(counter - 1)
  })
  element.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'z') {
      setCounter(0)
    }
  })
  element.addEventListener('mouseenter', () => {
    element.addEventListener('keydown', (e) => {
      if (e.key === 'c') {
        setCounter(counter += 100)
      }
    })
  })
  setCounter(counter)
}
