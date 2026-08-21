const YouTube = ({ id, title = 'YouTube video' }: { id: string; title?: string }) => (
  <div className="relative my-6 aspect-video w-full overflow-hidden rounded-lg">
    <iframe
      className="absolute inset-0 h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  </div>
)

export default YouTube
