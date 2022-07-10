export function BreadCrumb({
  level1,
  level2,
}: {
  level1: { label: string; href: string };
  level2: string;
}) {
  return (
    <div className="flex pt-20 pb-5">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href={"/"}
            className="text-lg font-medium font-cursive text-gray-900 hover:text-gray-500 hover:animate-bounce dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-900 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <a
              href={level1.href}
              className="ml-1 text-lg font-medium font-cursive text-gray-900 hover:text-gray-500 hover:animate-bounce md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              {level1.label}
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-900 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="ml-1 text-lg font-medium font-cursive text-gray-900 underline underline-offset-4 decoration-2 decoration-redCrayola md:ml-2 dark:text-gray-400">
              {level2}
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
}
