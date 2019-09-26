export function injectScript(url, attrs) {
  const script = document.createElement('script')
  script.setAttribute('src', url)
  // Type will get overwritten in the forEach loop below if it's passed in attrs
  script.setAttribute('type', 'text/javascript')

  Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v))

  document.body.appendChild(script)
  return script
}
