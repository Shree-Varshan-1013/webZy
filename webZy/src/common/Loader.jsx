const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen dark:bg-slate-500 bg-white">
            <div className="animate-spin inline-block w-12 h-12 border-[4px] border-current dark:bg-purple2 border-t-transparent text-purple-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
