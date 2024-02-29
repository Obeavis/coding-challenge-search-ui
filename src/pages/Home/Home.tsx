import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "src/services/apiService";

import Header from "src/components/Header";
import ItemsWrapper from "src/containers/ItemsWrapper";
import Spinner from "src/components/Spinner";

const Home = () => {
	const [search, setSearch] = useState("");
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ["items", search],
		queryFn: () => getData(search),
	});

	const items = data?.data as SearchResult[];

	return (
		<>
			<Header onButtonClick={(text) => setSearch(text)} />
			<div className="container my-10">
				{isLoading && <Spinner />}
				<ItemsWrapper items={items} />
				{isSuccess && !items.length && (
					<div className="flex justify-center">
						<p>There are no results matching your query.</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
