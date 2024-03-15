import { cookies } from "next/headers";

export function getLink() {
  const instance = "https://voyager.lemmy.ml/"
  const instance1 = "https://lemmy.today/"
  const cookieStore = cookies();
  const url = cookieStore.get("url");
  return (url ? url : instance) + "api/v3/";
}
