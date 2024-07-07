import * as apiModel from "./api";
import * as viewModel from "./account.vm";
import { mapAccountFromVmToApi } from "./account.mapper";

describe("account.mapper specs", () => {
  it("should return a account with same properties", () => {
    // Arrange
    const vmAccount: viewModel.AccountVm = {
      type: "1",
      alias: "myalias",
    };

    const expectedApiAccount: apiModel.Account = {
      type: "1",
      name: "myalias",
    };

    // Act
    const result: apiModel.Account = mapAccountFromVmToApi(vmAccount);

    // Assert
    expect(result).toEqual(expectedApiAccount);
  });
});
