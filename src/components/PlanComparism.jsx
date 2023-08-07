import "../styles/PlansComparison.css";
import { planFeatures } from "../constants/constant";
import PropTypes from "prop-types";

const PlanComparison = ({ plans }) => {
  return (
    <div className="comparison">
      <h2>COMPARE</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            {plans.map((plan, index) => (
              <th key={index}>{plan.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planFeatures.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
              {plans.map((plan, index) => (
                <td key={index}>
                  {plan.features.includes(feature) ? "✓" : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

PlanComparison.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default PlanComparison;
