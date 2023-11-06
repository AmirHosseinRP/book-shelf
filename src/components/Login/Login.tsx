"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        onChange={e => setUserName(e.target.value)}
        size="small"
      />
      <Link href={`/${userName}`} className="w-full">
        <Button variant="outlined" className="w-full">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Login;
