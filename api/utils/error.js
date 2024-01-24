//this error functon is for handling custom error like in authcontroller we add error in if condition
export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
