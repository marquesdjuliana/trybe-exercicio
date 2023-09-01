const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INVALID_REQUEST: 400,
  CONFLICT: 409,
  INVALID_VALUE: 422,
  NOT_CONTENT: 204,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;