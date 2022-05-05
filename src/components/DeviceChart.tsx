import * as React from "react";
import ReactApexcharts from "react-apexcharts";
import { num } from "../utils/generators";

const data = new Array(3).fill(0).map((_el) => num());

type DeviceChartProps = {
  options: {
    labels: string[];
    colors: string[];
  };
};
export default function DeviceChart({
  options: localOptions,
}: DeviceChartProps) {
  const options: ApexCharts.ApexOptions = {
    legend: {
      show: true,
      position: "bottom",
    },
    colors: localOptions.colors,
    stroke: { width: 0 },
    labels: localOptions.labels,
    dataLabels: {
      enabled: true,
      formatter: (val: any) => `${parseInt(val, 10)}%`,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              formatter(val: any) {
                return `${val}`;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              label: "Total Visits",
              formatter() {
                return `${data.reduce((a, b) => a + b, 0)}`;
              },
            },
          },
        },
      },
    },
  };

  return (
    <div>
      <ReactApexcharts
        options={options}
        series={data}
        type="donut"
        height={500}
      />
    </div>
  );
}
