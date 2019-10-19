import React from "react";
import Amount from "../Amount";
// import { Link } from "react-router-dom";

const OverviewBalanceCard = props => {
	return (
		<a href={"/"}>
			<div>{props.header}</div>
			<div>
				IN
				<Amount />
			</div>
			<div>
				OUT
				<Amount />
			</div>
			{/* empty div is a divider that will be styled */}
			<div></div>
			<div>
				TOTAL
				<Amount />
			</div>
		</a>
	);
};

export default OverviewBalanceCard;
