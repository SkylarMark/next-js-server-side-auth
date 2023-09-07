"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const { replace } = useRouter();

  const onClick = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "prayag" }),
    };

    const response = await fetch("/api/login", requestOptions);
    const data = await response.json();
    localStorage.setItem("token", data.token);
    replace("/");
  };

  return <button onClick={onClick}> Sign In </button>;
}
