import { Block } from './block.tsx';

type DataItem = {
	country: string;
	content: string;
	date: string;
};

const data: DataItem[] = [
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '华安县2025年1-3月主要经济指标完成.',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
	{
		country: '马坑村',
		content: '2025年5月低保高龄资金发放名单',
		date: '05-27',
	},
];

export function P2() {
	return (
		<Block title={'通知公告'}>
			<div className={'h-0 grow overflow-y-auto flex flex-col gap-3 px-4'}>
				{data.map((item) => {
					return <Item {...item} key={item.content} />;
				})}
			</div>
		</Block>
	);
}

function Item(prop: DataItem) {
	return (
		<div
			className={
				'flex gap-3 items-center border border-[#4BA5CE] border-l-4 border-l-[#4BA5CE] text-white font-semibold text-sm pl-3 h-10'
			}
		>
			<div className={'truncate'}>{prop.country}</div>
			<div className={'grow truncate w-0'}>{prop.content}</div>
			<div className={'w-14'}>{prop.date}</div>
			ps{' '}
		</div>
	);
}
