"use client";

import ManageProvider from "./manageContext";
import { UserProvider } from "./userContext";

interface iProviders {
  children: React.ReactNode;
}

export default function Providers({ children }: iProviders) {
  return (
    <ManageProvider>
      <UserProvider>{children}</UserProvider>
    </ManageProvider>
  );
}
