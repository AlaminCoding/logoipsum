import styled from "styled-components";
import { MainTableData } from "utils/MainTableData";
import { colors } from "styles/GlobalStyle";
const Table = () => {
  return (
    <MainTable>
      <thead>
        <tr>
          <th>Source</th>
          <th>Ad</th>
          <th>Cost</th>
          <th>Sales</th>
          <th>First Time Customers</th>
          <th>Revenue</th>
          <th>ROAS</th>
          <th>CAC</th>
          <th>F.T ROAS</th>
        </tr>
      </thead>
      <tbody>
        {MainTableData.map((element, idx) => (
          <tr key={"row-" + idx}>
            <Td>{element.src}</Td>
            <Td>{element.ad}</Td>
            <Td>{element.cost}</Td>
            <Td>{element.sales}</Td>
            <Td>{element.ftc}</Td>
            <Td>{element.revenue}</Td>
            <Td val={element.roas} bold="700">
              {element.roas}
            </Td>
            <Td>{element.cac}</Td>
            <Td val={element.ftroas}>{element.ftroas}</Td>
          </tr>
        ))}
      </tbody>
    </MainTable>
  );
};

export default Table;

const MainTable = styled.table`
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  text-align: center;
  th {
    background-color: ${colors.lightGray};
    &:nth-child(1) {
      border-radius: 6px 0px 0px 6px;
    }
    &:nth-last-child(1) {
      border-radius: 0px 6px 6px 0px;
    }
  }
  td,
  th {
    padding: 24px 10px;
  }
`;

const Td = styled.td`
  border-radius: 6px;
  border: 2px solid white;
  font-weight: ${(props) => props.bold};
  background-color: ${(props) => {
    if (props.val > 7) {
      return colors.darkGreen;
    } else if (props.val > 4) {
      return colors.midGreen;
    } else {
      return colors.lightGreen;
    }
  }};
`;
