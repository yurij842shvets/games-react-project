import Logos from "./main/Logos";
import TrendingGames from "./main/TrendingGames";
import Text from "./main/Text";
import Development from "./main/Development";

export default function MainPart() {
  return (
    <>
      <main>
        <Logos />;
        <TrendingGames />
        <Text/>
        <Development/>
      </main>
    </>
  );
}
