const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pages = pageNumbers.map((number) => (
    <li className="page-item" key={number}>
      <a className="page-link m-1" href="!#" onClick={() => paginate(number)}>
        {number}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul className="pagination mt-2">{pages}</ul>
    </nav>
  );
};

export default Pagination;
