import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const handleClick = (url: string) => {
	window.open(url, "_blank", "noopener,noreferrer");
};

const Item = ({ title, description, category, url }: SearchResult) => {
	return (
		<Card
			className="cursor-pointer transition duration-300 hover:scale-105"
			onClick={() => handleClick(url)}
		>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{description}</div>
				<p className="text-xs text-muted-foreground mt-2">{category}</p>
			</CardContent>
		</Card>
	);
};

export default Item;
