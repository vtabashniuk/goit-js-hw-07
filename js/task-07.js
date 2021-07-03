const controllerRef = document.querySelector('#font-size-control');
const fontSize = document.querySelector('#text');

const onSpanFontSizeChangeHandler = event =>
  (fontSize.style.fontSize = event.target.valueAsNumber + 'px');

controllerRef.addEventListener('input', onSpanFontSizeChangeHandler);
