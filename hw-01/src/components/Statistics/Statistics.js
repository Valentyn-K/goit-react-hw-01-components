import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const StatSection = styled.section`
  background-color: #fff;
  margin: 20px;
`;

const StatsH2 = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
`;

const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const Label = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin: 5px;
`;

const Percentage = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap");
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin: 5px;
`;

function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ title = "", stats = [] }) => (
  <StatSection>
    {title.length > 0 ? <StatsH2> {title}</StatsH2> : <></>}
    <StatsList>
      {stats.map(({ id, label, percentage }) =>
        id && label && percentage ? (
          <StatsListItem
            key={id}
            style={{ backgroundColor: `${generateColor()}` }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsListItem>
        ) : (
          <></>
        )
      )}
    </StatsList>
  </StatSection>
);

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
