import React from "react";

const ReadOnlyRow = ({ review, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{review.monthVisited}</td>
      <td>{review.typeOfVisit}</td>
      <td>{review.title}</td>
      <td>{review.review}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, review)}
        >
          Edit
        </button>
        <button type="button" onClick={()=> handleDeleteClick(review.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
