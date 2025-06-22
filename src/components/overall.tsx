import B1 from '../assets/block/b1.png';
import B2 from '../assets/block/b2.png';
import B3 from '../assets/block/b3.png';
import B4 from '../assets/block/b4.png';
import B5 from '../assets/block/b5.png';
import B6 from '../assets/block/b6.png';

const blocks = [
	{
		icon: B1,
		label: '乡镇/街道',
		unit: '个',
		value: 9,
	},
	{
		icon: B2,
		label: '行政村/社区',
		unit: '个',
		value: 103,
	},
	{
		icon: B3,
		label: '劳动力',
		unit: '万人',
		value: 10.3,
	},
	{
		icon: B4,
		label: '注册党员',
		unit: '人',
		value: 4740,
	},
	{
		icon: B5,
		label: '耕地面积',
		unit: '公顷',
		value: 4436,
	},
	{
		icon: B6,
		label: '园地面积',
		unit: '公顷',
		value: 16031,
	},
];

type GenderContainerProps = {
	label: string;
	value: number;
	unit: string;
};
/**
 * 性别人数组件
 */
export function GenderContainer(props: GenderContainerProps) {
	const { label, value, unit } = props;
	return (
		<div
			className={
				'relative gender-container flex flex-col items-center justify-center'
			}
		>
			<span
				className={'absolute main-font text-base -top-6 mt-0 h-4 leading-none'}
			>
				{label}
			</span>
			<span
				className={'relative font-bold text-2xl leading-none text-[#2DE8F0]'}
			>
				{value}
				<span
					className={
						'absolute -right-9 tracking-normal -bottom-0.5 text-base text-white'
					}
				>
					{unit}
				</span>
			</span>
		</div>
	);
}

/**
 * 中间上方统计信息
 */
export function Overall() {
	return (
		<div className={'border border-[#1887FA] bg-[#002E99] pt-2'}>
			<div className={'main-font text-center text-xl mt-0 '}>
				华安县户籍人口
			</div>
			<div className={'flex justify-between items-end px-2'}>
				<GenderContainer label={'男性人数'} value={8.2668} unit={'万人'} />
				<div
					className={'population-container flex justify-center items-center'}
				>
					<span
						className={
							'relative font-bold text-4xl leading-none text-[#2DE8F0] tracking-widest'
						}
					>
						16.33
						<span
							className={
								'absolute -right-9 tracking-normal bottom-1 text-base leading-none text-white'
							}
						>
							万人
						</span>
					</span>
				</div>
				<GenderContainer label={'女性人数'} value={7.4371} unit={'万人'} />
			</div>
			<div className={'grid grid-cols-6'}>
				{blocks.map((block) => (
					<div
						key={block.label}
						className={
							'rect-container flex flex-col justify-between items-center pt-8 pb-6'
						}
					>
						<img src={block.icon} alt={block.label} className="w-8 h-8" />
						<div>
							<span
								className={'text-[#2DE8F0] text-[20px] italic leading-none'}
							>
								{block.value}
							</span>
							<span className={'text-sm italic text-white'}>{block.unit}</span>
						</div>
						<div className="text-sm text-white">{block.label}</div>
					</div>
				))}
			</div>
		</div>
	);
}
