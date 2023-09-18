export type Product = {
  id: number,
  name: string,
  price: number,
  quantity: number,
  brands: string[],
};

export default function insertProducts(listBrands: string[], product: Product): string {
  const allBrandsExist = product.brands.every((brand) => listBrands.includes(brand));
  
  if (allBrandsExist) {
    const formattedPrice = product.price.toFixed(2);
    return `${product.name} adicionado(a) com o preço de R$ ${formattedPrice}`;
  }

  return 'Seu produto contém marcas indisponíveis.';
}
