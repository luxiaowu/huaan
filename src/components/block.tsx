import type { ReactNode } from 'react';

type BlockProps = {
	title: ReactNode;
	children: ReactNode;
	className?: string;
};
/**
 * 内容容器
 */
export function Block(prop: BlockProps) {
	const { title, children } = prop;
	return (
		<div className={`block-container ${prop.className || ''}`}>
			<div
				className={
					'h-9 pl-3  flex items-center bg-gradient-to-r to-[#002C93] from-[#0073D6]'
				}
			>
				<div className={'sub-font text-[#42DEFF]'}>{title}</div>
			</div>
			<div className={'h-0 grow flex flex-col'}>{children}</div>
		</div>
	);
}
