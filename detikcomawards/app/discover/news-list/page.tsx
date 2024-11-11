"use client";

import { useEffect, useState } from "react";
import CardList from "@/components/card-list/card-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function sectionNewsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data.slice(0, 9));
    }
    fetchData();
  }, []);

  type products = {
    id: number;
    image: number;
    title: string;
    description: string;
  };

  return (
    <>
      <div className="bg-[#050012]">
        <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-[20px] pb-[10px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 grid items-center">
              <Tabs defaultValue="news" className="w-full items-center">
                <div className="flex w-full">
                  <TabsList className="mx-auto md:max-w-[320px] bg-gradient-to-r from-[#323232] to-[#000000] rounded-[12px] h-auto p-0">
                    <TabsTrigger value="news" className="hs-tab-active:bg-[#ffffff33] hs-tab-active:text-white hs-tab-active:font-semibold py-1 px-4 inline-flex items-center gap-2 bg-transparent text-[14px] font-semibold text-center text-gray-500 rounded-[12px] hover:text-[#80849f] dark:hover:text-gray-400 w-1/3 justify-center">News</TabsTrigger>
                    <TabsTrigger value="photo" className="hs-tab-active:bg-[#ffffff33] hs-tab-active:text-white hs-tab-active:font-semibold py-1 px-4 inline-flex items-center gap-2 bg-transparent text-[14px] font-semibold text-center text-gray-500 rounded-[12px] hover:text-[#80849f] dark:hover:text-gray-400 w-1/3 justify-center">Photo</TabsTrigger>
                    <TabsTrigger value="video" className="hs-tab-active:bg-[#ffffff33] hs-tab-active:text-white hs-tab-active:font-semibold py-1 px-4 inline-flex items-center gap-2 bg-transparent text-[14px] font-semibold text-center text-gray-500 rounded-[12px] hover:text-[#80849f] dark:hover:text-gray-400 w-1/3 justify-center">Video</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="news" className="mt-10">
                  <div className="grid grid-cols-12 gap-4">
                    {products.map((product) => (
                      <CardList
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="photo" className="mt-10">
                  <div className="grid grid-cols-12 gap-4">
                    {products.map((product) => (
                      <CardList
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                      />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="video" className="mt-10">
                  <div className="grid grid-cols-12 gap-4">
                    {products.map((product) => (
                      <CardList
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
