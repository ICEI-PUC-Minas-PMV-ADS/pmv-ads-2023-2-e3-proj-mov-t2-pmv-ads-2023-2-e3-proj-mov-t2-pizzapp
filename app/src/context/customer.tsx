import { createContext, useState } from "react";

type Customer = {
  table?: string;
  name?: string;
  handleChangeTable: (table: string) => void;
  handleChangeName: (name: string) => void;
};

export const CustomerContext = createContext<Customer | null>({
  table: '',
  name: '',
  handleChangeTable: () => {},
  handleChangeName: () => {},
});

export const CustomerProvider = ({ children }: { children: React.ReactNode }) => {
  const [table, setTable] = useState<string>();
  const [name, setName] = useState<string>();

  function handleChangeName (value:string) {
    console.log('context: ',value);
    setName(value);
  }

  const handleChangeTable = (value:string) => {
    setTable(value);
  }

  const value = {
    table,
    name,
    handleChangeTable,
    handleChangeName
  }

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};
