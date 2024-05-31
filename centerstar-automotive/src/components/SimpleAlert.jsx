import * as React from 'react';
import Alert from '@mui/material/Alert';

const styles = {
  alertContainer: {
    margin: '2vh auto', // Updated margin for vertical spacing and horizontal auto-centering
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0, // Added right: 0 to make the container span the full width
    width: '70%',
    zIndex: 1000, // Adjust this value if needed
  },
};

function ErrorAlert({ isSuccess, message }) {
  return (
    <div style={styles.alertContainer}>
      <Alert severity={isSuccess ? 'success' : 'error'}>{message}</Alert>
    </div>
  );
}

export default ErrorAlert;
