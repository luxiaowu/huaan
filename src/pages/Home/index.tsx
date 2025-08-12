import { P1 } from "../../components/p1";
import { P2 } from "../../components/p2";
import { Overall } from "../../components/overall";
import { CenterMap } from "../../components/map";
import { Bottom } from "../../components/bottom";
import { P3 } from "../../components/p3";
import { P4 } from "../../components/p4";

const Home = () => {
  return (
    <div className={"z-10 absolute inset-6 top-[170px] flex gap-6"}>
      <div className={"flex flex-col gap-6"}>
        <P1 />
        <P2 />
      </div>
      <div className={" grow flex flex-col gap-6"}>
        <Overall />
        <CenterMap />
        <Bottom />
      </div>
      <div className={"flex flex-col gap-6"}>
        <P3 />
        <P4 />
      </div>
    </div>
  );
};

export default Home;
