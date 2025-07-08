import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import HomeBanner from "@/components/ui/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <Container className="">
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
    </Container>
  );
}
