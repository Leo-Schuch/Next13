export default function page() {
  const blogContent = [
    {
      title: "M2 Macbook air",
      thumbmail:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
      description: "with new camera, new colors is a powerfull laptop",
    },
    {
      title: "Samsung s22 plus",
      thumbmail:
        "https://m.media-amazon.com/images/I/61DBi3K5GkL._AC_SX466_.jpg",
      description: "with new camera, new colors is a powerfull laptop",
    },
    {
      title: "Iphone 13",
      thumbmail:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MM2Y3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1630507733000",
      description: "with new camera, new colors is a powerfull laptop",
    },
  ];
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-xl">
      <main className="flex flex-col min-h-screen place-content-center w-full max-w-3xl">
        <section className="flex flex-col gap-6">
          {blogContent &&
            blogContent.map((blog, i) => (
              <article
                key={i}
                className="grid grid-cols-1 lg:grid-cols-3 bg-light-grey rounded-md space-y-4 p-10 shadow-sm hover:shadow-md transition cursor-pointer "
              >
                <div className="h-40 w-40 bg-slate-200 rounded-md overflow-hidden">
                  <img
                    src={blog?.thumbmail}
                    alt={blog?.title}
                    className="h-full w-full"
                    // fill={true}
                    width={500}
                    height={500}
                    // blurDataURL="data:..."
                    placeholder="blur"
                  />
                </div>
                <div className="lg:col-span-2 space-y-5">
                  <h1 className="text-4xl font-bold">{blog?.title}</h1>
                  <p className="text-gray-600 text-normal">
                    {blog?.description}
                  </p>
                </div>
              </article>
            ))}
        </section>
      </main>
    </div>
  );
}
