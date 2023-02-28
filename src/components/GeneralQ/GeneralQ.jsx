import React from 'react';
import '../../assets/css/faq.css';

const GeneralQ = () => {
  const g_questions = [
    {
      id: 1,
      question: 'How can I get a quote?',
      answer:
        'Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.'
    },
    {
      id: 2,
      question:
        'Am I charged the full quoted amount even if it does not take that long to clean my house?',
      answer:
        'No, you’re only charged based on the amount of time your cleaner was actually at your home working. If they finish early, you aren’t charged the full amount quoted.'
    },
    {
      id: 3,
      question:
        'Does someone have to visit my house before I can book a cleaning?',
      answer:
        'Absolutely not! We wouldn’t want pushy sales people coming to our house so we would never do that to you. You can get a quote and book your cleaning online. It takes about one minute.'
    },
    {
      id: 4,
      question: 'Are cleaning supplies included?',
      answer:
        'Cleaning supplies aren’t included by default. This ensures your cleaner uses the products you like and there isn’t any cross-contamination from house to house.However, if you don’t have supplies, we can bring them for an additional charge of $10 per visit ($15 for move-in/out cleanings). You can opt-in to this option from your customer dashboard. Also, you can click here to see a list of items to have on hand. Please note: we always use your vacuum and mop/bucket so please be sure to have those items on-hand.'
    },
    {
      id: 5,
      question: 'What if I am not happy with my cleaning?',
      answer:
        'Please get in touch with us right away and we’ll make arrangements to rectify the situation. We have a satisfaction guarantee that we stand by.'
    }
  ];
  return (
    <div>
      {/* general question start */}
      <div className="lg:my-10">
        <div class="faq-header">
          <h1 className="text-3xl lg:text-4xl text-gray-600 text-center">
            General Questions
          </h1>
        </div>

        {g_questions.map((item, index) => {
          return (
            <div class="faq-content">
              <div class="faq-question">
                <input id={item.id} type="checkbox" class="panel" />
                <div class="plus">+</div>
                <label for={item.id} class="panel-title">
                  {item.question}
                </label>
                <div class="panel-content">
                  <p className="pl-10">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GeneralQ;
