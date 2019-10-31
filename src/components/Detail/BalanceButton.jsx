import React from "react";

// do I need this component or will I use just the switch?
const BalanceButton = ({ balanceType }) => {
	const handleSwitch = () => {};

	return (
		<div onClick={handleSwitch}>
			<div>{balanceType}</div>
		</div>
	);
};

export default BalanceButton;
