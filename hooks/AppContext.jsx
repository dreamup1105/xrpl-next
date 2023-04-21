import { createContext, useContext, useState } from "react"

export const AppContext = createContext({
    headerVisible: true,
    setHeaderVisible: () => { }
});
export function AppProvider({ childern }) {
    const [headerVisible, setHeaderVisible] = useState(true);
    return (
        <AppContext.Provider
            value={{
                headerVisible,
                setHeaderVisible
            }}>
            {childern}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}