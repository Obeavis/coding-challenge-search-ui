interface SearchResult {
	id: string;
	title: string;
	url: string;
	description: string;
	category: "VIDEOS" | "PLAYLISTS" | "BLOG_POSTS";
}
