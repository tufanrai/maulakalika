"use client";
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
import Project_news_card from "@/components/cards/project_news_card";
import HorizontalTimeline from "@/components/cards/TimelineCard";

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
        className="relative overflow-hidden"
      >
        <div className="w-full bg-linear-60 from-black/80 to-white/0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="ml-12">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Harnessing Nature's Power for a Sustainable Future
                </h1>
                <p className="text-lg text-stone-300 mb-8 leading-relaxed">
                  Maulakalika Hydropower Company Ltd. is dedicated to
                  engineering clean, renewable energy through advanced
                  hydropower solutions, ensuring a brighter and more sustainable
                  tomorrow for all.
                </p>
                <Link href={"/projects"}>
                  <button className="bg-slate-900 hover:bg-slate-800 text-white rounded-xs border border-white px-5 py-2 cursor-pointer ease duration-300 hover:scale-105">
                    Explore Our Projects
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Maulakalika Hydropower
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
            <Link href={"/about"}>
              <button className="mt-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xs px-5 py-2 cursor-pointer ease duration-300 hover:scale-105">
                Learn more
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center hover:shadow-lg hover:shadow-third ease duration-300 transition-shadow"
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
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 group hover:shadow-third duration-300"
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
          <HorizontalTimeline />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Latest Projects
            </h2>
          </div>

          <div className="flex items-center justify-center gap-8">
            <Project_news_card />
            <Project_news_card />
            <Project_news_card />
          </div>
          <div className="w-full flex items-center justify-center pt-20 pb-10">
            <Link href={"/news"}>
              <button className="px-5 py-2 rounded-xs font-medium text-md bg-primary cursor-pointer ease duration-300 hover:shadow-lg/30 hover:shadow-primary hover:scale-105 text-slate-50">
                See more
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
