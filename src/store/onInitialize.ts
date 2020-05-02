import { OnInitialize } from "overmind";

/**
 * Put onInitialize config here
 */

export const onInitialize: OnInitialize = async ({ effects, state }) => {
  if (typeof window === "undefined") {
    return;
  }

  // get stored data:
  (() => {
    const storedData = window.localStorage.getItem("someData");

    if (!storedData) {
      return;
    }

    /* Do something with stored data... (upload store state for exemple) */
  })();
};
