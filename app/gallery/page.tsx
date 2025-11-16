import Gallery_card from "@/components/cards/Gallery_card";

const page = () => {
  return (
    <div className="w-full flex justify-center py-12 bg-white">
      <div className="max-w-[1280px] w-full h-screen overflow-x-hidden overflow-y-auto px-8 py-4 flex flex-wrap items-start justify-between gap-4">
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
        <Gallery_card />
      </div>
    </div>
  );
};

export default page;
