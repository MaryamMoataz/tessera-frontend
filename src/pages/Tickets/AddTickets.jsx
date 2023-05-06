import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
    MainTicketsDiv,
    LetsCreateTicketsDiv,
    AddTicketsSideMenu
  } from './styles/AddTickets.styled';


export default function CreateTickets() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const [inputText, setInputText] = useState('General Admission');
    const [inputArray, setInputArray] = useState([]);

    const handleChange = (event) => {
        setInputText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputArray([...inputArray, inputText]);
        setInputText('');
    }

    
  return (
    <>
    
    <MainTicketsDiv>

        <LetsCreateTicketsDiv> 
            <div className='CreateTicketsInfoDIv'>
                <div className='CreateTicketsImgDiv'>
                <span className='CircleSpan'><div><svg  className='CreateTicketsImg'><g fill="none" fill-rule="evenodd"><g><path d="M0 0h144v144H0z"></path><path d="M27 84v-.6c0-4.5 4.05-8.25 8.85-8.25 4.95 0 9.15 4.2 9.15 8.55v.3h3V42h42c.6 4.35 4.2 7.5 8.85 7.5 4.65 0 8.25-3.15 8.85-7.5h7.8v51h-7.8c-.6-4.35-4.2-7.5-8.85-7.5-4.65 0-8.25 3.15-8.85 7.5H35.85c-4.95 0-8.7-3-8.85-9z" fill="#D2D6DF" fill-rule="nonzero"></path><path fill="#363A43" fill-rule="nonzero" d="M81 103h6v3h-6zM99 103h6v3h-6zM107 103h6v3h-6zM72 103h6v3h-6zM90 103h6v3h-6zM63 103h6v3h-6zM54 102.9h6v3h-6zM45 102.9h6v3h-6zM36 102.9h6v3h-6zM36 94h3v6h-3zM110 94h3v6h-3z"></path><path d="M24 84.45c0 6.6 5.25 11.7 11.85 11.7H93v-1.5c0-3.45 2.55-6 6-6s6 2.55 6 6v1.5h13.5v-57H105v1.5c0 3.45-2.55 6-6 6s-6-2.55-6-6v-1.5H47.7c-1.05-5.7-5.85-9.9-11.7-9.9-6.75 0-12 5.4-12 12.15v43.05zM45 41.4v35.4c-3-2.7-5.55-4.35-9.15-4.35-3.6 0-7.35 1.65-8.85 4.05V41.25c0-5.1 3.9-9.15 9-9.15s9 4.2 9 9.3zM27 84v-.6c0-4.5 4.05-8.25 8.85-8.25 4.95 0 9.15 4.2 9.15 8.55v.3h3V42h42c.6 4.35 4.2 7.5 8.85 7.5 4.65 0 8.25-3.15 8.85-7.5h7.8v51h-7.8c-.6-4.35-4.2-7.5-8.85-7.5-4.65 0-8.25 3.15-8.85 7.5H35.85c-4.95 0-8.7-3-8.85-9z" fill="#363A43" fill-rule="nonzero"></path><path d="M45 41.4v35.4c-3-2.7-5.55-4.35-9.15-4.35-3.6 0-7.35 1.65-8.85 4.05V41.25c0-5.1 3.9-9.15 9-9.15s9 4.2 9 9.3z" fill="#FFF" fill-rule="nonzero"></path><path fill="#363A43" fill-rule="nonzero" d="M97.35 70.8h3v3h-3zM97.35 64.8h3v3h-3zM97.35 76.8h3v3h-3zM97.35 58.8h3v3h-3zM97.35 52.8h3v3h-3z"></path><path fill="#3A3A3A" fill-rule="nonzero" d="M54 58.8h37.5v3H54zM54 64.8h15v3H54z"></path></g></g></svg></div></span>
                </div>
                <div className='LetsCreateTextDiv'>
                    Let's create tickets
                </div>
                <div className='CreateTicketsInfoDiv'>
                Create a section if you want to sell multiple ticket types that share the same inventory. i.e. Floor, Mezzanine.
                </div>
                <div className='CreateTicketsButtonsDiv'>

                    <button className='CreateSectionButton'>
                        Create a section
                    </button>
                    <button className='AddTicketsButton' onClick={handleOpenMenu}>
                        Add tickets
                    </button>

                </div>

            </div>
        
        
        </LetsCreateTicketsDiv>


        <AddTicketsSideMenu >
        {isMenuOpen && (
          <div className="AddTicketsMenuDiv">

                <div className='AddTicketsMenuHeaderDiv'>
                    <div className='AddTicketsTitleDiv'>
                        Add tickets
                    </div>
                    <div className='LearnMoreDiv'>
                        Learn more
                    </div>

                </div>
                <div className='CreateTicketInfoDiv'>

                <div className='TicketTypeSelectorDiv'>
                    <button className='PaidTierButton'>
                        Paid
                    </button>
                    <button className='FreeTierButton'>
                        Free
                    </button>
                    <button className='DonationTierButton'>
                        Donation
                    </button>

                </div>
                <div className='TicketNameDiv'>
                    <div className='NameTextboxDiv'>
                        <div className='NameLabelDiv'> Name <span class="eds-label__required-indicator eds-text-bs" data-spec="required-indicator"><span className='asterisk'> *</span></span></div>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <input className='TicketNameInputDiv' placeholder="General Admission" type="text" value={inputText} onChange={handleChange} />
                                </label>
                                    
                            </form>   
                    </div>
                    <div className='TicketNameLength'>{inputText.length}/50</div>
                </div>
                <button onClick={handleCloseMenu}>Cancel</button>

                </div>




            

            {/* menu contents */}
          </div>
        )}
      </AddTicketsSideMenu>
        

    </MainTicketsDiv>
    
    
    </>
  );
}    

