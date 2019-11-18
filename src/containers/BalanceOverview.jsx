import React from "react";

import OverviewBalanceCard from "../components/Overview/OverviewBalanceCard";

const BalanceOverview = () => {
    return (
        <>
            <OverviewBalanceCard header={"daily"} />
            <OverviewBalanceCard header={"monthly"} />
            <OverviewBalanceCard header={"total"} />
        </>
    );
};

export default BalanceOverview;
