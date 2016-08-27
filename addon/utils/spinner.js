import Spinner from 'spinner';

export default function createSpinner(button) {
  let height = button.offsetHeight;
  let spinnerColor;

  if (height === 0) {
    // We may have an element that is not visible so
    // we attempt to get the height in a different way
    height = parseFloat(window.getComputedStyle(button).height);
  }

  // If the button is tall we can afford some padding
  if (height > 32) {
    height *= 0.8;
  }

  // Prefer an explicit height if one is defined
  if (button.hasAttribute('data-spinner-size')) {
    height = parseInt(button.getAttribute('data-spinner-size'), 10);
  }

  // Allow buttons to specify the color of the spinner element
  if (button.hasAttribute('data-spinner-color')) {
    spinnerColor = button.getAttribute('data-spinner-color');
  }

  let lines = 12;
  let radius = height * 0.2;
  let length = radius * 0.6;
  let width = radius < 7 ? 2 : 3;

  return new Spinner({
    color: spinnerColor || '#fff',
    lines: lines,
    radius: radius,
    length: length,
    width: width,
    zIndex: 'auto',
    top: 'auto',
    left: 'auto',
    className: '',
  });

}
