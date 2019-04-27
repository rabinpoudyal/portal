import NewSingle from "../src/components/News/NewSingle";
import { Typography } from "@material-ui/core";
import { exportAllDeclaration } from "@babel/types";

const newsItem = {
  urlToImage: "google.com",
  title: "This is the title",
  source: {
    name: "google news"
  },
  description: "This is the news description"
};

describe("<NewSingle/>", () => {
  it("accepts the item props correctly", () => {
    //console.log(newsItem);
    const wrapper = mount(<NewSingle item={newsItem} />);
    console.log(wrapper.props().item);
    //console.log(newsItem.title);
    //expect(wrapper.find(".card-title").text()).to.equal(newsItem.title);
  });
});
