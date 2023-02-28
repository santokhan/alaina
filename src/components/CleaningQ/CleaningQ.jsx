import React from 'react';
import '../../assets/css/faq.css';

const CleaningQ = () => {
  const c_questions = [
    {
      id: 1,
      question: "WHAT'S INCLUDED IN A STANDARD CLEANING?",
      answer:
        'Here’s a listing of what gets cleaned in every room of your house during a standard cleaning. You can also request extra items via your customer dashboard.'
    },
    {
      id: 2,
      question: 'DO YOU PROVIDE THE SUPPLIES?',
      answer:
        'Cleaning supplies aren’t included by default. This ensures your cleaner uses the products you like and there isn’t any cross-contamination from house to house. However, if you don’t have supplies, we can bring them for an additional charge of $10 per visit ($15 for move-in/out cleanings). You can opt-in to this option from your customer dashboard.Also, you can click here to see a list of items to have on hand. Please note: we always use your vacuum and mop/bucket so please be sure to have those items on-hand.'
    },
    {
      id: 3,
      question: 'WHAT SERVICES DO YOU OFFER?',
      answer:
        'We offer a range of services from weekly cleaning to one-time cleaning to move-in and move-out cleaning. You can see the different services by visiting the front page and clicking on the “Services” button halfway down the page.'
    },
    {
      id: 4,
      question: 'HOW MANY CLEANERS DO YOU SEND?',
      answer:
        'Only one cleaner is sent to your home. If you’re on a recurring schedule, we’ll do our best to match you with the same person going forward.'
    },
    {
      id: 5,
      question: 'ARE CLEANING COMPANY CLEANERS SCREENED?',
      answer:
        'Absolutely. The cleaners go through a screening process that includes a police background check, reference checks and in-person interviews. We also require significant experience in residential house cleaning to work with us.'
    }
  ];
  return (
    <div>
      {/* cleaning questions start */}
      <div className="lg:my-10">
        <div class="faq-header">
          <h1 className="text-3xl lg:text-4xl text-gray-600 text-center pt-8 lg:pt-0">
            Cleaning Questions
          </h1>
        </div>

        {c_questions.map((item, index) => {
          return (
            <div class="faq-content">
              <div class="faq-question">
                <input id={item.id + 10} type="checkbox" class="panel" />
                <div class="plus">+</div>
                <label for={item.id + 10} class="panel-title">
                  {item.question}
                </label>
                <div class="panel-content">
                  <p className="pl-5 lg:pl-10">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CleaningQ;
