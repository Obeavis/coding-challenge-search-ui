import Header from "./components/Header";
import ItemsWrapper from "./containers/ItemsWrapper";

const items = [
	{
		id: "91011",
		title: "Learn to Budget",
		url: "https://letmegooglethat.com/?q=Learn%20to%20Budget",
		description: "A playlist to learn budgeting",
		category: "PLAYLISTS",
	},
	{
		id: "151617",
		title: "10 Ways to Save Money",
		url: "https://letmegooglethat.com/?q=10%20Ways%20to%20Save%20Money",
		description: "Tips to spend less and save more",
		category: "BLOG_POSTS",
	},
] as SearchResult[];

function App() {
	return (
		<div className="App bg-background">
			<Header />
			<div className="container my-10">
				<ItemsWrapper items={items} />
			</div>
		</div>
	);
}

export default App;
