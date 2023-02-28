import React from 'react';
import '../../assets/css/faq.css';

const SchedulingQ = () => {
  const s_questions = [
    {
      id: 1,
      question: 'CAN I GET A SAME-DAY BOOKING?',
      answer:
        'we don’t guarantee same-day bookings. But, depending on the day, we can often meet this requirement.'
    },
    {
      id: 2,
      question: 'DO I HAVE TO BE HOME FOR MY CLEANING?',
      answer:
        'It’s completely up to you. If you’re not going to be home, make sure you let us know how to access your house by putting the information in your customer dashboard.'
    },
    {
      id: 3,
      question: 'DOES MY CLEANER ARRIVE AT THE EXACT TIME I BOOK?',
      answer:
        'Yes, most of the time. However, we allow a one-hour window due to traffic and weather circumstances. In scenarios where your cleaner will be late, you will be contacted to let you know the ETA.'
    },
    {
      id: 4,
      question: 'WHEN AM I CHARGED FOR THE SERVICE?',
      answer:
        'You are not charged until after the cleaning has been completed. Your invoice will reflect only the amount of time that your cleaner was actually at your home working, rounded-up to the nearest 15 minute increment.'
    },
    {
      id: 5,
      question: 'ARE THERE NAY COMMITMENTS OF CONTRACTS?',
      answer:
        'No, you can cancel service anytime without any penalties. You don’t have to commit to any contracts or pre-determined number of appointments.'
    }
  ];
  return (
    <div>
      {/* scheduling questions start */}
      <div className="lg:my-10">
        <div class="faq-header">
          <h1 className="text-3xl lg:text-4xl text-gray-600 text-center pt-8 lg:pt-0">
            Scheduling Questions
          </h1>
        </div>

        {s_questions.map((item, index) => {
          return (
            <div class="faq-content">
              <div class="faq-question">
                <input id={item.id + 5} type="checkbox" class="panel" />
                <div class="plus">+</div>
                <label for={item.id + 5} class="panel-title">
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

export default SchedulingQ;
