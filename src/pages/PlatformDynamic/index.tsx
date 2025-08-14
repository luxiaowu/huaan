import { Bottom } from "../../components/bottom.tsx";
import { CenterMap } from "../../components/map.tsx";
import { Overall } from "../../components/overall.tsx";
import P4 from "./P4.tsx";
import P1 from "./P1.tsx";
import P2 from "./P2.tsx";
import P3 from "./P3.tsx";

const PlatformDynamic = () => {
  return (
    <div className={"z-10 absolute inset-6 flex gap-6"}>
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

export default PlatformDynamic;
