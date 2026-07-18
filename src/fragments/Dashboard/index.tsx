import { useEffect, useState } from "react";
import SimpleBarChart from "../Chart/SimpleBarChart";
import CountUp from "react-countup";
import { fetchProfit } from "../../services/api";
import LoadingScreen from "../LoadingScreen";

function Dashboard() {
  const [scaleUp, setscaleUp] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [FPMP, setFPMP] = useState<number>(0);

  useEffect(() => {
    // Simulasi pengambilan data
    fetchProfit().then(
      (finalProfitMarginPercentage: number | unknown): void => {
        setFPMP(finalProfitMarginPercentage as number);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}

      <div className="p-5 border border-gray-300 rounded-lg shadow-md shadow-gray-300">
        <SimpleBarChart width={1050} height={400} />
        <div className="text-sm text-center text-gray-500">
          Statistik keuangan di tahun <b>2025</b>
        </div>
        <div
          className={`text-center relative h-[2rem] text-green-500 text-sm font-semibold`}
        >
          <div
            className={`text-sm transcenter transall !duration-500 ${
              scaleUp && "!text-base"
            }`}
          >
            keuntungan sebesar :{" "}
            <CountUp
              delay={0}
              duration={1}
              end={FPMP}
              onStart={() => {
                setscaleUp(true);
              }}
              onEnd={() => {
                setscaleUp(false);
              }}
            />
            %
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
