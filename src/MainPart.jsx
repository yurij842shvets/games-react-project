import Logos from "./main/Logos";
import TrendingGames from "./main/TrendingGames";
import Text from "./main/Text";
import Development from "./main/Development";
import RecentProjects from "./main/RecentProjects";
import Email from "./main/Email";

export default function MainPart() {
  return (
    <>
      <main>
        <Logos />;
        <TrendingGames />
        <Text/>
        <Development/>
        <RecentProjects/>
        <Email/>
      </main>
    </>
  );
}
