import { FormValidationResult } from "@/common/validations";
import {
  validateAliasField,
  validateTypeField,
} from "./account-field.validation";
import { AccountError, AccountVm } from "../account.vm";

export const validateForm = (
  account: AccountVm
): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateAliasField(account.alias),
  ];

  const formValidationResult: FormValidationResult<AccountError> = {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      alias: fieldValidationResults[1].errorMessage ?? "",
    },
  };

  return formValidationResult;
};
