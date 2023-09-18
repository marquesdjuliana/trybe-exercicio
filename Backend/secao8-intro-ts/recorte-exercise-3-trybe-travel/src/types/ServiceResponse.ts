type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};

export type ServiceResponseSuccess<Type> = {
  status: 'SUCCESSFUL', 
  data: Type
};

export type ServiceResponse<Type> = ServiceResponseError | ServiceResponseSuccess<Type>;