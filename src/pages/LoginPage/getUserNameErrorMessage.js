export const getUserNameErrorMessage = (value) => {
  let errorMessage

  if (value.length > 0 && value.length <= 4 || value.length > 16) {
    errorMessage = 'Username is not valid'
  } else if (value.length === 0) {
    errorMessage = 'Enter the field'
  } else {
    errorMessage = 'No error'
  }

  return errorMessage
}