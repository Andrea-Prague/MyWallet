import React from "react";
import OverviewBalanceCard from "./OverviewBalanceCard";

// add props for in, out and total
const OverviewCard = () => {
	return (
		<>
			<OverviewBalanceCard header={"daily"} />
			<OverviewBalanceCard header={"monthly"} />
			<OverviewBalanceCard header={"total"} />
		</>
	);
};

export default OverviewCard;
