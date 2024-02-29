import SearchBar from "../SearchBar";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
			<div className="container flex py-3 space-x-2">
                <div className="flex flex-col w-40 items-center justify-center bg-primary text-black font-bold rounded-lg">
                    <span>Coding Challenge</span>
                </div>
				<SearchBar className="w-full"/>
			</div>
		</header>
	);
};

export default Header;
