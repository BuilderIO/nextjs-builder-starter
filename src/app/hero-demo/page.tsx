import { RenderBuilderSection } from "@/components/builder-section";
import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page() {
  const content = await builder
    .get('hero-section', {
      prerender: false,
    })
    .toPromise();

  return (
    <main className="min-h-screen">
      <h1 className="py-20 text-3xl text-center text-teal-500">
        Hero demo page
      </h1>
      <RenderBuilderSection content={content} />
    </main>
  );
}