import { FC } from "react";
import InputForm from "./InputForm";
import Result from "./Result";
import { CalcTaxParams, useCalcTax } from "@/hooks/useCalcTax";

const Page = () => {
  const { result, calcTax } = useCalcTax();

  return <Presentation tax={result.tax} calcTax={calcTax} />;
};

type PresentationProps = {
  tax?: number;
  calcTax: (params: CalcTaxParams) => void;
};

export const Presentation: FC<PresentationProps> = ({ tax, calcTax }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mt-8">
          退職金の所得税計算アプリケーション
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <InputForm onSubmit={calcTax} />
        <Result tax={tax} />
      </div>
    </div>
  );
};

export default Page;
