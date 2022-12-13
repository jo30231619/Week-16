import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a month.." 
                    name="monthVisited"
                    value={editFormData.monthVisited}
                    onChange={handleEditFormChange}
                ></input>
            </td>    
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="What type of visit.." 
                    name="typeOfVisit"
                    value={editFormData.typeOfVisit}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a title.." 
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <input 
                    type="text" 
                    required="required" 
                    placeholder="Enter a review.." 
                    name="review"
                    value={editFormData.review}
                    onChange={handleEditFormChange}
                ></input>
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}

export default EditableRow;