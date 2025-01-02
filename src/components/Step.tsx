const Step = ({ text, end = false }: { text: string; end?: boolean }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="dark:fill-white"
          width="25"
          height="25"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
        {end == false && (
          <div className="w-1 h-10 bg-black dark:bg-white"></div>
        )}
      </div>
      <p className="font-semibold dark:text-white">{text}</p>
    </div>
  );
};

export default Step;
