import React from "react";

function Filter({onChangeFilter}) {

	function changeFilter(event) {
		onChangeFilter(event.target.value);
	}

	return (
		<div className="filterWrapper" onChange={changeFilter}>
			<span>Filter: </span>
			<select>
				<option value="All">All</option>
				<option value="Greased">Greased</option>
			</select>
		</div>
	);
}

export default Filter;