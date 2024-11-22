export default function VideoSection() {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden mx-auto max-w-4xl my-12">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="mt-2 d-flex justify-center mx-auto"
          width="600"
          height="300"
          src="https://www.youtube.com/embed/v3XlzU9ddnE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
