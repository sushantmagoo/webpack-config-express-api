export class ErrorHandler extends Error {
  constructor(statusCode, error, message) {
    super();
    this._statusCode = statusCode;
    this._error = error;
    this._message = message;
  }
}

export function handleError(err, res) {
  const { _statusCode, _error, _message } = err;
  return res
    .status(_statusCode)
    .send({ success: false, error: _error, message: _message });
}
