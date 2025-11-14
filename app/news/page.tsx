import React from "react";

export default function News() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Stay updated with our latest projects, achievements, and
            announcements
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="col-span-full text-center py-12">
            <p className="text-slate-500">No news articles available yet.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
