import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { cn } from "../../lib/utils";

const SearchBar: React.FC<React.HTMLProps<HTMLDivElement>> = ({
	className,
}) => (
	<div className={cn("flex items-center space-x-2", className)}>
		<Input
			type="text"
			className="px-3 py-2 w-full focus-visible:ring-secondary"
			placeholder="Search..."
		/>
		<Button className="px-8 py-2" variant="secondary">
			Search
		</Button>
	</div>
);

export default SearchBar;
