"use client";

import Cards from "components/blocks/Cards";
import CenterImgText from "components/blocks/CenterImgText";
import ChartListText from "components/blocks/ChartListText";
import ChartTable from "components/blocks/ChartTable";
import Cta from "components/blocks/Cta";

import Hero from "components/blocks/Hero";
import ImageTextCta from "components/blocks/ImageTextCta";
import SingleTable from "components/blocks/SingleTable";
import TableComp from "components/blocks/TableComp";
import Touch from "components/blocks/Touch";

export default function Home() {
  return (
    <main>
      <Hero />
      <TableComp />
      <ImageTextCta />
      <Cards />
      <ChartListText />
      <ChartTable />
      <Touch />
      <CenterImgText />
      <SingleTable />
      <Cta />
    </main>
  );
}
