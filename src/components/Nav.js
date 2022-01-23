import React, {useState} from "react";

const Nav = ({hogData}) => {

	const [isToggle, setToggle] = useState(false);
	const [hide, setHide] = useState(false);

	function handleDetails() {
		setToggle(!isToggle);
	}

	const details = <>
		<b>Specialty: </b>{hogData.specialty}, <b>Weight: </b>{hogData.weight}, <b>Greased: </b>{hogData.greased ? "Yes" : "No"}, <b>Highest medal achieved: </b>{hogData["highest medal achieved"]}
	</>;

	const hideStyle = hide ? {display: "none"} : null;

	return (
		<div style={hideStyle} className="card" onClick={() => handleDetails()}>
			<div className="image">
				<img src={hogData.image} alt={hogData.name} />
			</div>
			<div className="content">
				<span className="header">{hogData.name}</span>
				<span className="description">
					{isToggle && details}
				</span>
			</div>
			<button className="ui toggle button" onClick={() => setHide(!hide)}><i class="eye icon"></i> hide</button>
		</div>
	);
};

export default Nav;
