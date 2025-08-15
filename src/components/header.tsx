import returnIcon from "../assets/header/return.png";

const Header = ({
  active,
  setActive,
}: {
  active: string;
  setActive: (active: string) => void;
}) => {
  const left = ["总览", "社情民意", "工作指挥"];
  const right = ["县域产业", "平台动态", "电商运营"];

  return (
    <div className={"header-container relative"}>
      <div
        className={
          "absolute left-6 top-9 main-return flex items-center cursor-pointer p-4 gap-1"
        }
      >
        <img src={returnIcon} alt="返回" className="mr-2" />
        <span className="text-base text-[#54D5FF]">返回主页</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-10 pl-10 pt-4">
          {left.map((item) => (
            <div
              className={`text-2xl  pb-2 cursor-pointer ${
                active === item
                  ? "text-[#00FFFF] bg-[url('/img/line.png')] bg-bottom bg-no-repeat bg-contain"
                  : "text-white"
              }`}
              key={item}
              onClick={() => setActive(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="w-[860px] main-font text-center cursor-pointer">
          华安数字乡村大数据平台
        </div>
        <div className="flex gap-10 pl-10 pt-4">
          {right.map((item) => (
            <div
              className={`text-2xl  pb-2  cursor-pointer ${
                active === item
                  ? "text-[#00FFFF]  bg-[url('/img/line.png')] bg-bottom bg-no-repeat bg-contain"
                  : "text-white"
              }`}
              key={item}
              onClick={() => setActive(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
