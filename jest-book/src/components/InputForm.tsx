import { CalcTaxParams } from "@/hooks/useCalcTax";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// TODO: Review: このコンポーネントから useCalcTax を呼び出すのは適切か？
type Props = {
  onSubmit: (params: CalcTaxParams) => void;
};

const InputForm: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CalcTaxParams>({
    defaultValues: {
      isOfficer: false,
    },
  });
  const onSubmit2: SubmitHandler<CalcTaxParams> = (data) => {
    console.log(data);
    onSubmit(data);
  };

  console.log(errors);

  return (
    <div className="card bg-gray-50 shadow-lg">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit2)}>
          <div className="flex justify-center">
            <h2 className="text-xl font-bold">退職金情報を入力してください</h2>
          </div>
          <div className="mt-8">
            <span className="font-bold">勤続年数</span>
            {errors.yearsOfService?.type === "required" && (
              <span role="alert" className="text-red-500 ml-2 text-sm">
                必須項目です。
              </span>
            )}
            {errors.yearsOfService?.type === "min" && (
              <span role="alert" className="text-red-500 ml-2 text-sm">
                0以上の値を入力してください。
              </span>
            )}
            {errors.yearsOfService?.type === "max" && (
              <span role="alert" className="text-red-500 ml-2 text-sm">
                99以下の値を入力してください。
              </span>
            )}
          </div>
          <div className="flex justify-start items-center">
            <label className="input-group">
              <input
                type="number"
                className="input input-bordered w-20"
                {...register("yearsOfService", {
                  required: true,
                  min: 0,
                  max: 99,
                })}
                aria-invalid={errors.yearsOfService ? "true" : "false"}
              />
              <span>年</span>
            </label>
          </div>
          <h3 className="font-bold mt-4">退職起因</h3>
          <div className="flex items-start">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox"
                {...register("isDisability")}
              />
              <span className="ml-4 label-text">
                障害者となったことに直接起因して退職した
              </span>
            </label>
          </div>
          <h3 className="font-bold mt-4">役員等以外か役員等か</h3>
          <div className="flex">
            <label className="label cursor-pointer">
              <input
                type="radio"
                className="radio"
                value="false"
                {...register("isOfficer")}
              />
              <span className="label-text ml-2">役員等以外</span>
            </label>
            <label className="label cursor-pointer ml-8">
              <input
                type="radio"
                className="radio"
                value="true"
                {...register("isOfficer")}
              />
              <span className="label-text ml-2">役員等</span>
            </label>
          </div>
          <div>
            <span className="font-bold mt-4">退職金</span>
            {errors.severancePay?.type === "required" && (
              <span role="alert" className="text-red-500 ml-2 text-sm">
                必須項目です。
              </span>
            )}
            {errors.severancePay?.type === "min" && (
              <span role="alert" className="text-red-500 ml-2 text-sm">
                0以上の値を入力してください。
              </span>
            )}
          </div>
          <label className="input-group">
            <input
              type="number"
              className="input input-bordered"
              placeholder="100000"
              {...register("severancePay", { required: true, min: 0 })}
            />
            <span>円</span>
          </label>
          <div className="mt-8 flex justify-end">
            <input
              type="submit"
              className="btn btn-primary w-56"
              value="所得税を計算する"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
