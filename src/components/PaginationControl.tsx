interface PaginationControlProps {
    goToPreviousPage: () => void;
    goToNextPage: () => void;
    currentPage: number;
    totalPages: number;
}

export const PaginationControl = ({goToPreviousPage, goToNextPage, currentPage, totalPages}:PaginationControlProps) => {
    return (
        <div className="flex justify-evenly items-center mt-6">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-accent text-white rounded disabled:bg-gray-300 disabled:cursor-default hover:bg-accent/80 cursor-pointer font-medium"
        >
          Anterior
        </button>

        <span className="text-sm text-muted font-medium">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-accent text-white rounded disabled:bg-gray-300 disabled:cursor-default hover:bg-accent/80 cursor-pointer font-medium"
        >
          Próximo
        </button>
      </div>
    )
}