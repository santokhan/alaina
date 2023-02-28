import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SectionHeader from '../components/layouts/SectionHeader';
import '../assets/css/faq.css';
import SLayout from '../components/section-layout/SectionLayout';

const FAQ = () => {
  const g_questions = [
    {
      question: 'How can I get a quote?',
      answer:
        'Simply visit the signup flow to book a cleaning and as you provide information about your house and schedule, your quote will dynamically adjust.'
    },
    {
      question:
        'Am I charged the full quoted amount even if it does not take that long to clean my house?',
      answer:
        'No, you’re only charged based on the amount of time your cleaner was actually at your home working. If they finish early, you aren’t charged the full amount quoted.'
    },
    {
      question:
        'Does someone have to visit my house before I can book a cleaning?',
      answer:
        'Absolutely not! We wouldn’t want pushy sales people coming to our house so we would never do that to you. You can get a quote and book your cleaning online. It takes about one minute.'
    },
    {
      question: 'Are cleaning supplies included?',
      answer:
        'Cleaning supplies aren’t included by default. This ensures your cleaner uses the products you like and there isn’t any cross-contamination from house to house.However, if you don’t have supplies, we can bring them for an additional charge of $10 per visit ($15 for move-in/out cleanings). You can opt-in to this option from your customer dashboard. Also, you can click here to see a list of items to have on hand. Please note: we always use your vacuum and mop/bucket so please be sure to have those items on-hand.'
    },
    {
      question: 'What if I am not happy with my cleaning?',
      answer:
        'Please get in touch with us right away and we’ll make arrangements to rectify the situation. We have a satisfaction guarantee that we stand by.'
    }
  ];

  const s_questions = [
    {
      question: 'CAN I GET A SAME-DAY BOOKING?',
      answer:
        'we don’t guarantee same-day bookings. But, depending on the day, we can often meet this requirement.'
    },
    {
      question: 'DO I HAVE TO BE HOME FOR MY CLEANING?',
      answer:
        'It’s completely up to you. If you’re not going to be home, make sure you let us know how to access your house by putting the information in your customer dashboard.'
    },
    {
      question: 'DOES MY CLEANER ARRIVE AT THE EXACT TIME I BOOK?',
      answer:
        'Yes, most of the time. However, we allow a one-hour window due to traffic and weather circumstances. In scenarios where your cleaner will be late, you will be contacted to let you know the ETA.'
    },
    {
      question: 'WHEN AM I CHARGED FOR THE SERVICE?',
      answer:
        'You are not charged until after the cleaning has been completed. Your invoice will reflect only the amount of time that your cleaner was actually at your home working, rounded-up to the nearest 15 minute increment.'
    },
    {
      question: 'ARE THERE NAY COMMITMENTS OF CONTRACTS?',
      answer:
        'No, you can cancel service anytime without any penalties. You don’t have to commit to any contracts or pre-determined number of appointments.'
    }
  ];

  const c_questions = [
    {
      question: "WHAT'S INCLUDED IN A STANDARD CLEANING?",
      answer:
        'Here’s a listing of what gets cleaned in every room of your house during a standard cleaning. You can also request extra items via your customer dashboard.'
    },
    {
      question: 'DO YOU PROVIDE THE SUPPLIES?',
      answer:
        'Cleaning supplies aren’t included by default. This ensures your cleaner uses the products you like and there isn’t any cross-contamination from house to house. However, if you don’t have supplies, we can bring them for an additional charge of $10 per visit ($15 for move-in/out cleanings). You can opt-in to this option from your customer dashboard.Also, you can click here to see a list of items to have on hand. Please note: we always use your vacuum and mop/bucket so please be sure to have those items on-hand.'
    },
    {
      question: 'WHAT SERVICES DO YOU OFFER?',
      answer:
        'We offer a range of services from weekly cleaning to one-time cleaning to move-in and move-out cleaning. You can see the different services by visiting the front page and clicking on the “Services” button halfway down the page.'
    },
    {
      question: 'HOW MANY CLEANERS DO YOU SEND?',
      answer:
        'Only one cleaner is sent to your home. If you’re on a recurring schedule, we’ll do our best to match you with the same person going forward.'
    },
    {
      question: 'ARE CLEANING COMPANY CLEANERS SCREENED?',
      answer:
        'Absolutely. The cleaners go through a screening process that includes a police background check, reference checks and in-person interviews. We also require significant experience in residential house cleaning to work with us.'
    }
  ];

  return (
    <div>
      <Header />
      <SectionHeader
        title={'Frequently Asked Questions'}
        description={
          'Many of our customers have specific questions about our professional maid services. Here are just a few of the frequently asked questions we hear at Cleaning Company.'
        }
      />
      <div className="my-12">
        <SLayout>
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
                    <input id={index} type="checkbox" class="panel" />
                    <div class="plus">+</div>
                    <label for={index} class="panel-title">
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
                    <input id={index} type="checkbox" class="panel" />
                    <div class="plus">+</div>
                    <label for={index} class="panel-title">
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
                    <input id={index} type="checkbox" class="panel" />
                    <div class="plus">+</div>
                    <label for={index} class="panel-title">
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
        </SLayout>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
