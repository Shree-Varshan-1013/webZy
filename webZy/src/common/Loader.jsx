const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen dark:bg-slate-900 bg-white">
            <div className="animate-spin inline-block w-12 h-12 border-[4px] border-current dark:border-white border-t-transparent text-purple-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;
