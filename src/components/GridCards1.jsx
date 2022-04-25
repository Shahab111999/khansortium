import React, { useState, useEffect, useRef } from "react";

const GridCards1 = ({ gridCardContent,GridBadge }) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [currentSlide2, setCurrentSlide2] = useState(1);
    
  
    const slider = useRef(null);
    const slider2 = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
            nextSlide2();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide, currentSlide2]);

    const nextSlide = () => {
        switch (currentSlide !== 3 ? currentSlide + 1 : 1) {
            case 1:
                slider.current.style.transform = "translateX(0)";
                break;
            case 2:
                slider.current.style.transform = "translateX(-33.33%)";
                break;
            case 3:
                slider.current.style.transform = "translateX(-66.66%)";
                break;
        }
        setCurrentSlide((prev) => (prev + 1 < 4 ? prev + 1 : 1));
    };

    const slide = (slideNum) => {
        switch (slideNum) {
            case 1:
                slider.current.style.transform = "translateX(0)";

                break;
            case 2:
                slider.current.style.transform = "translateX(-33.33%)";
                break;
            case 3:
                slider.current.style.transform = "translateX(-66.66%)";
                break;
        }
    };

    const nextSlide2 = () => {
        let dots = slider2.current.parentElement.querySelectorAll(
            ".slideCounterSquare"
        );
        dots.forEach((dot) => dot.classList.remove("slideCounterSquareActive"));
        switch (currentSlide2 !== 3 ? currentSlide2 + 1 : 1) {
            case 1:
                slider2.current.style.transform = "translateX(0)";
                dots[0].classList.add("slideCounterSquareActive");
                break;
            case 2:
                slider2.current.style.transform = "translateX(-33.33%)";
                dots[1].classList.add("slideCounterSquareActive");
                break;
            case 3:
                slider2.current.style.transform = "translateX(-66.66%)";
                dots[2].classList.add("slideCounterSquareActive");
                break;
        }
        setCurrentSlide2((prev) => (prev + 1 < 4 ? prev + 1 : 1));
    };

    const slide2 = (slideNum) => {
        let dots = slider2.current.parentElement.querySelectorAll(
            ".slideCounterSquare"
        );

        dots.forEach((dot, index) =>
            index === slideNum - 1
                ? dot.classList.add("slideCounterSquareActive")
                : dot.classList.remove("slideCounterSquareActive")
        );
        switch (slideNum) {
            case 1:
                slider2.current.style.transform = "translateX(0)";
                break;
            case 2:
                slider2.current.style.transform = "translateX(-33.33%)";
                break;
            case 3:
                slider2.current.style.transform = "translateX(-66.66%)";
                break;
        }
    };

    return (
        <div id="Grid" className="Grid">
            <div className="GridContainer">{
             GridBadge &&    <div className="GridBadge">
                    <span>{GridBadge}</span>
                </div>}
                <div  className="GridCard1 GridCard">
                    <div ref={slider} className="GridCardSlider">
                        {
                            gridCardContent[0].slides.map((slideContent,index) => (
                                <div className="GridCardSlide" key={index + GridBadge}>
                                    <div className="GridCardImg">
                                        <img src={slideContent.img} alt="" />
                                        <div className="slideCounterSquares">
                                            <div
                                                onClick={() => slide(1)}
                                                className={`slideCounterSquare ${slideContent.slide == "Slide One" && " slideCounterSquareActive"}`}
                                            ></div>
                                            <div
                                                onClick={() => slide(2)}
                                                className={`slideCounterSquare ${slideContent.slide == "Slide Two" && " slideCounterSquareActive"}`}
                                            ></div>
                                            <div className={`slideCounterSquare ${slideContent.slide == "Slide Three" && " slideCounterSquareActive"}`}></div>
                                        </div>
                                    </div>
                                    <div className="GridCardContent">
                                        <span>{slideContent.badge}</span>
                                        <h3>{slideContent.heading}</h3>
                                        <p>
                                            {slideContent.p}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div  className="GridCard2 GridCard">
                    <div className="slideCounterSquares">
                        <div
                            onClick={() => slide2(1)}
                            className="slideCounterSquare slideCounterSquareActive"
                        ></div>
                        <div onClick={() => slide2(2)} className="slideCounterSquare"></div>
                        <div onClick={() => slide2(3)} className="slideCounterSquare"></div>
                    </div>
                    <i className={gridCardContent[1].icon}></i>
                    <div ref={slider2} className="GridCardSlider">
                        {
                            gridCardContent[1].slides.map((slideContent,index)=>(
                        <div className="GridCard2Slide" key={index +GridBadge}>
                            <p>
                                {slideContent.p}
                                <br />
                                <i>{slideContent.italic}</i>
                            </p>
                        </div>

                            ))
                        }
                    </div>
                    <i className="fa fa-expand"></i>
                </div>
                <div  className="GridCard3 GridCard">
                    <i className={gridCardContent[2].icon}></i>
                    <img
                        src={gridCardContent[2].img}
                        alt=""
                    />
                    <i className="card3Date">{gridCardContent[2].italic}</i>
                    <i className="fa fa-expand"></i>
                </div>
                <div  className="GridCard4 GridCard">
                    <img src={gridCardContent[3].img} alt="" />
                    <i className={gridCardContent[3].icon}></i>
                    <p>
                        {gridCardContent[3].p}
                    </p>
                    <i className="fa fa-expand"></i>
                </div>
            </div>
        </div>
    )
}

export default GridCards1
