import { act, waitFor, renderHook } from "@testing-library/react";
import { useCalcTax } from "./useCalcTax";

describe("useCalcTax", () => {
  test("should calculate tax", async () => {
    const { result } = renderHook(() => useCalcTax());

    act(() => {
      result.current.calcTax({
        yearsOfService: 10,
        isDisability: false,
        isOfficer: false,
        severancePay: 100000,
      });
    });

    await waitFor(() => {
      expect(result.current.result).toEqual({ tax: 10000 });
    });
  });
});
