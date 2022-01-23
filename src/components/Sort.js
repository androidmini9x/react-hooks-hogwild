import React from "react";

function Sort({onSort}) {

	function sortItem(event){
		onSort(event.target.value);
	}

	return (
		<div className="SortWrapper">
			<span>Sort: </span>
			<select onChange={sortItem}>
				<option value="noSort">No Sort</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
		</div>
	);
}

export default Sort;