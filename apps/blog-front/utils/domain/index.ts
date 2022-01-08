import path from "path";

export const getUrl = (...paths:string[])=>{
  const domain = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BLOG_FRONT_DOMAIN : process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_BLOG_FRONT_DOMAIN;
  console.log({domain})
  const joinedPath = path.join(...[...paths]).replace('.','');
  const res = new URL(joinedPath,domain).href
  console.log({res})
  return res;
}