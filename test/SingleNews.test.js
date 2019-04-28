import NewSingle from "../src/components/News/NewSingle";
import { Typography, CardMedia, Button, CardActions } from "@material-ui/core";
import { exportAllDeclaration } from "@babel/types";

const newsItem = {
  urlToImage: "google.com",
  url: "google.com",
  title: "This is the title",
  source: {
    name: "google news"
  },
  description: "This is the news description"
};

describe("<NewSingle/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewSingle item={newsItem} />);
  });

  it("renders all the items correctly", () => {
    expect(wrapper.find(".card-title").length).toBe(1);
    expect(wrapper.find(CardMedia).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(3);
  });

  it("renders the props correctly", () => {
    expect(
      wrapper
        .find(".card-title")
        .children()
        .text()
    ).toBe(newsItem.title);
    expect(
      wrapper
        .find(".news-description")
        .children()
        .text()
    ).toBe(newsItem.description);
    expect(wrapper.find(".external-link").props().href).toBe(newsItem.url);
  });
});
