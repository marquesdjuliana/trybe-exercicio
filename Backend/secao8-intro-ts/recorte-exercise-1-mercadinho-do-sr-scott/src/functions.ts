import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export function first<Type>(array: Type[]): Type {
  return array[0];
}

export function updateItem<Type>(arr: Type[], index: number, newItem: Type): Type[] {
  if (index < 0 || index >= arr.length) {
    return arr;
  }
  const updatedArray = [...arr];
  updatedArray[index] = newItem;
  return updatedArray;
}

export function buildCartItem(item: Drink | Food, quantity: number): CartItem {
  return { name: item.name, price: item.price, quantity } as CartItem;
}
