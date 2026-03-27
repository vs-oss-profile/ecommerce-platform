export function formatINR(price) {
  const hasDecimals = price % 100 !== 0;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(price / 100);
}

export const BACKEND_BASE_URL = "http://localhost:3001";

export const getPublicImageUrl = (imgname) =>
  imgname !== "" ? `${BACKEND_BASE_URL}/public/${imgname}` : null;
