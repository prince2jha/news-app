import { Component } from "react";
import NewsItem from "./NewsItem";
// import Articles from "../sampleOutput";

class News extends Component {
  // articles = [
  //   {
  //     source: { id: "next-big-future", name: "Next Big Future" },
  //     author: "Brian Wang",
  //     title: "Foundation Series Looks Good | NextBigFuture.com",
  //     description:
  //       "Isaac Asimov's classic science fiction series Foundation will debut globally September 24, 2021, exclusively on Apple TV+.",
  //     url:
  //       "https://www.nextbigfuture.com/2021/08/foundation-series-looks-good.html",
  //     urlToImage:
  //       "https://nextbigfuture.s3.amazonaws.com/uploads/2021/08/Screen-Shot-2021-08-24-at-11.27.19-PM-1024x425.jpg",
  //     publishedAt: "2021-08-25T06:33:27Z",
  //     content:
  //       "Brian Wang is a Futurist Thought Leader and a popular Science blogger with 1 million readers per month. His blog Nextbigfuture.com is ranked #1 Science News Blog. It covers many disruptive technology… [+593 chars]"
  //   },
  //   {
  //     source: { id: "national-geographic", name: "National Geographic" },
  //     author: "Nadia Drake",
  //     title: "How these feuding map-makers shaped our fascination with Mars",
  //     description:
  //       "One was an artist who loved space. His rival was a bold professional astronomer. Their race to map the red planet sparked decades of science and speculation.",
  //     url:
  //       "https://www.nationalgeographic.com/science/2021/02/how-feuding-map-makers-shaped-our-fascination-with-mars.html",
  //     urlToImage:
  //       "https://pmdvod.nationalgeographic.com/NG_Video/788/579/smpost_1612381336455.jpg",
  //     publishedAt: "2021-02-17T14:37:21.3706142Z",
  //     content: null
  //   },
  //   {
  //     source: { id: "national-geographic", name: "National Geographic" },
  //     author: null,
  //     title: "Episode 3: Why War Zones Need Science Too",
  //     description:
  //       "Undaunted by Yemen’s civil war, National Geographic explorer Ella Al-Shamahi searches on the island of Socotra for traces of the earliest known humans to leave Africa.",
  //     url:
  //       "https://www.nationalgeographic.com/podcasts/overheard/season-5/episode-3-why-war-zones-need-science.html",
  //     urlToImage:
  //       "https://www.nationalgeographic.com/content/dam/ngdotcom/rights-exempt/podcasts/Overheard/season5/episode3/nationalgeographic_2708459.jpg",
  //     publishedAt: "2021-02-17T14:37:20.2759318Z",
  //     content: null
  //   }
  // ];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  async componentDidMount() {
    const url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=1ee0aa53a845402286d677d32625806d";
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <>
        <div className="container my-5">
          <h2 className="my-5">Nerdy News - Top HeadLine</h2>
          <div className="row mx-2">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default News;
