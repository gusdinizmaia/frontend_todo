import React, { createContext, useState } from "react";

interface iManageUIProvider {
  children: React.ReactNode;
}
interface iManageContext {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const manageContextDefault = {
  openModal: false,
  setOpenModal: () => {},
};

export const ManageContext =
  createContext<iManageContext>(manageContextDefault);

export default function ManageProvider({ children }: iManageUIProvider) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <ManageContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ManageContext.Provider>
  );
}
