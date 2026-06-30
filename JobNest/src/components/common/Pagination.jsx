export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
}) {
    return (
        <nav className="mt-4">
            <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <li
                        key={i + 1}
                        className={`page-item ${
                            currentPage === i + 1 ? "active" : ""
                        }`}
                    >
                        <button
                            className="page-link"
                            onClick={() => onPageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}