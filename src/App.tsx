import { useEffect, useState } from 'react';
import { Header } from './components/header';
import { Map } from './components/map.tsx';
import { Overall } from './components/overall.tsx';
import { P1 } from './components/p1.tsx';
import { P2 } from './components/p2.tsx';
import { P3 } from './components/p3.tsx';
import { P4 } from './components/p4.tsx';

export default function App() {
	const [scale, setScale] = useState(1);
	useEffect(() => {
		// 计算缩放比例
		const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
		setScale(scale);
		// 监听窗口大小变化
		const handleResize = () => {
			const newScale = Math.min(
				window.innerWidth / 1920,
				window.innerHeight / 1080,
			);
			setScale(newScale);
		};
		window.addEventListener('resize', handleResize);
		// 清理事件监听器
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className={'relative w-screen h-screen overflow-hidden'}>
			<div
				className={'main-container origin-top-left'}
				style={{ transform: `scale(${scale})` }}
			>
				<Header />
				<div className={'z-10 absolute inset-6 top-[100px] flex gap-6'}>
					<div className={'flex flex-col gap-6'}>
						<P1 />
						<P2 />
					</div>
					<div className={' grow flex flex-col gap-6'}>
						<Overall />
						<Map />
					</div>
					<div className={'flex flex-col gap-6'}>
						<P3 />
						<P4 />
					</div>
				</div>
			</div>
		</div>
	);
}
