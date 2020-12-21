import React from 'react';

const YogaStyles = () => {
    return(
        <React.Fragment>
            <main>
                <section className="experince-outdoors">
                    <div className="container">
                        <div className="title-heading">
                            <h3>YOGA & MEDITATION</h3>
                            <h1>3 YOGA STYLES</h1>
                            <p>
                                Lorem ipsum is placeholder text commonly used in the graphic, print, 
                                and publishing industries for previewing layouts and visual mockups.
                            </p>
                        </div>
                        <div className="activities-grid">

                            {/** grid item 1  */}

                            <div className="activities-grid-item star-gazing">
                                <i className="icon ion-md-star"></i>
                                <h1>Yoga Ashtanga</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            {/** grid item 2  */}

                            <div className="activities-grid-item hiking">
                                <i className="icon ion-md-compass"></i>
                                <h1>Yoga Breathwork</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <div className="activities-grid-item camping">
                                <i className="icon ion-md-bonfire"></i>
                                <h1>Yoga Tao Yin</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default YogaStyles;