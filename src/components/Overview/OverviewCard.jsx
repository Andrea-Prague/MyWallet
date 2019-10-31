import React from "react";
import OverviewBalanceCard from "./OverviewBalanceCard";
import styled from "styled-components";

const StyledCard = styled.div``;

// add props for in, out and total
const OverviewCard = () => {
	return (
		<StyledCard>
			<OverviewBalanceCard header={"daily"} />
			<OverviewBalanceCard header={"monthly"} />
			<OverviewBalanceCard header={"total"} />
		</StyledCard>
	);
};

export default OverviewCard;
