export default function handleDelete(id, colors, setColors) {
  setColors(colors.filter((color) => color.id !== id));
}
