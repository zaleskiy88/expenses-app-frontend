import PropTypes from "prop-types";
import { MinMaxTitle, MinMaxValues } from "./MinMax.styled";

export const MinMax = ({ data, title }) => {
  const min = Math.min(...data.map((item) => item.amount));
  const max = Math.max(...data.map((item) => item.amount));

  return (
    <div>
      <MinMaxTitle>
        Min <span>{title}</span> Max
      </MinMaxTitle>

      <MinMaxValues>
        <p>€{min > 0 && min !== Infinity ? min : 0} </p>
        <p>€{max > 0 ? max : 0}</p>
      </MinMaxValues>
    </div>
  );
};

MinMax.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string.isRequired,
};
