export interface AccountVm {
  type: string;
  alias: string;
}

export const createEmptyAccountVm = (): AccountVm => ({
  type: "",
  alias: "",
});

export interface AccountError {
  type: string;
  alias: string;
}

export const createEmptyTransferError = (): AccountError => ({
  type: "",
  alias: "",
});
