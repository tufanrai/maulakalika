"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SearchSchema from "../schema/Search.schema";
import { ISearch } from "../interface/interfaces";

interface IProps {
  title: string;
  description: string;
}

const SearchAndFilterCard = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(SearchSchema),
  });

  const SearchFile = ({ name }: ISearch) => {
    console.log(name);
  };

  return (
    <div className="max-w-[1100px] w-full rounded-md shadow-lg/30 shadow-stone-400 p-12">
      <form
        onSubmit={handleSubmit(SearchFile)}
        className="w-full flex items-center justify-center"
      >
        <input
          type="search"
          placeholder="Find document..."
          {...register("name")}
          className="px-5 py-1 font-regural text-lg text-stone-600 outline-none border-[1px] border-primary w-full rounded-s-md"
        />
        <input
          type="submit"
          value="Search"
          className="bg-primary px-5 py-1 font-medium text-lg border-[1px] border-primary/70 text-neutral-100 rounded-e-md cursor-pointer ease duration-300 hover:bg-primary"
        />
      </form>
    </div>
  );
};

export default SearchAndFilterCard;
