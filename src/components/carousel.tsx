import { htmlClass } from "@/utils";
import { FC, useEffect, useRef, useState } from "react";
import "./carousel.css";
interface CarouselProps {
  centered?: boolean;
  elemCount: number;
  autoPlay?: boolean;
  autoPlayDurationMs?: number;
  className?: string;
  children?: React.ReactNode;
  bullets?: boolean;
  renderBullet?: (
    index: number,
    className: string,
    onClick: () => void
  ) => JSX.Element;
}

export const Carousel: FC<CarouselProps> = ({
  centered,
  className,
  autoPlay,
  autoPlayDurationMs,
  children,
  elemCount,
  bullets,
  renderBullet,
}) => {
  const [i, setI] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay || !elemCount) return;
    const timeout = setTimeout(() => {
      let newI = i === elemCount ? 0 : i + 1;
      const containerNode = containerRef.current?.getBoundingClientRect();
      const nextChildNode =
        containerRef.current?.children[0].children[
          newI
        ]?.getBoundingClientRect();

      if (!containerNode || !nextChildNode) return;

      const isFullyInView =
        nextChildNode.left > containerNode.left &&
        nextChildNode.right < containerNode.right;

      if (isFullyInView) {
        while (newI < elemCount) {
          const nextChildNode =
            containerRef.current?.children[0].children[
              newI
            ]?.getBoundingClientRect();
          if (!nextChildNode) return;
          const isFullyInView =
            nextChildNode.left > containerNode.left &&
            nextChildNode.right < containerNode.right;
          if (!isFullyInView) break;
          newI++;
        }
      }

      setI(newI === elemCount ? 0 : i + 1);
    }, autoPlayDurationMs ?? 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [autoPlay, autoPlayDurationMs, elemCount, i]);

  return (
    <div
      onScroll={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      ref={containerRef}
      className={htmlClass(className ?? "", "!overflow-x-clip carousel")}
    >
      <div
        className="grid gap-4 px-4 transition-transform duration-700"
        style={{
          gridTemplateColumns: `repeat(${elemCount}, ${
            centered ? "100%" : "132px"
          })`,
          transform: centered
            ? `translateX(-${i * 100}%)`
            : `translateX(-${i * 132 + i * 16}px)`,
        }}
      >
        {children}
      </div>
      {bullets && (
        <div className="carousel-pagination">
          {new Array(elemCount).fill(0).map((_, index) => {
            const className = `carousel-pagination-bullet ${
              index === i ? "carousel-pagination-bullet-active" : ""
            }`;
            return renderBullet ? (
              renderBullet(index, className, () => {
                setI(index);
              })
            ) : (
              <div
                key={index}
                className={className}
                onClick={() => setI(index)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};
