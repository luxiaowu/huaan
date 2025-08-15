import { Bottom } from "../../components/bottom.tsx";
import { CenterMap } from "../../components/map.tsx";
import { Overall } from "../../components/overall.tsx";
import B1 from "./B1.tsx";
import B2 from "./B2.tsx";
import B3 from "./B3.tsx";
import B4 from "./B4.tsx";

const WorkCommand = () => {
  return (
    <div className={"z-10 absolute inset-6 flex gap-6"}>
      <div className={"flex flex-col gap-6"}>
        <B1 />
        <B2 />
      </div>
      <div className={" grow flex flex-col gap-6"}>
        <Overall />
        <CenterMap />
        <Bottom />
      </div>
      <div className={"flex flex-col gap-6"}>
        <B3 />
        <B4 />
      </div>
    </div>
  );
};

export default WorkCommand;
