import PropTypes from "prop-types";
import { MinMaxTitle, MinMaxValues } from "./MinMax.styled";

export const MinMax = ({ data, title }) => {
  return (
    <div>
      <MinMaxTitle>
        Min <span>{title}</span> Max
      </MinMaxTitle>

      <MinMaxValues>
        <p>€{Math.min(...data.map((item) => item.amount))} </p>
        <p>€{Math.max(...data.map((item) => item.amount))}</p>
      </MinMaxValues>
    </div>
  );
};

MinMax.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string.isRequired,
};
