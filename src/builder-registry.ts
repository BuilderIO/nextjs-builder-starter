"use client";
import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
        required: true,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(async () => (await import("./components/Card/Card")).Card),
  {
    name: "Card",
    inputs: [
      {
        name: "buttonText",
        type: "string",
        required: true,
      },
      {
        name: "description",
        type: "string",
        required: true,
      },
      {
        name: "imgSrc",
        type: "string",
        required: true,
      },
      {
        name: "title",
        type: "string",
        required: true,
      },
    ],
  }
);
