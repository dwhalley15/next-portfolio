import "./Quote.css";

export interface QuoteProps {
    quote: string | null;
}

export default function Quote({ quote }: QuoteProps) {
  return (
    <blockquote className="quote">
      {quote}
    </blockquote>
  );
}