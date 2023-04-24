import { useEffect, useState } from 'react'
import Header from '@/components/Header/Header'
import ExploreBar from './homepage/ExploreBar'
import { useRouter } from 'next/router'
const LayoutWrapper = ({ children, Component, pageProps }) => {
    const router = useRouter()
    const [headerVisible, setHeaderVisible] = useState(true)
    useEffect(() => {
        console.log(router.asPath)
        if (router.asPath.includes("/authentication")) { setHeaderVisible(false) }
        else { setHeaderVisible(true) }
    }, [router])
    return (
        <div className="flex flex-col grow-1 min-h-screen w-full h-full bg-[#1A1921]">
            {headerVisible && <Header />}
            {headerVisible && <div className="flex flex-col items-center px-[25px]">
                <ExploreBar />
            </div>}
            <main className="flex flex-col min-h-screen">{children}</main>
        </div>
    )
}

export default LayoutWrapper
