class ApiResponse {
    constructor(statusCode, response, data, message = "success") {
        this.statusCode = statusCode;
        this.response = response;
        this.data = data;
        this.message = message;
        this.success = statusCode <= 400
    }
}

export { ApiResponse }