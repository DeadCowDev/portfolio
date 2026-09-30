"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useContactModal } from "@/components/contact-modal/context";

export default function Contact({ params }: { params: { lang: string } }) {
  const router = useRouter();
  const { setOpen } = useContactModal();

  useEffect(() => {
    setOpen(true);
    router.replace(`/${params.lang}`);
  }, [router, params.lang, setOpen]);

  return null;
}
