"use client";

import React from "react";

export default function CardList({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          margin: 8px 0;
          box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
