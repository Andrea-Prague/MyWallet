import React from "react";
import OverviewBalanceCard from "./OverviewBalanceCard";
import styled from "styled-components";

const StyledCard = styled.div``;

const OverviewCard = () => {
	return (
		<StyledCard>
			<OverviewBalanceCard header={"daily"} name="/daily" />
			<OverviewBalanceCard header={"monthly"} name="/monthly" />
			<OverviewBalanceCard header={"total"} name="/total" />
		</StyledCard>
	);
};

export default OverviewCard;
