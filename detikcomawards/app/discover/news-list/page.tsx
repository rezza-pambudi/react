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

  type products = { id: number; image: number; title: string; description: string };

  return (
    <>
      <div className="bg-[#050012]">
        <div className="container max-w-[344px] sm:max-w-[640px] md:max-w-[820px] lg:max-w-[1020px] mx-auto pt-[20px] pb-[10px]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 grid items-center">
              <Tabs defaultValue="news" className="w-full items-center">
                <TabsList className="mx-auto">
                  <TabsTrigger value="news">News</TabsTrigger>
                  <TabsTrigger value="photo">Photo</TabsTrigger>
                  <TabsTrigger value="video">Video</TabsTrigger>
                </TabsList>
                <TabsContent value="news">
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
                <TabsContent value="photo">
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
                <TabsContent value="video">
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
