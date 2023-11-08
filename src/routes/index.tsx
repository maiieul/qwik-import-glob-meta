import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Glob from "~/components/glob";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      This
      {
        '<Glob name="example1" /> tag uses import.meta.glob to render the Example1 component: '
      }
      <br />
      <br />
      <Glob name="example1" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
