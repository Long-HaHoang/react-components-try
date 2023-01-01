import getRandomColor from "./getRandomColor.js";

export default function addNewCard(addColorsState, setAddColorsProp) {
  setAddColorsProp([
    ...addColorsState,
    {
      colorCode: getRandomColor(),
      id: crypto.randomUUID(),
    },
  ]);
}
