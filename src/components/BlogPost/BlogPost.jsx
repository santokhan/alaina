import React from 'react';
import SLayout from '../section-layout/SectionLayout';
import { BiMessageDetail } from 'react-icons/bi';
import { CgQuote } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import '../../assets/css/button.css';
import BlogPostSlider from '../hero-section/BlogPostSlider';

const BlogPost = () => {
  return (
    <div>
      <SLayout>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="col-span-4">
            {/* post-one start */}
            <div>
              {/* post banner start */}
              <div>
                <img
                  src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-1.jpg"
                  alt="blog-post"
                />
              </div>

              {/* post date start */}
              <div className="flex items-center my-5">
                <div>
                  <p className="text-green-500 font-bold">JUNE 21, 2017</p>
                </div>
                <div className="flex items-center ml-8">
                  <BiMessageDetail className="pr-1 w-6 h-6 text-green-500" />
                  <p>0</p>
                </div>
              </div>

              {/* post content start */}
              <div>
                <h1 className="text-4xl text-gray-600">
                  New Cleaning With Hydrogen Peroxide Tips
                </h1>
                <p className="py-8">
                  by <strong className="text-gray-500">admin</strong>
                </p>
                <p className="text-gray-500 text-xl lg:pr-28">
                  Hiring just the right housekeeper can be life-altering for the
                  busy family. Now this may seem to be a little over-the-top,
                  but I am serious. Think about your life-whether single, a
                  couple or a family-you have no time. No time to keep your home
                  as organized or clean as you would like. No time to do the
                  smaller tidying jobs that would make a huge difference.
                </p>
                <div className="mt-8 btn-main relative overflow-hidden bg-sky-500 w-36 py-4 text-center">
                  <Link to="" className="button-primary">
                    Read Post
                  </Link>
                  <div className="overFlow"></div>
                </div>
              </div>
            </div>
            <div className="my-10 lg:my-20"></div>
            {/* post-two start */}
            <div>
              {/* post banner start */}
              <div>
                <img
                  src="https://smartdata.tonytemplates.com/cleaning-service-v3/ele-demo1/wp-content/uploads/sites/7/2017/06/blog-post-img-2-2.jpg"
                  alt="blog-post"
                />
              </div>

              {/* post date start */}
              <div className="flex items-center my-5">
                <div>
                  <p className="text-green-500 font-bold">JUNE 20, 2017</p>
                </div>
                <div className="flex items-center ml-8">
                  <BiMessageDetail className="pr-1 w-6 h-6 text-green-500" />
                  <p>0</p>
                </div>
              </div>

              {/* post content start */}
              <div>
                <h1 className="text-4xl text-gray-600 pr-24">
                  Apartment Therapy Mom Wisdom on… Taking Care of Your Home
                </h1>
                <p className="py-8">
                  by <strong className="text-gray-500">admin</strong>
                </p>
                <p className="text-gray-500 text-xl lg:pr-28">
                  “I am still learning about my home. If you can’t do it
                  yourself, find good service people and treat them well.” —
                  Terry (mom to our Human Resources Coordinator, Louisa)
                </p>
                {/* quotes */}
                <div className="my-8">
                  <blockquote class="flex items-start text-xl italic font-semibold text-gray-900 dark:text-white">
                    <div>
                      <CgQuote className="w-24 h-24 text-gray-400" />
                    </div>
                    <div className="pl-2 pr-32 pt-8">
                      <p className="text-gray-500 text-xl">
                        Raise your hand if you grew up with a mom (or another
                        parental figure) constantly reminding you to clean your
                        room. Often, our earliest memories of figuring out how
                        to tidy up and take care of our homes are with our
                        moms—they taught us how to do laundry, how to do the
                        dishes, and how to make our beds. So it should come as
                        no surprise that when we asked our moms for their best
                        homekeeping advice, they came back with some great tips.
                        <br /> <br />
                        Most agreed on a few major themes: it’s important to
                        make sure everything has a home, that you put things
                        back when you take them out, and that your home is an
                        inviting, relaxing place to come home to—and invite
                        others to.
                      </p>
                    </div>
                  </blockquote>
                </div>

                {/* third-post start */}
                <div className="lg:my-24">
                  {/* video start */}
                  <div>
                    <iframe
                      width="90%"
                      height="515"
                      src="https://www.youtube.com/embed/Zv11L-ZfrSg"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  {/* post date start */}
                  <div className="flex items-center my-5">
                    <div>
                      <p className="text-green-500 font-bold">JUNE 19, 2017</p>
                    </div>
                    <div className="flex items-center ml-8">
                      <BiMessageDetail className="pr-1 w-6 h-6 text-green-500" />
                      <p>0</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl text-gray-600 pr-24">
                      A Choose-Your-Own-Adventure Plan for Tackling an Annual
                      Chore
                    </h1>
                    <p className="py-8">
                      by <strong className="text-gray-500">admin</strong>
                    </p>
                    <p className="text-gray-500 text-xl lg:pr-28">
                      Hiring just the right housekeeper can be life-altering for
                      the busy family. Now this may seem to be a little
                      over-the-top, but I am serious. Think about your
                      life-whether single, a couple or a family-you have no
                      time. No time to keep your home as organized or clean as
                      you would like. No time to do the smaller tidying jobs
                      that would make a huge difference.
                    </p>
                  </div>
                  <div className="mt-8 btn-main relative overflow-hidden bg-sky-500 w-36 py-4 text-center">
                    <Link to="" className="button-primary">
                      Read Post
                    </Link>
                    <div className="overFlow"></div>
                  </div>
                </div>

                {/* fourth-post start */}
                <div>
                  <BlogPostSlider />
                  {/* post date start */}
                  <div className="flex items-center my-5">
                    <div>
                      <p className="text-green-500 font-bold">JUNE 18, 2017</p>
                    </div>
                    <div className="flex items-center ml-8">
                      <BiMessageDetail className="pr-1 w-6 h-6 text-green-500" />
                      <p>0</p>
                    </div>
                  </div>

                  {/* blog-content start */}
                  <div>
                    <h1 className="text-4xl text-gray-600 pr-24">
                      Try the “Good Enough” Method to Clean Kitchen
                    </h1>
                    <p className="py-8">
                      by <strong className="text-gray-500">admin</strong>
                    </p>
                    <p className="text-gray-500 text-xl lg:pr-28">
                      Do you ever casually go about your day, popping into the
                      kitchen for a little peanut butter toast and then the next
                      thing you know you’re turning over the toaster oven
                      because it’s been so long and you just can’t take the
                      crumbs anymore?
                    </p>
                  </div>

                  {/* read-post button */}
                  <div className="mt-8 btn-main relative overflow-hidden bg-sky-500 w-36 py-4 text-center">
                    <Link to="" className="button-primary">
                      Read Post
                    </Link>
                    <div className="overFlow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </SLayout>
    </div>
  );
};

export default BlogPost;