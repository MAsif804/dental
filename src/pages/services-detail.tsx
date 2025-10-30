
import productsList from "@/data/products-list";
import { useMemo} from "react";
import { useParams } from "react-router-dom";
import Hero from "@/components/treatments/hero";
export default function ServicesDetailPage() {
  const { slug } = useParams();
  const product = useMemo(() => {
    return productsList.find((p) => p.slug === slug);
  }, [slug]);
  if (!product) {
    return (
      <div className="flex items-center justify-center p-[80px] h-[100vh]">
        Product not found.
      </div>
    );
  }

  return (
      <section className="z-0 w-full flex flex-col items-center overflow-hidden">
        <Hero />
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-12 mx-auto px-4 sm:px-6 md:px-10 lg:px-[88px] py-12 sm:py-16">
          {/* headeing */}
          <div className="w-full flex flex-col items-center gap-2">
            <h2 className="text-black font-Montagu text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight text-center">
              {product.title}
            </h2>
            <p className="text-black font-Poetsen text-base sm:text-lg md:text-xl text-center font-normal leading-relaxed">
              {product.description}
            </p>
          </div>
          {/* Details */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {product.images.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} - Image ${index + 1}`}
                className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover rounded-[12px] border border-[#036E64]"
              />
            ))}
          </div>
          <div className="w-full text-left md:text-justify leading-relaxed">{product.details}</div>
        </div>
      </section>
  );
}
