import { useSuspenseQuery } from "@tanstack/react-query";
import { getData } from "src/services/apiService";

import Header from "src/components/Header";

const Home = () => {
	const { data } = useSuspenseQuery({
		queryKey: ["items"],
		queryFn: () => getData(""),
	});

	console.log("data: ", data);
	return (
		<>
			<Header />
			{/* <div className="container my-10">
					<ItemsWrapper items={items} />
				</div> */}
		</>
	);
};

export default Home;
