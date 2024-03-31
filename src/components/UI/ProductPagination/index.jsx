import React from 'react'
import "components/UI/ProductPagination/index.scss"
import { ReactComponent as Previous } from "assets/images/arrow-left.svg"
import { ReactComponent as Next } from 'assets/images/arrow-right.svg';

function ProductPagination({ currentPage, handlePageChange, totalPages }) {
    return (
        <div className="pagination">
          <button
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <Previous className='pagination__arrow-style'/>
          </button>
          <div className="pagination__sheets">
            {[...Array(totalPages)].map((_, index) => (
              <span
                key={index}
                className={currentPage === index ? 'active' : ''}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <button
            disabled={currentPage === totalPages - 1}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <Next className='pagination__arrow-style' />
          </button>
        </div>
    );
}

export default ProductPagination
