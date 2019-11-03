import React from "react";
import OverviewBalanceCard from "./OverviewBalanceCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div``;

// add props for in, out and total
const OverviewCard = () => {
	return (
		<StyledCard>
			{/* <Link to="/daily"> */}
			<OverviewBalanceCard header={"daily"} />
			{/* </Link> */}
			<OverviewBalanceCard header={"monthly"} />
			<OverviewBalanceCard header={"total"} />
		</StyledCard>
	);
};

export default OverviewCard;
