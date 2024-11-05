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
                <div className="max-h-[80px]">
                  <p className="p-contents">{title}</p>
                </div>
                <div>
                  <p className="date-contents">{description}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
    </>
  );
}
