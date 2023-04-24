import Header from '@/components/Header/Header'
import ExploreBar from './homepage/ExploreBar'
const LayoutWrapper = ({ children, Component, pageProps }) => {
    return (
        <div className="flex flex-col grow-1 min-h-screen w-full h-full bg-[#1A1921]">
            <Header />
            <div className="flex flex-col items-center px-[25px]">
                <ExploreBar />
            </div>
            <main className="mb-auto">{children}</main>
        </div>
    )
}

export default LayoutWrapper
