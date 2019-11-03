import React from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";

const Daily = () => {
	const { push } = useHistory();
	const { name, id } = useParams(); //beru name id v routeru treba "/:id"
	const { search } = useLocation();

	console.log(search); //parsuj do objektu

	return (
		<>
			<div>Daily</div>
			{/* smaz button az nebudes potrebovat, musi byt takto zabalena anonymni funkci, history ma stejnou funcionalitu jako Link */}
			<button onClick={() => push("/")}>Back</button>
			<p>
				{name}
				{id}
			</p>
		</>
	);
};

export default Daily;
