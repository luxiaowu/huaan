/**
 * 大屏头部
 */

import returnIcon from '../assets/header/return.png';
import timeIcon from '../assets/header/icon-time.png';

export function Header() {


  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return {
      dateString: `${year}年${month}月${day}日  ${weekday}`,
      timeString: `${hours}:${minutes}:${seconds}`
    };
  };

  const { dateString } = formatDate(new Date());

  return (
    <div className={'header-container'}>
		<div className={' absolute left-6  top-10 flex flex-row gap-8'}>
			<div className={'main-return flex  items-center cursor-pointer p-4 gap-1'} onClick={()=>{
				window.location.href="http://182.44.75.59:9100/report/reports/aj?code=8XfWdlBP"
			}}>
				<img src={returnIcon} alt="返回" className="mr-2" />
				<span className="text-base text-[#54D5FF]">返回主页</span>
			</div>
			<div className="text-white flex flex-row items-center flex flex-row gap-1">
				<img src={timeIcon} alt="" />
				<div className="text-lg font-medium">{dateString}</div>
      		</div>
		</div>
      
      
      <div className={'main-font'}>华安数字乡村大数据平台</div>
     
    </div>
  );
}