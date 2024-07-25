/* Job Hunting AI Tool: ConfirmationModal.tsx
 * Masaki Nishi, Alexander Wong, Susan Joh, and Christian McKinnon
 * Project Partner: Professor Gates
 * CS 467 Portfolio Project */

/* ConformationModal.tsx enhances UX Error Prevention with a confirmation pop-up 
to help guide users on the HomePage. */
//
// NOTE: CHECK STYLES
import React from "react";

interface ConfirmationModalProps {
  show: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

// Assign Functional Component to display confirmation pop-up
const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  show,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <div className="modal-container">
      <div className="modal-content">
        <p>
          <strong>Are you sure you want to submit?</strong>
        </p>
        <button onClick={onConfirm}>Submit</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
