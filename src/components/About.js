// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // });
    // const [btnText, setBtnText] = useState("Enable dark mode")

    // const onClicking = () => {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable light mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable dark mode")
    //     }
    // };



    return (
        <div className="container">
            <h4 className="heading my-3" style={{color: props.mode==="light" ? "black":"white"}}>{props.about}</h4>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        {/* <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button> */}
                        <button className="accordion-button" style={{backgroundColor: props.mode==="light" ? "white":"#232841", color: props.mode==="light" ? "black":"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            important information.....
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==="light" ? "white":"#232841",color: props.mode==="light" ? "black":"white"}}  >
                            In this website you can modify your text.You can change into upperCase. you can into change lowerCase
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
