import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import Table from "react-bootstrap/Table";
import data from "../mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const ReviewForm = () => {
  const [reviews, setReviews] = useState(data);
  const [addFormData, setAddFormData] = useState({
    monthVisited: "",
    typeOfVisit: "",
    title: "",
    review: "",
  });

  const [editFormData, setEditFormData] = useState({
    monthVisited: "",
    typeOfVisit: "",
    title: "",
    review: "",
  });

  const [editReviewId, setEditReviewId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newReview = {
      id: nanoid(),
      monthVisited: addFormData.monthVisited,
      typeOfVisit: addFormData.typeOfVisit,
      title: addFormData.title,
      review: addFormData.review,
    };

    const newReviews = [...reviews, newReview];
    setReviews(newReviews);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedReview = {
      id: editReviewId,
      monthVisited: editFormData.monthVisited,
      typeOfVisit: editFormData.typeOfVisit,
      title: editFormData.title,
      review: editFormData.review
    } 

    const newReviews = [...reviews];

    const index = reviews.findIndex((review)=> review.id === editReviewId)

    newReviews[index] = editedReview;

    setReviews(newReviews);
    setEditReviewId(null);
  } 

  const handleEditClick = (event, review) => {
    event.preventDefault();
    setEditReviewId(review.id);

    const formValues = {
      monthVisited: review.monthVisited,
      typeOfVisit: review.typeOfVisit,
      title: review.title,
      review: review.review,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditReviewId(null);
  }

  const handleDeleteClick = (reviewId) => {
    const newReviews = [...reviews];

    const index = reviews.findIndex((review)=> review.id === reviewId);

    newReviews.splice(index, 1);

    setReviews(newReviews); //this sets the state
  }

  return (
    <div className="container">
      <form onSubmit={handleEditFormSubmit}>
        <br />
        <Table striped bordered size="sm" variant="info">
          <thead>
            <tr>
              <th>Month Visited</th>
              <th>Type of Visit</th>
              <th>Title</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <Fragment>
                {editReviewId === review.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    review={review}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>

      <h2>Add a Review</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="monthVisited"
          required="required"
          placeholder="Enter a month.."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="typeOfVisit"
          required="required"
          placeholder="What type of visit.."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title.."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="review"
          required="required"
          placeholder="Enter a review.."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ReviewForm;

//store the values and state and update the value as the user types
//store the form values as an object and use the state hook and use an event handler function
//to update the values
//GOing to have a different property for each input form
//make a copy of the existant form data so that we can change it without mutating the state
//importing fragment allows you to render 2 children components, children components
//must be surrounded by fragment tags
