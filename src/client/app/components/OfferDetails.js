import React from 'react'
import { Carousel } from 'react-bootstrap';

const OfferDetails = ({offer}) => {
    var offerImages = [offer.image0_m, offer.image1_m, offer.image2_m, offer.image3_m, offer.image4_m, offer.image5_m]
    var carouselItems = offerImages.filter(image => image ? true : false
    ).map((image, index) =>
        <Carousel.Item key={index}>
            <img alt="" src={image}/>
        </Carousel.Item>
    )

    return (
        <div>
            <div className="row">
                <h1 className="text-center">{offer.title} <small>{offer.price} &euro;</small></h1>
            </div>
            <div className="row">
            <Carousel className="col-md-6" className="col-md-offset-3">
                {carouselItems}
            </Carousel>
            </div>
            <div className="row margin-top-15">
                <div className="col-md-3 col-md-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Address</h3>
                         </div>
                        <div className="panel-body">
                            <address>
                                {offer.city} {offer.postcode} {offer.street} {offer.number}
                            </address>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Description</h3>
                            </div>
                            <div className="panel-body">
                                {offer.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferDetails