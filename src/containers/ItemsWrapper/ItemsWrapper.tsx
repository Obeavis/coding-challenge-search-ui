import Item from "../../components/Item";

interface ItemsWrapperProps {
	items: SearchResult[];
}

const ItemsWrapper = ({ items }: ItemsWrapperProps) => {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{items && items.map((item) => <Item key={item.id} {...item} />)}
		</div>
	);
};

export default ItemsWrapper;
