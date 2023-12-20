"use client";
import Loading from "@/components/Loading";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component={"nav"} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => setIsLoading(!isLoading)}
          >
            Podcaster
          </Typography>
          {isLoading ? <Loading /> : null}
          <Link hidden={pathname === "/"} href="/">
            home
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
