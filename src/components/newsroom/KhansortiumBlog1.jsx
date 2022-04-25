import React from "react";
import cover from "../../assets/blog/blog2/cover.jpeg";
import "./styles.css";
import exploring_market from "../../assets/blog/blog2/exploring_market.jpg";
import illinois_market from "../../assets/blog/blog2/illinois_market.png";
import so_far from "../../assets/blog/blog2/so_far.jpg";
import next from "../../assets/blog/blog2/next.jpg";
// import reference1 from "../../assets/blog/blog2/reference1.png"
// import reference2 from "../../assets/blog/blog2/reference2.jpg"
import reference3 from "../../assets/blog/blog2/reference3.png";
const KhansortiumBlog1 = () => {
  return (
    <section>
      <div className="news_banner">
        <img
          style={{ objectPosition: "center bottom", objectFit: "cover" }}
          src={cover}
          alt=""
        />
      </div>
      <div className="news_container">
        <h1 className="news_heading">
          Exploring the Illinois housing market in 2021
        </h1>
        <span className="news_sub_heading">17 December 2021</span>
        <div className="reference">
          <h2> Referenced From:</h2>

          {/* <a href="https://www.townandcountrybank.com/Blog/Posts/165/Mortgage/2021/7/Exploring-the-Illinois-Housing-Market-in-2021/blog-post/"> <img src={reference1} alt=""/></a> */}
          {/* <a href="https://rejournals.com/tag/illinois-realtors/"> <img src={reference2} alt="" /></a> */}
          <a href="https://real-estate-find.com/illinois-real-estate-market/">
            {" "}
            <img src={reference3} alt="" />
          </a>
        </div>

        <div className="news_text_img_right">
          <div className="news_text_half">
            <br />
            <p>
              Despite the economic fallout from the COVID-19 pandemic, the
              Illinois and national housing markets have been in a unique
              position, with low mortgage rates and low inventory encouraging
              buyers to bid above the asking price and buy homes as soon as they
              are listed. Many people are wondering if the real estate market
              will remain hot or if we're headed for a downturn as vaccination
              rates rise and the economy reopens. In this article, we look back
              at 2020, assess where we are now, and examine real estate market
              forecasts for the rest of 2021.
            </p>
          </div>
          <div className="news_img_half">
            <img src={exploring_market} alt="" />
          </div>
        </div>
        <div className="news_text_img_right">
          <div className="news_img_half">
            <img src={illinois_market} alt="" />
          </div>
          <div className="news_text_half">
            <h4>The Illinois Real Estate Market in 2020:</h4>
            <br />
            <p>
              The Federal Reserve lowered its benchmark interest rate to nearly
              zero at the start of the pandemic last year. While this move
              intended to aid an economy that was suddenly in crisis due to the
              closure of businesses and schools, it also contributed to last
              year's rising home prices and limited supply. <br /> Many
              homeowners refinanced their mortgages, and others took out home
              equity loans or lines of credit to finance renovation projects
              when mortgage interest rates fell to historically low levels last
              year. People added home offices, family rooms, and other new
              spaces as we adjusted to the new social distancing way of life or
              improved kitchens and bathrooms that were suddenly seeing a lot
              more use. <br />
              While many homeowners chose to stay put and improve their spaces,
              others, particularly those living in densely populated urban
              areas, felt compelled to upgrade to a larger home and/or acquire
              more outdoor space. As a result, a supply-and-demand situation
              arose, with a large number of buyers and fewer sellers than usual.{" "}
              <br />
              The real estate market in Illinois was impacted by the same trends
              that were seen across the country in 2020. Home sales increased in
              2020, while inventory decreased, according to Illinois REALTORS®.
              Last year, annual closed sales increased by 9.6%, while the annual
              median sales price increased by 7.7%. Meanwhile, the number of
              homes for sale in Illinois fell by 38.8 percent between 2018 and
              2019. <br /> Despite the uncertainty and economic pain caused by
              the pandemic, the Illinois housing market reached a high point in
              2020. The question now is whether the real estate market will
              remain hot until 2021.
            </p>
          </div>
        </div>
        <div className="news_text_img_right">
          <div className="news_text_half">
            <h4>So far, in 2021:</h4>
            <br />
            <p>
              According to the most recent market update from Illinois
              REALTORS®, "as consumers' appetite for homes coincided with the
              traditional real estate season, a reduced inventory led to faster
              sales and higher median prices in May." <br /> Closed sales and
              median sales price are up from May 2020, inventory is down 45.7
              percent, and days on the market until sale are down 20 days from
              last year. <br />
              As a result, the Illinois housing market will remain hot into the
              first half of 2021, with demand outstripping supply and many
              listings receiving multiple offers above the asking price. The big
              question is how long it will last. <br /> According to an Illinois
              REALTORS® market forecast for 2021, "median prices are forecast to
              grow in 2021 within a higher and broader range than in 2020," and
              "sales are forecast to experience overall positive gains in 2021
              for Illinois." In particular, average mortgage rates are expected
              to remain around 3%, which may encourage homebuyers to act now to
              lock in these historically low rates.
            </p>
          </div>
          <div className="news_img_half">
            <img src={so_far} alt="" />
          </div>
        </div>
        <div className="news_text_img_right">
          <div className="news_img_half">
            <img src={next} alt="" />
          </div>
          <div className="news_text_half">
            <h4>What comes next?:</h4>
            <br />
            <p>
              Although the housing market is hot right now, Illinois had one of
              the weakest real estate markets in the country before 2020,
              according to Illinois Policy. When the economy collapsed at the
              start of the pandemic, more than a million people in the state
              lost their jobs, and mortgage delinquencies reached new highs.
              Unfortunately, that trend has continued into 2021, with Illinois
              having the second-highest rate of foreclosures in March. <br />{" "}
              People start talking about a crash whenever the housing market
              heats up, but there is no data to support an impending crash.
              There are still many variables to contend with in real estate, as
              there are in every other sector of the economy's recovery. As an
              example, <br /> In the Illinois REALTORS® 2021 market forecast,
              "The uneven impact of the COVID-19 pandemic on employment by
              sector and income level is likely to be reflected in the housing
              market in 2021," said Geoffrey J.D. Hewings, Director of the
              University of Illinois' Regional Economics Applications
              Laboratory. <br /> Increasing remote work opportunities for
              white-collar workers may drive demand in suburban and exurban
              areas with larger homes, layoffs, and furloughs for retail,
              leisure, and hospitality workers may reduce supply and demand in
              the bottom quarter of the price distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KhansortiumBlog1;
