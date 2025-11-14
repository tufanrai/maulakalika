import React from "react";
import {
  ArrowRight,
  Zap,
  Building2,
  Leaf,
  Shield,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import hero from "@/public/Hydro electric power plant stock image_ Image of powerplant - 19361119.jpg";

export default function Home() {
  const stats = [
    { value: "25+", label: "Years in the Industry" },
    { value: "500+", label: "MW Generation Capacity" },
    { value: "100+", label: "Employees Onboard" },
    { value: "1M+", label: "Carbon Emissions Offset" },
  ];

  const services = [
    {
      icon: Zap,
      title: "Renewable Energy Generation",
      description:
        "Generating clean, reliable renewable electricity through pioneering hydro and innovative technology.",
    },
    {
      icon: Building2,
      title: "Dam Infrastructure Management",
      description:
        "Expert management and maintenance of dam structures, ensuring longevity and operational efficiency.",
    },
    {
      icon: Leaf,
      title: "Environmental Impact Studies",
      description:
        "Conducting thorough environmental footprint and ecological footprint analyses promoting biodiversity.",
    },
    {
      icon: Shield,
      title: "Hydro-Engineering & Consulting",
      description:
        "Providing specialized engineering services for complex hydropower project development.",
    },
  ];

  const legacyProjects = [
    {
      year: "2024",
      title: "Green expansion and sustainable solutions",
      status: "active",
    },
    {
      year: "2020",
      title: "First advanced hydro implementation",
      status: "completed",
    },
    {
      year: "2015",
      title: "New expansion with international partners",
      status: "completed",
    },
    {
      year: "2010",
      title: "Major regional infrastructure development",
      status: "completed",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url("${hero.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative bg-slate-100 overflow-hidden"
      >
        <div className="max-w-7xl bg-linear-60 from-black/50 to-white/0 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="ml-12">
              <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Harnessing Nature's Power for a Sustainable Future
              </h1>
              <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                Maulika Hydropower Company Ltd. is dedicated to engineering
                clean, renewable energy through advanced hydropower solutions,
                ensuring a brighter and more sustainable tomorrow for all.
              </p>
              <Link href={"/prjects"}>
                <button className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-5 py-2">
                  Explore Our Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Maulika Hydropower
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Maulika Hydropower Company Ltd. has been at the forefront of
              renewable energy generation since its inception. Committed to
              providing sustainable, environmentally-sound hydropower projects
              that contribute significantly to national energy security.
            </p>
            <p>
              Our projects combine cutting-edge technology with deep respect for
              the environment, maintaining standards of engineering excellence
              and uncompromised stewardship.
            </p>
            <button className="mt-4 bg-slate-900 hover:bg-slate-800 text-white rounded-md px-5 py-2">
              Learn more
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg transition-shadow "
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Comprehensive Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Legacy
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 hidden md:block"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {legacyProjects.map((project, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 bg-slate-900 rounded-full border-4 border-white z-10"></div>

                <div
                  className={`bg-slate-50 rounded-xl p-6 border border-slate-200 ${
                    index % 2 === 0 ? "md:mt-20" : "md:mb-20"
                  }`}
                >
                  <div className="inline-block bg-slate-900 text-white text-sm font-bold px-3 py-1 rounded-lg mb-3">
                    {project.year}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest News & Updates
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {newsLoading ? (
              Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-slate-200 animate-pulse"
                  >
                    <div className="h-6 bg-slate-200 rounded mb-3"></div>
                    <div className="h-4 bg-slate-200 rounded mb-2"></div>
                    <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                  </div>
                ))
            ) : newsItems.length > 0 ? (
              newsItems.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer"
                >
                  {news.image_url && (
                    <div className="aspect-video bg-slate-100 rounded-xl mb-4 overflow-hidden">
                      <img
                        src={news.image_url}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{news.category?.replace(/_/g, " ")}</span>
                  </div>
                  {news.publish_date && (
                    <div className="text-xs text-teal-600 font-medium mb-2">
                      {new Date(news.publish_date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {news.summary}
                  </p>
                </div>
              ))
            ) : ( */}
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500">No news articles available yet.</p>
            </div>
            {/* // )} */}
          </div>

          {/* {newsItems.length > 0 && (
            <div className="text-center mt-12">
              <Link href={"/news"}>
                <button>
                  View All News
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
}
