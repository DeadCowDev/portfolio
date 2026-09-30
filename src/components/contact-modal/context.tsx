"use client";
import { createContext, FC, useContext, useState } from "react";

const ContactModalContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({ open: false, setOpen: () => {} });

export const useContactModal = () => useContext(ContactModalContext);

export const ContactModalProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
};
