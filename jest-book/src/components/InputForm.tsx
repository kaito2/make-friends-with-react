import { CalcTaxParams } from "@/hooks/useCalcTax";
import { FC, useState } from "react";

type Props = {
  onSubmit: (params: CalcTaxParams) => void;
};

const InputForm: FC<Props> = ({ onSubmit }) => {
  const [severancePay, setSeverancePay] = useState<number | undefined>(
    undefined
  );

  return (
    <div className="card bg-gray-50 shadow-sm">
      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="text-xl font-bold">退職金情報を入力してください</h2>
        </div>
        <h3 className="font-bold mt-8">勤続年数</h3>
        <div className="form-control">
          <label className="input-group">
            <input type="number" className="input input-bordered w-20" />
            <span>年</span>
          </label>
        </div>
        <h3 className="font-bold mt-4">退職起因</h3>
        <div className="form-control flex items-start">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="ml-4 label-text">
              障害者となったことに直接起因して退職した
            </span>
          </label>
        </div>
        <h3 className="font-bold mt-4">役員等以外か役員等か</h3>
        <div className="flex">
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio" checked />
              <span className="label-text ml-2">役員等以外</span>
            </label>
          </div>
          <div className="form-control ml-8">
            <label className="label cursor-pointer">
              <input type="radio" name="radio-10" className="radio" />
              <span className="label-text ml-2">役員等</span>
            </label>
          </div>
        </div>
        <h3 className="font-bold mt-4">退職金</h3>
        <div className="form-control">
          <label className="input-group">
            <input
              type="number"
              className="input input-bordered"
              onChange={(e) => {
                setSeverancePay(Number(e.target.value));
              }}
              value={severancePay}
              placeholder="100000"
            />
            <span>円</span>
          </label>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="btn btn-primary w-48"
            onClick={() => {
              onSubmit({
                severancePay: severancePay!,
                isDisability: false,
                isOfficer: false,
                yearsOfService: 0,
              });
            }}
          >
            所得税を計算する
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
