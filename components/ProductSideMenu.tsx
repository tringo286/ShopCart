"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

const ProductSideMenu = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div
      className={cn("absolute top-2 right-2 hover:cursor-pointer", className)}
    >
      <div
        className={`p-2.5 rounded-full hover:bg-shop_dark_green/80 hover:text-white hoverEffect`}
      >
        <Heart size={15} />
      </div>
    </div>
  );
};

export default ProductSideMenu;
