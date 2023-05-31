import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function getHashValue() {
  return window?.location.hash.slice(1) ?? "";
}

export function useHash() {
  const [hash, setHash] = useState(getHashValue());

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(getHashValue());
    });
    window.addEventListener("", () => {
      setHash(getHashValue());
    });
  }, []);

  return {
    hash,
    set: (h: string) => {
      window.location.hash = h;
    },
  };
}

export function useHashAsKV() {
  const { hash } = useHash();
  const [kv, setKv] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const hashKv = hash.split("&").reduce((acc, kv) => {
      const [key, value] = kv.split("=");
      return { ...acc, [key]: value };
    }, {});
    setKv(hashKv);
  }, [hash]);
  return kv;
}
