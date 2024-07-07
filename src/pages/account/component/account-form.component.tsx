import React from "react";
import {
  AccountError,
  AccountVm,
  createEmptyAccountVm,
  createEmptyTransferError,
} from "../account.vm";
import classes from "./account-form.component.module.css";
import { validateForm } from "../validations";

interface Props {
  onCreateAccount: (account: AccountVm) => void;
}

const accountListOptions = [
  {
    id: "1",
    alias: "Cuenta Corriente",
  },
  {
    id: "2",
    alias: "Cuenta de Ahorro",
  },
  {
    id: "3",
    alias: "Cuenta de Nómina",
  },
];

export const AccountFormComponent: React.FC<Props> = (props) => {
  const { onCreateAccount } = props;
  const [account, setAccount] = React.useState<AccountVm>(
    createEmptyAccountVm()
  );

  const [errors, setErrors] = React.useState<AccountError>(
    createEmptyTransferError()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onCreateAccount(account);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta:</label>
            <select
              name="type"
              onChange={handleFieldChange}
              value={account.type}
              className={classes.sizeFields}
            >
              <option value="">Seleccionar</option>
              {accountListOptions.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.alias}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias:</label>
            <input
              name="alias"
              className={classes.sizeFields}
              onChange={handleFieldChange}
            />
            <p className={classes.error}>{errors.alias}</p>
          </div>
        </div>
        <button className={classes.button} type="submit">
          GUARDAR
        </button>
      </form>
    </div>
  );
};
