import { MainTableData } from "utils/MainTableData";
import { MainTable } from "styles/CommonTable";
import styled from "styled-components";
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

const Td = styled.td`
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
