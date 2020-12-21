import React from 'react';

const References = () => {
    return(
        <React.Fragment>
            <main>
                <section className="testimonials">
                    <div className="container">
                        <div className="testimonial">
                            <div className="testimonial-text-box">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <i className="icon ion-md-quote"></i>
                            </div>

                            <div className="testimonial-customer">
                                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                                <h1>John Doe</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default References;