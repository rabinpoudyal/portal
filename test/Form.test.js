import NewsForm from "../src/components/News/Form";
import { Button } from "@material-ui/core";

describe("<NewsForm />", () => {
  let mockFetchNews;
  beforeEach(() => {
    mockFetchNews = jest.fn();
  });
  it("check if submit button is working correctly", () => {
    const wrapperFirst = mount(<NewsForm fetchNews={mockFetchNews} />);
    wrapperFirst
      .find(Button)
      .at(0)
      .simulate("click");
    expect(mockFetchNews).toHaveBeenCalled();
  });
  it("check if state is working correctly", () => {
    const wrapperSecond = shallow(<NewsForm fetchNews={mockFetchNews} />);
    wrapperSecond.setState({
      selectedCountry: "india",
      selectedCategory: "technology",
      queryString: "nepal"
    });
    expect(wrapperSecond.instance().state.selectedCategory).toBe("technology");
    expect(wrapperSecond.instance().state.selectedCountry).toBe("india");
    expect(wrapperSecond.instance().state.queryString).toBe("nepal");
  });
});
