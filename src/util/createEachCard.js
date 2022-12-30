import StyledCard from "../components/StyledCard";

export default function createEachCard(initialColors) {
  return initialColors.map((color) => {
    return <StyledCard key={color.id} hexCode={color.colorCode} />;
  });
}
