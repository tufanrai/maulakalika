import React from "react";
import { Award, Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Leading the way in sustainable hydropower development
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Maulika Hydropower Company was founded with a vision to harness
                Nepal's abundant water resources for sustainable energy
                generation. Our journey began with a commitment to environmental
                stewardship and community development.
              </p>
              <p>
                Today, we operate multiple hydropower facilities across the
                region, providing clean energy to thousands while maintaining
                our dedication to ecological balance and social responsibility.
              </p>
            </div>
          </div>
          <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
              alt="Hydropower facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To provide sustainable, reliable, and affordable hydroelectric power while protecting the environment.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description:
                "To be the leading renewable energy provider in the region, setting standards for excellence.",
            },
            {
              icon: Award,
              title: "Excellence",
              description:
                "We maintain the highest standards in engineering, safety, and operational efficiency.",
            },
            {
              icon: Heart,
              title: "Community",
              description:
                "We invest in local communities and create lasting positive impacts.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-6 border border-slate-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-sm text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
