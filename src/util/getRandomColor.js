export default function getRandomColor() {
  const getRgb = () => Math.floor(Math.random() * 256);

  function hexValue() {
    const hex = getRgb().toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  const colorHex = `#${hexValue()}${hexValue()}${hexValue()}`;

  return colorHex;
}
