import React from 'react'

const HomeScreen = () => {
    return (
        <>
            <div class="topBanner">
                <img alt="topBanner" src="/icons/topBanner.svg" class="image1"></img>
                <img alt="result" src="/icons/ResultWordmark.svg" class="image2"></img>



                <div class="description">
                    <label>
                        Recognize and Evaluate Signs to Uncover Labor Trafficking, is a tool to help investigators identify potential labor trafficking under Massachusettes Law.
                    </label>
                </div>
            </div>
            <div>
                <h3>Our Tools</h3>
                <div className="containers">
                    <img alt="assess" src="/icons/Groupassess.svg" class="card__icon"></img>
                    <h4>Assess</h4>
                    <hr className='yellowLine' />
                    <label>Determine if your case is labor trafficking</label>
                    <a href="/">GET STARTED<i class="fas fa-arrow-right"></i> </a>
                </div>
                <div className="containers">
                    <img alt="prepare" src="/icons/Groupprepare.svg" class="card__icon"></img>
                    <h4>Prepare</h4>
                    <hr className='yellowLine' />
                    <label>Find tips for interviewing victims</label>
                    <a href="/">FIND TIPS<i class="fas fa-arrow-right"></i> </a>
                </div>
                <div className="containers">
                    <img alt="resources" src="/icons/Groupresources.svg" class="card__icon"></img>
                    <h4>Resources</h4>
                    <hr className='yellowLine' />
                    <label>Browse resources avaiable in your area</label>
                    <a href="/">EXPLORE RESOURCES<i class="fas fa-arrow-right"></i> </a>
                </div>
            </div>
            <div className="banner">
                <h4>Labor Trafficking Under Massachusettes Law</h4>
                <hr className='yellowLine' />
                <h5>
                    View the Massachusettes labor trafficking staute and stay informed.
                </h5>
                <button type="button" class="yellowBtn myFontColor">READ MORE</button>
            </div>
        </>
    )
}

export default HomeScreen
