import { builder, BuilderContent } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page() {
  const testimonials = await builder.getAll("testimonial", { prerender: false });
  return (
    <main className="min-h-screen">
      <h1 className="py-20 text-3xl text-center text-teal-500">
        Testimonial page
      </h1>
      <ul className="carousel gap-6 mx-8">
        {testimonials?.map(({ data, id }: BuilderContent) => (
          <li key={id} className="carousel-item">
            <article className="card card-side bg-base-100 max-w-screen-md max-h-96 shadow-xl">
              <figure className="max-w-sm">
                <img width="420" height="420"
                  className="object-cover w-full h-full"
                  src={data!.personImage}
                  alt={data!.personName} />
              </figure>
              <div className="card-body max-w-xs">
                <h2 className="text-xl">{data!.personName}</h2>
                <p className="line-clamp-[12]">{data!.content}</p>
              </div>
            </article>
          </li>))}
      </ul>
    </main>
  );
}