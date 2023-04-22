import InputForm from "./InputForm";
import Result from "./Result";

const Page = () => {
  return (
    <div className="container mx-auto px-4 bg-slate-100">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mt-8">
          退職金の所得税計算アプリケーション
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <InputForm />
        <Result />
      </div>
    </div>
  );
};

export default Page;
