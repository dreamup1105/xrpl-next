import ExploreBar from '@/components/homepage/ExploreBar';

const HomeLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center min-h-screen px-[25px]">
            {/* <ExploreBar /> */}
            {children}
        </div>
    );
}

export default HomeLayout;
