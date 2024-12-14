const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[400px]">
      <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-600 mb-4"></div>
      <p className="text-orange-500 font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
