
const catController = require("../../../src/controllers/cat/catController");

beforeEach(() => {    
    jest.resetAllMocks();
});

afterEach(() => {
    jest.resetAllMocks();
});


const getCatsSuccessResponse = {
    'imgUrl': '/home/yasiru/Documents/Personal projects/Interviews/Gapstar/cat-service/cat-card.jpg',
}

describe("Test catController", () => {

    it("Test image save success", async () => {

        jest.mock("../../../src/services/cat/catService", () => ({
            ...(jest.requireActual("../../../src/services/cat/catService")),
            getCats: jest.fn().mockReturnValue({
                'imgUrl': '/home/yasiru/Documents/Personal projects/Interviews/Gapstar/cat-service/cat-card.jpg',
            })
        }))
        const cats = await catController;
        expect(cats).toEqual(getCatsSuccessResponse)
    });
   
});
