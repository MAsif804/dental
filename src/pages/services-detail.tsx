
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
      <section className=" z-0 w-full flex flex-col items-center   overflow-hidden">
        <Hero />
        <div className="w-full max-w-[1440px] flex flex-col p-[48px] items-center gap-[48px] mx-auto">
          {/* headeing */}
          <div className="w-ful flex flex-col items-center gap-[8px]">
            <h2 className="text-black font-Montagu text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-normal text-center">
              {product.title}
            </h2>
            <p className="text-black font-Poetsen text-[20px] text-center font-normal leading-normal">
              {product.description}
            </p>
          </div>
          {/* Details */}
          <div className="flex flex-col w-full lg:flex-row items-center justify-center gap-[24px] lg:gap-[40px] w-full">
          {product.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} - Image ${index + 1}`}
              className="w-full max-w-[391px] h-[430px] object-cover rounded-[12px] border border-[#036E64]"
            />
          ))}
        </div>
          <div className="flex items-start w-full">{product.details}</div>
        </div>
      </section>
  );
}
