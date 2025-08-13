import { Bottom } from "../../components/bottom.tsx";
import { CenterMap } from "../../components/map.tsx";
import { Overall } from "../../components/overall.tsx";
import P1 from "./P1.tsx";

const PlatformDynamic = () => {
  return (
    <div className={"z-10 absolute inset-6 top-[170px] flex gap-6"}>
      <div className={"flex flex-col gap-6"}>
        <P1 />
      </div>
      <div className={" grow flex flex-col gap-6"}>
        <Overall />
        <CenterMap />
        <Bottom />
      </div>
      <div className={"flex flex-col gap-6"}></div>
    </div>
  );
};

export default PlatformDynamic;