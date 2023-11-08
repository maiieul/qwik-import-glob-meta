import {
  type Component,
  component$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";

const components = import.meta.glob("/src/components/*", {
  import: "default",
});

export default component$<{ name: string }>(({ name }) => {
  const Component = useSignal<Component<any>>();

  useTask$(async () => {
    Component.value = (await components[
      `/src/components/${name}.tsx`
    ]()) as Component<any>;
  });

  return (
    <>
      <div>glob</div>
      {Component.value && <Component.value />}
    </>
  );
});
