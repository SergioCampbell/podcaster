"use client";
import Loading from "@/components/Loading";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

interface NavbarProps {
  isloading: boolean;
}
export const Navbar = ({ isloading }: NavbarProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        component={"nav"}
        data-testid="navbar"
        position="static"
      >
        <Toolbar>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color={"primary"}
            sx={{ flexGrow: 1 }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              Podcaster
            </Link>
          </Typography>
          {isloading ? <Loading /> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
