import React from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest health and wellness tips.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
            <p className="text-gray-600">Our blog section is under construction. Check back soon for valuable insights on health and wellness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
