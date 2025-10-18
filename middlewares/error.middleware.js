import BaseError from '../errors/base.error.js'

export default function errorMiddleware(err, req, res, next) {
  if (err instanceof BaseError) {
    return res.status(err.status).json({
      success: false,
      message: err.message,
      errors: err.errors,
    })
  }

  console.error('❌ Unexpected error:', err)

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  })
}
