import React, { useEffect, useState } from "react";
import Link from "next/link";

export function useGetHomeInfo() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/home`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
        console.log("result de home", result);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);

  return { result, loading, error };
}
