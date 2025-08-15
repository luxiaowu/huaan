const data = [
  {
    name: "仙都镇",
    rate: "21.76%",
    count: 30791,
  },
  {
    name: "沙建镇",
    rate: "17%",
    count: 24049,
  },
  {
    name: "华丰镇",
    rate: "16.77%",
    count: 23723,
  },
  {
    name: "丰山镇",
    rate: "14.9%",
    count: 21085,
  },
  {
    name: "高安镇",
    rate: "7.99%",
    count: 11309,
  },
];
export function Bottom() {
  return (
    <div className={"bottom-container grid grid-cols-5 gap-4 py-2 self-center"}>
      {data.map((item) => (
        <div
          key={item.name}
          className={
            "bottom-data flex text-center grow flex-col justify-between items-center"
          }
        >
          <span
            className={
              "text-white text-sm font-semibold bottom-data-text flex items-center justify-center"
            }
          >
            {item.name}
          </span>
          <span
            className={"text-[#43E6FF] text-[16px] font-semibold leading-none"}
          >
            {item.rate}
          </span>
          <span
            className={
              "text-white text-[22px] leading-none font-semibold block h-10"
            }
          >
            {item.count}
          </span>
        </div>
      ))}
    </div>
  );
}
