"use client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import hero from "@/public/It's a deal!.jpg";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import mailSchema from "@/components/schema/mail.schema";
import { IForm } from "@/components/interface/interfaces";
import { useMutation } from "@tanstack/react-query";
import mailAdmin from "../api/mail.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Contact() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: mailAdmin,
    mutationKey: ["New Mail"],
    onSuccess: () => {
      toast.success("Your message has successfully been sent");
      reset();
      setTimeout(() => {
        router.replace("/");
      }, 3000);
    },
    onError: () => {
      toast.error("Something went wrong please try again later");
    },
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(mailSchema),
  });

  const sendMail = (data: IForm) => {
    mutate(data);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section
        style={{
          backgroundImage: `url("${hero.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" text-white"
      >
        <div className="w-full bg-black/40 flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Get in touch with our team. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit(sendMail)}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  placeholder="John Doe"
                  {...register("name")}
                  className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 w-full rounded-md border-[1px] border-stone-300"
                />
                {errors.name && errors.name.message ? (
                  <p className="font-thin text-xs text-red-500 px-5 py-1 w-full text-end">
                    {errors.name.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="john@example.com"
                  className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 w-full rounded-md border-[1px] border-stone-300"
                />
                {errors.email && errors.email.message ? (
                  <p className="font-thin text-xs text-red-500 px-5 py-1 w-full text-end">
                    {errors.email.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input
                  placeholder="How can we help?"
                  {...register("subject")}
                  className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 w-full rounded-md border-[1px] border-stone-300"
                />
                {errors.subject && errors.subject.message ? (
                  <p className="font-thin text-xs text-red-500 px-5 py-1 w-full text-end">
                    {errors.subject.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  {...register("message")}
                  className="bg-white outline-none px-5 py-1 font-regural text-md text-stone-800 w-full rounded-md border-[1px] border-stone-300"
                />
                {errors.message && errors.message.message ? (
                  <p className="font-thin text-xs text-red-500 px-5 py-1 w-full text-end">
                    {errors.message.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <button
                type="submit"
                className={`w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 flex items-center justify-center gap-2 rounded-md py-3 font-semibold text-lg ${
                  isPending ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <AiOutlineSend className="w-4 h-4 mr-2 font-black text-7xl -rotate-45 ease duration-300 hover:rotate-0" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Address
                    </h3>
                    <p className="text-slate-600">
                      123 Hydroelectric Road
                      <br />
                      Aqua City, Waterfalls 98765
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (650) 123-4567</p>
                    <p className="text-slate-600">+977 (98) 60000000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@maulikahydropower.com</p>
                    <p className="text-slate-600">support@maulikahydro.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="w-full flex justify-center py-8">
        <div className="max-w-[1280px] max-h-125 h-screen w-full aspect-video bg-slate-200 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56506.53295636403!2d85.25438924863278!3d27.727834300000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1915950f9d31%3A0xaf075cc9ad4db59c!2sKalika%20Construction!5e0!3m2!1sen!2snp!4v1763381512376!5m2!1sen!2snp"
            width="600"
            height="500"
            className=" w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
