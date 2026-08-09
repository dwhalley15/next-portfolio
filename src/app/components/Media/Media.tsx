import "./Media.css";

export interface MediaProps {
  title: string | null;
  items: MediaItem[];
}
export interface MediaItem {
  caption: string | null;
  url: string | null;
  type: "img" | "video";
  title: string | null;
}

export default function Media({ title, items }: MediaProps) {
  return (
    <section className="media">
      <h2 className="media-title">{title}</h2>
      <div className="media-items">
        {items.map((item, index) => (
          <div key={index} className="media-item">
            <div className="media-header">
              <span>
                {item.type}_{String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.title}</span>
            </div>
            <div className="media-container">
              {item.type === "img" ? (
                <img
                  src={item.url || ""}
                  alt={item.caption || ""}
                  className="media-image"
                  aria-label={item.caption || ""}
                  loading="lazy"
                />
              ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${item?.url}?rel=0&modestbranding=1`}
                    className="media-video"
                    title={item.title || `video_${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                    allowFullScreen
                    loading="lazy"
                  />
              )}
            </div>
            <p className="media-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
