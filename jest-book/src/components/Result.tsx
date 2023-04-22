import { FC } from "react";

type Props = {
  tax?: number;
};

const Result: FC<Props> = ({ tax }) => {
  if (tax === undefined) {
    return (
      <div className="card bg-gray-50 shadow-sm">
        <div className="card-body">
          <div className="flex justify-center">
            <h2 className="text-xl font-bold">退職金情報を入力してください</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-gray-50 shadow-sm">
      <div className="card-body">
        <div className="flex justify-center">
          <h3 className="text-lg font-bold">退職金にかかる所得税</h3>
        </div>
        <div className="flex justify-center items-end mt-8">
          <span className="text-5xl">{tax.toLocaleString()}</span>
          <span className="ml-2">円</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
