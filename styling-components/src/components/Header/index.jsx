import logo from '../../assets/logo.png';

export default function Header() {
	return (
		<header className='flex flex-col items-center mt-8 mb-8'>
			<img src={logo} alt='A canvas' className='object-contain mb-8 w-44 h-44' />
			<h1 className='text-4xl font-title font-semibold  tracking-wide text-center uppercase text-amber-800'>
				ReactArt
			</h1>
			<p className='text-stone-500'>A community of artists and art-lovers.</p>
		</header>
	);
}
