import {
  validateAliasField,
  validateTypeField,
} from "./account-field.validation";

import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";

describe("account-field.validation specs", () => {
  describe("validateAliasField", () => {
    it("should return false when alias is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateAliasField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when alias is informed", () => {
      // Arrange
      const value = "John Doe";

      // Act
      const result = validateAliasField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });

  describe("validateTypeField", () => {
    it("should return false when account id is empty", () => {
      // Arrange
      const value = "";

      // Act
      const result = validateTypeField(value);

      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it("should return true when account id is informed", () => {
      // Arrange
      const value = "1";

      // Act
      const result = validateTypeField(value);

      // Assert
      expect(result.succeeded).toBeTruthy();
    });
  });
});
