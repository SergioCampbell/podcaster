"use client";
import Loading from "@/components/Loading";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  isloading: boolean;
}
export const Navbar = ({ isloading }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="inherit" component={"nav"} position="static">
        <Toolbar>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            component="text"
            color={"primary"}
            sx={{ flexGrow: 1 }}
          >
            Podcaster
          </Typography>
          {isloading ? <Loading /> : null}
          <Link hidden={pathname === "/"} href="/">
            home
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
