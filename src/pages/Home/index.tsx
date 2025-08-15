import { Overall } from "../../components/overall";
import { CenterMap } from "../../components/map";
import { Bottom } from "../../components/bottom";
import { P1 } from "./P1";
import { P2 } from "./P2";
import { P3 } from "./P3";
import { P4 } from "./P4";


const Home = () => {
  return (
    <div className={"z-10 absolute inset-6  flex gap-6"}>
      <div className={"flex-1 flex flex-col gap-6"}>
        <P1 />
        <P2 />
      </div>
      <div className={"flex-2 flex flex-col gap-6"}>
        <Overall />
        <CenterMap />
        <Bottom />
      </div>
      <div className={"flex-1 flex flex-col gap-6"}>
        <P3 />
        <P4 />
      </div>
    </div>
  );
};

export default Home;
