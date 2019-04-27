import App from "../src/components/App";

describe("<App />", () => {
  it("renders without crashing", () => {
    let wrapper = shallow(<App />, {
      context: {},
      disableLifeCycleMethods: false
    });
    //console.log(wrapper.debug());
  });
});
