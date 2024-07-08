export const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "CHF", symbol: "CHF", name: "Swiss Franc" },
  { code: "CNY", symbol: "¥", name: "Chinese Yuan" },
  { code: "SEK", symbol: "kr", name: "Swedish Krona" },
  { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
  { code: "MXN", symbol: "$", name: "Mexican Peso" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
  { code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
  { code: "NOK", symbol: "kr", name: "Norwegian Krone" },
  { code: "KRW", symbol: "₩", name: "South Korean Won" },
  { code: "TRY", symbol: "₺", name: "Turkish Lira" },
  { code: "RUB", symbol: "₽", name: "Russian Ruble" },
  { code: "BRL", symbol: "R$", name: "Brazilian Real" },
  { code: "ZAR", symbol: "R", name: "South African Rand" },
];

export function calculateTotal(
  subtotal,
  discount,
  isPercentageDiscount,
  tax,
  isPercentageTax,
  shipping,
  isPercentageShipping
) {
  // Calculate discount
  let discountAmount;
  if (isPercentageDiscount) {
    discountAmount = subtotal * (discount / 100);
  } else {
    discountAmount = discount;
  }
  const discountedSubtotal = subtotal - discountAmount;

  // Calculate tax
  let taxAmount;
  if (isPercentageTax) {
    taxAmount = discountedSubtotal * (tax / 100);
  } else {
    taxAmount = tax;
  }

  // Calculate shipping
  let shippingAmount;
  if (isPercentageShipping) {
    shippingAmount = discountedSubtotal * (shipping / 100);
  } else {
    shippingAmount = shipping;
  }

  // Calculate total
  const total = discountedSubtotal + taxAmount + shippingAmount;

  return {
    subtotal: Number(subtotal || 0).toFixed(2),
    discountAmount: Number(discountAmount || 0).toFixed(2),
    discountedSubtotal: Number(discountedSubtotal || 0).toFixed(2),
    taxAmount: Number(taxAmount || 0).toFixed(2),
    shippingAmount: Number(shippingAmount || 0).toFixed(2),
    total: Number(total || 0).toFixed(2),
  };
}

export function formatNumber(num) {
  const isNegative = num < 0;
  num = Math.abs(num); // Work with the absolute value for formatting

  let formattedNumber;

  if (num >= 1e9) {
    formattedNumber = (num / 1e9).toFixed(2) + "B"; // Billion
  } else if (num >= 1e6) {
    formattedNumber = (num / 1e6).toFixed(2) + "M"; // Million
  } else if (num >= 1e3) {
    formattedNumber = (num / 1e3).toFixed(2) + "k"; // Thousand
  } else {
    formattedNumber = num.toFixed(2); // Less than a thousand
  }

  return isNegative ? "-" + formattedNumber : formattedNumber;
}
