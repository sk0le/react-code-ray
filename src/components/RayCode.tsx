import { useEffect } from "react";
import hljs from "highlight.js";
import "./rayCode.css";

interface CProps {
  code: string;
  title?: string;
  padding?: 16 | 32 | 64 | 128;
  className?: string;
  language: string;
}

export default function RayCode({
  code,
  title = "Untitled-1",
  padding,
  language,
  className,
}: CProps) {
  useEffect(() => {
    document.body.style.setProperty("--padding", `${padding ? padding : 64}px`);

    return () => {
      document.body.style.removeProperty("--padding");
    };
  }, [padding]);
  return (
    <div className={`ray-code ${className}`}>
      <div className="ray-code__inside">
        <div className="ray-code__header">
          <section>
            <div></div>
            <div></div>
            <div></div>
          </section>
          <div className="ray-code__header-title">
            <p>{title}</p>
          </div>
        </div>
        <pre>
          <code
            className="ray-code__code"
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(code, { language }).value,
            }}
          >
            {}
          </code>
        </pre>
      </div>
    </div>
  );
}
