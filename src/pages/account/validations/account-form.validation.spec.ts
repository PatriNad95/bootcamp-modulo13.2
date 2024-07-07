import { validateForm } from "./account-form.validation";
import * as accountFieldValidation from "./account-field.validation";
import { vi } from "vitest";
import { AccountVm } from "../account.vm";

describe("account-form.validation specs", () => {
  describe("validateForm", () => {
    it("should return true when all fields are correct", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        alias: "John Doe",
      };

      vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(accountFieldValidation, "validateAliasField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        alias: "",
      });
    });

    it("should return false when validateAliasField is incorrect", () => {
      // Arrange
      const account: AccountVm = {
        type: "1",
        alias: "",
      };

      vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(accountFieldValidation, "validateAliasField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        alias: "Error",
      });
    });

    it("should return false when validateTypeField is incorrect", () => {
      // Arrange
      const account: AccountVm = {
        type: "",
        alias: "1",
      };

      vi.spyOn(accountFieldValidation, "validateAliasField").mockReturnValue({
        succeeded: true,
      });

      vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      // Act
      const result = validateForm(account);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "Error",
        alias: "",
      });
    });
  });
});
