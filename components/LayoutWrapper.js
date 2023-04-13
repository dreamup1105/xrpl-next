import Header from '@/components/Header/Header'

const LayoutWrapper = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-full bg-[#111015]">
            <Header />
            <main className="mb-auto">{children}</main>
        </div>
    )
}

export default LayoutWrapper
