// import React from "react"
import { Item } from "../components/Item";
import { homeContent } from "../constants/constant";
import BetaInvite from "../components/BetaInvite";
import PricingComponent from "../components/PriceSelection";

function Pricing() {
  return (
    <div>
      <Item key={4} item={homeContent[4]} />
      <PricingComponent />
      <BetaInvite />
    </div>
  );
}

export default Pricing;
