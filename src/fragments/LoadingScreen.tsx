import React from "react";
import { SyncLoader } from "react-spinners";

const LoadingScreen: React.FC = () => {
  return (
    <div className="!fixed w-full h-screen flexc flex-col transcenter bg-white z-[20]">
      {/* #0d9488 */}
      {/* #6b7280 */}
      <SyncLoader className="scale-150" color="#0d9488" />
    </div>
  );
};

export default LoadingScreen;
