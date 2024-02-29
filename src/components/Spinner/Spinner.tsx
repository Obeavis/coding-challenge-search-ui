const Spinner = () => (
	<div className="fixed left-0 top-0 flex w-screen h-screen items-center justify-center bg-white/30 z-50">
		<div
			className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
			role="status"
		></div>
	</div>
);

export default Spinner;
