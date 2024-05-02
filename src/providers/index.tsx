"use client";

import { UserProvider } from "./userContext";

interface iProviders {
  children: React.ReactNode;
}

export default function Providers({ children }: iProviders) {
  return <UserProvider>{children}</UserProvider>;
}
