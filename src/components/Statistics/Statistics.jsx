import {
  StyledStatistics,
  StyledList,
  StyledListItem,
  StyledLabel,
  StyledPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StyledStatistics>
      {title && <h2>{title}</h2>}

      <StyledList>
        {stats.map(stat => (
          <StyledListItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StyledLabel>{stat.label}</StyledLabel>
            <StyledPercentage>{stat.percentage}%</StyledPercentage>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
