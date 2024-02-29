import { ChangeEvent, useState } from "react";
import Input from "src/components/ui/Input";
import Button from "src/components/ui/Button";

interface HeaderProps {
	onButtonClick: (text: string) => void;
}

const Header = ({ onButtonClick }: HeaderProps) => {
	const [searchText, setSearchText] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onButtonClick(searchText);
	};
	return (
		<header
			className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur"
			data-testid="header"
		>
			<div className="container flex flex-col items-center py-3 gap-4 md:flex-row">
				<div className="flex flex-col w-44 items-center justify-center bg-primary text-black font-bold rounded-lg min-h-10">
					<span>Coding Challenge</span>
				</div>
				<form
					className="flex items-center w-full space-x-2"
					onSubmit={handleSubmit}
				>
					<Input
						data-testid="search-input"
						type="text"
						className="px-3 py-2 w-full focus-visible:ring-secondary"
						placeholder="Search..."
						onChange={(event: ChangeEvent<HTMLInputElement>) =>
							setSearchText(event.target.value)
						}
					/>
					<Button className="px-8 py-2" variant="secondary" type="submit">
						Search
					</Button>
				</form>
			</div>
		</header>
	);
};

export default Header;
