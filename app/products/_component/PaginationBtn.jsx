import Link from "next/link";
export default function PaginationBtn({ params, pagination }) {
  const pageNum = {
    page: pagination.pagination.page,
    prePage: Number(pagination.pagination.page) - 1,
    postPage: Number(pagination.pagination.page) + 1,
    total: pagination.pagination.pageCount,
  };

  function pages() {
    let i = pageNum.page;
    let List = [];
    while (i <= pageNum.total) {
      List.length !== 3 ? List.push(i) : null;
      i++;
    }

    const pagin = List.map((ele) => {
      return (
        <li key={ele}>
          <Link
            href={
              ele == pageNum.page
                ? "#"
                : `/products/${params.productType}/${ele}`
            }
            className={` ${
              ele == pageNum.page
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-gray-400 hover:bg-teal-600 hover:border-teal-600 transition hover:text-white bg-white text-gray-900"
            } block size-8 rounded border text-center leading-8`}
          >
            {ele}
          </Link>
        </li>
      );
    });
    return pagin;
  }
  return (
    <ol className="flex justify-center gap-1 text-xs  font-medium">
      <li>
        <Link
          href={
            pageNum.prePage !== 0
              ? `/products/${params.productType}/${pageNum.prePage}`
              : "#"
          }
          className="inline-flex size-8 items-center justify-center rounded border hover:bg-teal-600 hover:border-teal-600 transition hover:text-white  border-gray-400 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </li>
      {pageNum.prePage == 0 ? null : (
        <li>
          <Link
            href={`/products/${params.productType}/${pageNum.prePage}`}
            className="block size-8 rounded border hover:bg-teal-600 hover:border-teal-600 transition hover:text-white border-gray-400 bg-white text-center leading-8 text-gray-900"
          >
            {pageNum.prePage}
          </Link>
        </li>
      )}

      {pages()}
      <li>
        <Link
          href={
            pageNum.page == pageNum.total
              ? "#"
              : `/products/${params.productType}/${pageNum.postPage}`
          }
          className="inline-flex size-8 items-center justify-center rounded border hover:bg-teal-600 hover:border-teal-600 transition hover:text-white border-gray-400 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </li>
    </ol>
  );
}
