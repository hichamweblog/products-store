export const sendResponse = (
  res,
  statusCode,
  success,
  message,
  data = null,
) => {
  const response = {
    success,
    message,
  };

  if (data) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

export const sendError = (res, statusCode, message) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export const sendSuccess = (res, message, data = null) => {
  return sendResponse(res, 200, true, message, data);
};
