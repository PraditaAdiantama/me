const Footer = () => {
	const year = new Date().getFullYear()
  return (
    <div className="w-full max-md:px-5 shadow-xl bg-white dark:bg-slate-800 rounded-xl hover:shadow-2xl mt-5 py-5">
      <p className="text-center font-medium dark:text-white">
        © {year} Muhamad Pradita Adiantama. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
