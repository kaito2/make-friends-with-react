import { useState } from "react";

export type CalcTaxParams = {
  yearsOfService: number;
  isDisability: boolean;
  isOfficer: boolean;
  severancePay: number;
};

export type CalcTaxResult = {
  tax?: number;
};

export const useCalcTax = () => {
  const [result, setResult] = useState<CalcTaxResult>({});

  const calcTax = ({
    yearsOfService,
    isDisability,
    isOfficer,
    severancePay,
  }: CalcTaxParams) => {
    const tax = severancePay * 0.1;
    setResult({ tax });
  };

  return { result, calcTax };
};
