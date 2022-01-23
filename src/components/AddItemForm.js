import React, {useState} from "react";

function AddItemForm({addItem}) {

	const item = {
		name: "",
		specialty: "",
		greased: false,
		weight: 0,
		"highest medal achieved": "",
		image: "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/bailey.jpg"
	};

	const [newItem, setNewItem] = useState(item);

	function handleSubmit(event) {
		event.preventDefault();
		addItem(newItem);
	}

	function handleItem(event) {
		if (event.target.type === "checkbox") {
			setNewItem({...newItem, [event.target.name]: event.target.checked});
		} else {
			setNewItem({...newItem, [event.target.name]: event.target.value});
		}
	}

	return (
		<form className="NewItem" onSubmit={handleSubmit}>
			Name: <input type="text" name="name" onChange={handleItem} required/>
			Specialty: <input type="text" name="specialty" onChange={handleItem} required/>
			Highest medal achieved: <input type="text" name="highest medal achieved" onChange={handleItem} required/>
			Weight: <input type="number" name="weight" onChange={handleItem} required/>
			Greased: <input type="checkbox" name="greased" onChange={handleItem} /><br />
			<button>Add</button>
		</form>
	);
}

export default AddItemForm;