"use client";

import { useRouter } from "next/navigation";

export default function DefaultPage() {
  const { replace } = useRouter();

  const onClick = async () => {
    await fetch("/api/logout");
    replace("/auth/login");
  };

  const onFetch = async () => {
    try {
      await fetch("/api/check");
    } catch (e) {
      // We concider this a 401
      await fetch("/api/logout");
    }
  };

  return (
    <div>
      <div>Default Page</div>
      <button onClick={onClick}> Logout </button>
      <button onClick={onFetch}> Fetch API </button>
    </div>
  );
}
