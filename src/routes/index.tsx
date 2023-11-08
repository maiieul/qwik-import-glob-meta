import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Glob from "~/components/glob";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <Glob name="example2" />
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
