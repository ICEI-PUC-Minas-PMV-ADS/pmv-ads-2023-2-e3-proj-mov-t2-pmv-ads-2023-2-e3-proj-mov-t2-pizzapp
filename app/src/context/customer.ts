import { createContext } from "react";

type Customer = {
    table: string;
    name: string;
}

type CustomerContextType = {
    customer: Customer;
    setCustomer: (customer: Customer) => void;
}

export const CustomerContext = createContext({} as CustomerContextType);

