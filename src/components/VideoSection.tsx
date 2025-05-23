export default function VideoSection({link}: {link:string}) {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden mx-auto max-w-4xl my-6 md:my-12">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="mt-2 d-flex justify-center mx-auto"
          width="600"
          height="300"
          src={link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
