import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordionItem from '../components/Accordion';
import ushape from '../assets/img/u-shape.svg';
import lshape from '../assets/img/l-shape.svg';
import singlewall from '../assets/img/single-wall.svg';
import galley from '../assets/img/galley.svg';
import small from '../assets/img/small.svg';
import medium from '../assets/img/medium.svg';
import large from '../assets/img/large.svg';
import modern from '../assets/img/modern.svg';
import contemporary from '../assets/img/contemporary.svg';
import traditional from '../assets/img/traditional.svg';
import transitional from '../assets/img/transitional.svg';
import goodkitchen from '../assets/img/goodkitchen.svg';
import betterkitchen from '../assets/img/betterkitchen.svg';
import bestkitchen from '../assets/img/bestkitchen.svg';

const priceRanges = {
    ushape: [1000, 2000],
    lshape: [2000, 3000],
    singlewall: [500, 1000],
    galley: [4000, 4500],
    small: [1000, 2000],
    medium: [2000, 3000],
    large: [3000, 4000],
    Modern: [5000, 6000],
    contemporary: [7000, 8000],
    traditional: [9000, 10000],
    transitional: [11000, 12000],
    good: [13000, 14000],
    better: [15000, 16000],
    best: [17000, 18000]
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedItems, setSelectedItems] = useState({});
    const [totalRange, setTotalRange] = useState([0, 0]);
    const [error, setError] = useState(false);
    const [doneClicked, setDoneClicked] = useState(false);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleSelection = (step, value) => {
        setSelectedItems(prevState => ({
            ...prevState,
            [step]: value,
        }));
        setError(false);
    };

    const isItemSelected = (step) => selectedItems[step] !== undefined;

    const handleContinue = () => {
        setError(false);
        if (activeIndex === 0 && (!isItemSelected(0) || !isItemSelected(1))) {
            setError(true);
        } else if (activeIndex === 1 && !isItemSelected(2)) {
            setError(true);
        } else if (activeIndex === 2 && !isItemSelected(3)) {
            setError(true);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };

    useEffect(() => {
        let minTotal = 0;
        let maxTotal = 0;
        Object.keys(selectedItems).forEach(step => {
            const [min, max] = priceRanges[selectedItems[step]];
            minTotal += min;
            maxTotal += max;
        });
        setTotalRange([minTotal, maxTotal]);
    }, [selectedItems]);

    const handleDone = () => {
        if (isItemSelected(3)) {
            setDoneClicked(true);
            document.querySelector(".quotebox").scrollIntoView({ behavior: 'smooth' });
        } else {
            setError(true);
        }
    };


    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <AccordionItem
                        title="Kitchen Layout & Size"
                        isActive={activeIndex === 0}
                        onClick={() => handleToggle(0)}>
                        <h6 className="mt-3 mb-3">Choose kitchen layout</h6>
                        <div className={`collapse ${activeIndex === 0 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <div className="row firstStepParentDiv">
                                    {[
                                        { val: 'ushape', img: ushape, text: 'U-Shape' },
                                        { val: 'lshape', img: lshape, text: 'L-Shape' },
                                        { val: 'singlewall', img: singlewall, text: 'Single-Wall' },
                                        { val: 'galley', img: galley, text: 'Galley' }
                                    ].map((item, index) => (
                                        <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 align-items-center justify-content-center">
                                            <div
                                                className="firstStepDiv"
                                                data-val={item.val}
                                                onClick={() => handleSelection(0, item.val)}
                                            >
                                                <div className={`d-flex align-items-center justify-content-center rounded-circle custom-img ${selectedItems[0] === item.val ? 'selected' : ''}`}>
                                                    <img src={item.img} style={{ width: 100 }} className="img-responsive" />
                                                </div>
                                                <p className="my-2 text-center">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="row SecondStepParentDiv my-2" style={{ padding: '10px' }}>
                                    <h6 className="mt-2 mb-4">Select the size that most closely fits your space</h6>
                                    {[
                                        { val: 'small', img: small, text: 'Small' },
                                        { val: 'medium', img: medium, text: 'Medium' },
                                        { val: 'large', img: large, text: 'Large' }
                                    ].map((item, index) => (
                                        <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 align-items-center justify-content-center">
                                            <div
                                                className="firstsecondStepDiv"
                                                data-val={item.val}
                                                onClick={() => handleSelection(1, item.val)}
                                            >
                                                <div className={`d-flex align-items-center justify-content-center rounded-circle custom-img ${selectedItems[1] === item.val ? 'selected' : ''}`}>
                                                    <img src={item.img} style={{ width: 75 }} className="img-responsive" />
                                                </div>
                                                <p className="my-2 text-center">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {error && (!isItemSelected(0) || !isItemSelected(1)) && <div className="alert alert-danger my-3">Please select a kitchen layout and size before continuing.</div>}
                                <div className="row py-2">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button id="firstStepBtn" className="btn btn-primary-1 mt-2 fs-5 rounded-pill px-3" type="button" onClick={handleContinue}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem
                        title="Style"
                        isActive={activeIndex === 1}
                        onClick={() => handleToggle(1)}>
                        <h6 className="mt-3 mb-3">Select your desired decor style</h6>
                        <div className={`collapse ${activeIndex === 1 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <div className="row SecondStepParentDiv">
                                    {[
                                        { val: 'Modern', img: modern, text: 'Modern' },
                                        { val: 'contemporary', img: contemporary, text: 'Contemporary' },
                                        { val: 'traditional', img: traditional, text: 'Traditional' },
                                        { val: 'transitional', img: transitional, text: 'Transitional' }
                                    ].map((item, index) => (
                                        <div key={index} className="col align-items-center justify-content-center">
                                            <div
                                                className={`SecondStepDiv ${selectedItems[2] === item.val ? 'selected' : ''}`}
                                                data-val={item.val}
                                                onClick={() => handleSelection(2, item.val)}
                                            >
                                                <div
                                                    className="d-flex align-items-center justify-content-center"
                                                    style={{
                                                        border: selectedItems[2] === item.val ? '4px solid #009A3D' : 'none',
                                                        borderRadius: '100%',
                                                        overflow: 'hidden',
                                                        width: '150px',
                                                        height: '150px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <img src={item.img} alt={item.text} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <p className="my-2 text-center">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {error && !isItemSelected(2) && <div className="alert alert-danger my-3">Please select a decor style before continuing.</div>}
                                <div className="row py-2">
                                    <div className="col ">
                                        <button id="ThirdStepBtn" className="btn btn-primary-1 mt-2 fs-5 rounded-pill px-3" type="button" onClick={handleContinue}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>


                    <AccordionItem
                        title="Storage Solution Package"
                        isActive={activeIndex === 2}
                        onClick={() => handleToggle(2)}
                    >
                        <h6 className="mb-3 mt-3">Select storage solution package</h6>
                        <div className={`collapse ${activeIndex === 2 ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <div className="row thirdStepParentDiv" style={{ padding: '0px' }}>
                                    {[
                                        { val: 'good', img: goodkitchen, text: 'Good Kitchen', details: ['All cabinets shown', 'Soft close doors and drawers', 'Lazy susan corner'] },
                                        { val: 'better', img: betterkitchen, text: 'Better Kitchen', details: ['All the benefits from “good kitchen” plus...', 'Crown molding​', 'Large pots and pans drawers​', 'Enclosed fridge surround with full depth cabinet'] },
                                        { val: 'best', img: bestkitchen, text: 'Best Kitchen', details: ['All the benefits from “Better kitchen” plus...', 'Extended height wall cabinets', 'Crown molding to ceiling and light valance', 'Fully outfitted with pots and pans deep drawers', 'Full depth pantry cabinet Glass cabinets', 'Wainscotting and flush furniture molding on island'] }
                                    ].map((item, index) => (
                                        <div key={index} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                                            <div
                                                className={`thirdStepDiv ${selectedItems[3] === item.val ? 'selected' : ''}`}
                                                data-val={item.val}
                                                onClick={() => handleSelection(3, item.val)}
                                                style={{
                                                    border: selectedItems[3] === item.val ? '3px solid #009A3D' : '2px solid #9091A7',
                                                    padding: '10px',
                                                    margin: '5px',
                                                    width: '100%'
                                                }}
                                            >
                                                <h5 className='justify-content-center text-center stoarge1 py-2 fw-6'>{item.text}</h5>
                                                <div className="align-items-center justify-content-centers">
                                                    <img src={item.img} className="img-fluid" />
                                                </div>
                                                <ul className='mt-2'>
                                                    {item.details.map((detail, idx) => (
                                                        <li
                                                            key={idx}
                                                            style={{ listStyleType: detail.includes('All the benefits') ? 'none' : 'disc' }}
                                                        >
                                                            {detail.includes('All the benefits') ? <strong>{detail}</strong> : detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {error && !isItemSelected(3) && <div className="alert alert-danger my-3">Please select a storage solution package before continuing.</div>}
                                <div className="row py-2">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button id="FourthStepBtn" className="btn btn-primary-2 btn-lg mt-2 fs-5 rounded-pill px-3" type="button" onClick={handleDone}>Done</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 quotebox py-3 mt-3 h-50">
                    <>
                        <h5 className='justify-content-center text-center quote py-2 fw-6'>Quick Quote</h5>
                        {['ushape', 'lshape', 'singlewall', 'galley'].map((layout, index) => (
                            selectedItems[0] === layout && (
                                <div key={index} className='d-flex justify-content-between border-bottom border-2 py-2'>
                                    <span className='fs-6 text-capitalize'>Cabinets:</span>
                                    <span className='fs-6'>${priceRanges[layout][0]} - ${priceRanges[layout][1]}</span>
                                </div>
                            )
                        ))}

                        <div className='d-flex justify-content-between fs-5 py-2'>
                            <span className='fw-6'>TOTAL:</span>
                            {doneClicked && (
                                <>
                                    <span className='fw-6'>${totalRange[0]} - ${totalRange[1]}</span>
                                </>
                            )}
                        </div>
                        <p className='small text-light2'>Please note this estimate does not include current promotional pricing. Be sure to ask your kitchen designer about available promotions.</p>
                        <button className="btn btn-primary fs-6">GET FREE DESIGN</button>
                    </>
                </div>


            </div>
        </div>
    );
};

export default Accordion;
