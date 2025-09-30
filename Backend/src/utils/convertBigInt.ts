// utils/convertBigInt.ts
export const convertBigIntToString = (obj: any): any => {
  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString)
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, convertBigIntToString(value)])
    )
  } else if (typeof obj === "bigint") {
    return obj.toString() // o Number(obj) si querés number
  }
  return obj
}
