import "../styles/PricingComponent.css";
import { plans } from "../constants/constant";
import { useState } from "react";
import PlanComparison from "./PlanComparism";

function PricingComponent() {
  const [isYearly, setIsYearly] = useState(false);
  //   const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleBillingCycle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <>
      <div className="pricing-container">
        <div className="toggle-container">
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleBillingCycle} />
            <span className="slider round"></span>
          </label>
          <span>Yearly</span>
        </div>
        <div className="plans">
          {plans.map((plan, index) => (
            <div className="plan" key={index}>
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="price">
                {isYearly ? `$${plan.yearlyPrice}` : `$${plan.monthlyPrice}`}
                <span className="month-year">
                  {isYearly ? "per year" : "per month"}
                </span>
              </p>
              <button>PICK PLAN</button>
            </div>
          ))}
        </div>
      </div>
      <PlanComparison plans={plans} />
    </>
  );
}

export default PricingComponent;
