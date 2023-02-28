import React from 'react';
import BlogPost from '../components/BlogPost/BlogPost';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const Blog = () => {
  return (
    <div>
      <Header />
      <BreadCrumb />
      <BlogPost />
      <Footer />
    </div>
  );
};

export default Blog;
