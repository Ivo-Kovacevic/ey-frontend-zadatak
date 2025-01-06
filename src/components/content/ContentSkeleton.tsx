export default function ContentSkeleton() {
  return (
    <section className="w-full animate-pulse bg-gray-100 p-4">
      <div className="mx-auto my-16 h-16 w-1/2 rounded bg-gray-400"></div>

      {/* First Article (Cat) */}
      <div className="mx-auto py-10 flex max-w-screen-xl flex-col gap-6 md:flex-row">
        <div className="aspect-square w-full rounded-xl bg-gray-400 md:w-1/2"></div>

        <div className="flex w-full flex-col justify-between gap-4 md:w-2/3 md:gap-0">
          <div className="mx-auto h-12 w-1/4 rounded bg-gray-400 md:mx-0"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-1/2 rounded bg-gray-400"></div>
        </div>
      </div>

      <div className="mx-auto py-10 flex max-w-screen-xl flex-col gap-6 md:flex-row-reverse">
        <div className="aspect-square w-full rounded-xl bg-gray-400 md:w-1/2"></div>

        <div className="flex w-full flex-col justify-between gap-4 md:w-2/3 md:gap-0">
          <div className="mx-auto h-12 w-1/4 rounded bg-gray-400 md:mx-0"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-full rounded bg-gray-400"></div>
          <div className="h-8 w-1/2 rounded bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}
