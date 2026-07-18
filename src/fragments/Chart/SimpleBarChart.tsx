import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const revenue = [
  4500000, 3800000, 5200000, 4100000, 6000000, 5500000, 4800000, 5100000,
  5900000, 4900000, 5300000, 5700000,
];

const cost = [
  2700000, 1900000, 3500000, 2200000, 4100000, 3800000, 3100000, 3400000,
  4000000, 3000000, 3600000, 3900000,
];

// Hitung total revenue dan total cost
const totalRevenue = revenue.reduce((sum, amount) => sum + amount, 0);
const totalCost = cost.reduce((sum, amount) => sum + amount, 0);

// Hitung untung bersih
const netProfit = totalRevenue - totalCost;

// Hitung persentase untung bersih terhadap total revenue
let profitMarginPercentage = 0;
if (totalRevenue !== 0) {
  profitMarginPercentage = (netProfit / totalRevenue) * 100;
}

export const finalProfitMarginPercentage = profitMarginPercentage;

export const revenueCostRatios =
  parseFloat(profitMarginPercentage.toFixed(2)) + "%";

const xLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const SimpleBarChart: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  return (
    <BarChart
      className="bg-gray-200 !w-[70rem]"
      width={width}
      height={height}
      series={[
        { data: revenue, label: "revenue", id: "revenueId" },
        { data: cost, label: "cost", id: "costId" },
      ]}
      xAxis={[
        {
          data: xLabels,
          scaleType: "band",
          dataKey: "month",
          tickPlacement: "middle",
        },
      ]}
      borderRadius={10}
    />
  );
};

export default SimpleBarChart;
