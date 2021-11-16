import { shallow } from "enzyme";
import Home from "../pages/index";

describe("Pages", () => {
    describe("Home", () => {
        it("should render without throwing an error", function () {
            const wrap = shallow(<Home />);
            expect(wrap.find("#derivApi")).toBeDefined();
        });
    });
});
