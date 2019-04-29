import App from "../src/components/App";

describe("<App />", () => {
  it("renders without crashing", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find("Header").length).toBe(1);
  });
});
