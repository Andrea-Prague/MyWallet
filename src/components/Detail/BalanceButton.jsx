import React from "react";

// do I need this component or will I use just the switch?
const BalanceButton = props => {
	const handleSwitch = () => {};

	return (
		<div onClick={handleSwitch}>
			<div>{props.balanceType}</div>
		</div>
	);
};

export default BalanceButton;
