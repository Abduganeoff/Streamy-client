import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// material components
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { logoutFn } from "../../services/authService";

const StreamAppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { mutate: logout } = useMutation(logoutFn, {
    onSuccess: () => {
      // remove userId from localstorage after logout
      localStorage.removeItem("userId");
      navigate("/");
    },
    onError: () => {
      console.log("error");
    },
  });

  const handleMenuOpen = (event: any) => {
    setIsMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleLogOut = () => {
    logout();
    handleMenuClose();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgba(30, 30, 30, 0.9)" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center">
            <img src="/assets/logo.png" alt="logo" width="45px" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/streams"
              sx={{
                mx: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Streamy
            </Typography>
          </Box>
          {pathname !== "/" && (
            <Box>
              {pathname === "/streams" && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 2 }}
                  onClick={() => navigate("/streams/new")}
                >
                  Create
                </Button>
              )}
              <Tooltip title="Log Out">
                <IconButton onClick={handleMenuOpen}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorEl={anchorEl}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <Typography textAlign="center" onClick={handleLogOut}>
                    Log out
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default StreamAppBar;
