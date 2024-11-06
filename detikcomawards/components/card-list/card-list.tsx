"use client";

import React from "react";

export default function CardList({ title, description, image }) {
  return (
    <>
        <div className="card-contents">
          <a href="{clickurl}">
            <div className="wrap-contents">
              <div className="h-[180px]">
                <img
                  className="img-contents"
                  src={image}
                  alt="Image Description"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="h-[55px]">
                  <p className="p-contents line-clamp-2">{title}</p>
                </div>
                <div>
                  <p className="date-contents line-clamp-3">{description}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
    </>
  );
}
