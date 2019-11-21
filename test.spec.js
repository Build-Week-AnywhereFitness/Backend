const request = require('supertest');
const classRoute = require('./routes/classes/index')
const userRoute = require('./routes/users/index')

describe('classRoute', function(){
    describe("GET/", function(){
        it("should return 200 ok", function(){
            request(classRoute)
            .get("/")
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});
describe('userRoute', function(){
    describe("GET/", function(){
        it("should return 200 ok", function(){
            request(userRoute)
            .get("/")
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });
});