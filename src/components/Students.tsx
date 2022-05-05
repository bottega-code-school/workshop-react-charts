import * as React from "react";
import ReactApexcharts from "react-apexcharts";
import { num } from "../utils/generators";
import Layout from "./Layout";
import { AiOutlineBarChart, AiOutlineAreaChart } from "react-icons/ai";

const data = {
  james: new Array(10).fill(0).map((_el) => num()),
  gabrielle: new Array(10).fill(0).map((_el) => num()),
  alice: new Array(10).fill(0).map((_el) => num()),
};

export default function Students() {
  const [view, setView] = React.useState<"area" | "bar">("bar");

  const series = [
    {
      name: "James",
      data: data.james,
    },
    {
      name: "Gabrielle",
      data: data.gabrielle,
    },
    {
      name: "Alica",
      data: data.alice,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    xaxis: {
      categories: [
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
      ],
    },
  };

  const links = (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <a
        onClick={() => setView("bar")}
        style={{
          fontSize: "3em",
          color: view === "bar" ? "#0f6375" : "black",
        }}
      >
        <AiOutlineBarChart />
      </a>

      <a
        onClick={() => setView("area")}
        style={{
          fontSize: "3em",
          color: view === "area" ? "#0f6375" : "black",
        }}
      >
        <AiOutlineAreaChart />
      </a>
    </div>
  );

  return (
    <Layout>
      {links}

      {view === "bar" && (
        <ReactApexcharts
          series={series}
          options={options}
          type="bar"
          height={500}
        />
      )}

      {view === "area" && (
        <ReactApexcharts
          series={series}
          options={options}
          type="area"
          height={500}
        />
      )}
    </Layout>
  );
}
