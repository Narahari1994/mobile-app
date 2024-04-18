import { createContext, useContext } from "react";

export const StoreContext = createContext();

export const StoreContextProvider = StoreContext.Provider;

const useStoreContext = () => useContext(StoreContext);

export default useStoreContext;
