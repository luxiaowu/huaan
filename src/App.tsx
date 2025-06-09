import { Block } from './components/block';
import { Header } from './components/header';
import { P1 } from './components/p1.tsx';
import { P2 } from './components/p2.tsx';
import { P3 } from './components/p3.tsx';
import { P4 } from './components/p4.tsx';

export default function App() {
	return (
		<div className={'main-container'}>
			<Header />
			<div className={'z-10 absolute inset-6 top-[100px] flex gap-6'}>
				<div className={'flex flex-col gap-6'}>
					<P1 />
					<P2 />
				</div>
				<div className={' grow flex flex-col gap-6'}></div>
				<div className={'flex flex-col gap-6'}>
					<P3 />
					<P4 />
				</div>
			</div>
		</div>
	);
}
