"use client";

import styled from "styled-components";
import { MainTable } from "styles/CommonTable";
import { colors } from "styles/GlobalStyle";
import { weekData } from "utils/MainTableData";
import { sizes } from "styles/GlobalStyle";

const SingleTable = () => {
  return (
    <Section className="primary-container common-padding">
      <div className="table-wrapper">
        <MainTable className="main-table" thColor="#BBE5C9">
          <thead>
            <tr>
              <th>Date</th>
              <th>Users</th>
              <th>Week 0</th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
              <th>Week 5</th>
              <th>Week 6</th>
              <th>Week 7</th>
              <th>Week 8</th>
            </tr>
          </thead>
          <tbody>
            {weekData.map((e, idx) => (
              <tr key={"week-table-" + idx}>
                <Td>{e.date}</Td>
                <Td>{e.users}</Td>
                <Td val={e.w0}>{e.w0 ? "$" + e.w0 : null}</Td>
                <Td val={e.w1}>{e.w1 ? "$" + e.w1 : null}</Td>
                <Td val={e.w2}>{e.w2 ? "$" + e.w2 : null}</Td>
                <Td val={e.w3}>{e.w3 ? "$" + e.w3 : null}</Td>
                <Td val={e.w4}>{e.w4 ? "$" + e.w4 : null}</Td>
                <Td val={e.w5}>{e.w5 ? "$" + e.w5 : null}</Td>
                <Td val={e.w6}>{e.w6 ? "$" + e.w6 : null}</Td>
                <Td val={e.w7}>{e.w7 ? "$" + e.w7 : null}</Td>
                <Td val={e.w8}>{e.w8 ? "$" + e.w8 : null}</Td>
              </tr>
            ))}
          </tbody>
        </MainTable>
      </div>
    </Section>
  );
};

export default SingleTable;

const Section = styled.section`
  .table-wrapper {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      @media ${sizes(992)} {
        display: none;
      }
    }
  }

  .main-table {
    th {
      background-color: "#BBE5C9";
    }
  }
`;

const Td = styled.td`
  background-color: ${(props) => {
    if (props.val >= 300) {
      return colors.darkGreen;
    } else if (props.val >= 250) {
      return colors.midGreen;
    } else {
      return colors.lightGray;
    }
  }};
`;
