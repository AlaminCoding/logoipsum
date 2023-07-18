"use client";
import Table from "components/ui/Table";
import styled from "styled-components";
import { colors } from "styles/GlobalStyle";
import { Title } from "styles/Title";
const TableComp = () => {
  return (
    <TableSec className="primary-container common-padding">
      <Title align="center" className="heading" mw={"1090px"}>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit
      </Title>
      <div className="table">
        <Table />
      </div>
    </TableSec>
  );
};

export default TableComp;

const TableSec = styled.section`
  .table {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
