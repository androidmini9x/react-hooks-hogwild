import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Sort from "./Sort";
import AddItemForm from "./AddItemForm";

import hogs from "../porkers_data";

function App() {

	const [hogsItems, setHogsItems] = useState(hogs);
	const [filter, setFilter] = useState("All");

	const hogsList = hogsItems.filter((hog) => {
		if (filter === "All") {
			return true;
		} else {
			return hog.greased;
		}
	})
	.map((hog, i) => {
		return <Nav key={i} hogData={hog}/>
	});

	function handleFilter(value) {
		setFilter(value);
	}

	function handleSort(value) {
		if (value === "name") {
			let newItems = hogsItems.sort((a, b) => {
				if (a.name < b.name) {
					return -1;
				} else {
					return 1;
				}
			}).map((a) => a);
			setHogsItems(newItems);
		} else if(value === "weight") {
			let newItems = hogsItems.sort((a, b) => a.weight - b.weight).map((a) => a);
			setHogsItems(newItems);
		}
	}

	function addNewItem(item) {
		setHogsItems([...hogsItems, item]);
	}

	return (
		<div className="App">
			<Filter onChangeFilter={handleFilter}/>
			<Sort onSort={handleSort}/>
			<AddItemForm addItem={addNewItem}/>
			<div className="ui cards">{hogsList}</div>
		</div>
	);
}

export default App;
