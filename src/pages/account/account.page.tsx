import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import { AccountFormComponent } from "./component/account-form.component";
import { AccountVm } from "./account.vm";
import { mapAccountFromVmToApi } from "./account.mapper";
import { saveAccount } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAccount = (accountInfo: AccountVm) => {
    const account = mapAccountFromVmToApi(accountInfo);
    saveAccount(account).then((result) => {
      if (result) {
        navigate(appRoutes.accountList);
        alert("Cuenta creada con éxito");
      } else {
        alert("Error al crear la nueva cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <AccountFormComponent onCreateAccount={handleAccount} />
      </div>
    </AppLayout>
  );
};
