const AsyncHandler = (requestHandaler) => {
    (req, res, next) => {
        Promise.resolve(requestHandaler(req, res, next))
            .catch((err) => next(err))
    }
}
export { AsyncHandler }