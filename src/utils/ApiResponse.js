class ApiREsponse {
    constructor(statuscose, data, message = "Success") {
        this.statusCode = statuscose;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400
    }
}