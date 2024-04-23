import {Box, CircularProgress} from "@mui/material";

export const PageLoader = () => {
  return  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
    <CircularProgress size={100} />
  </Box>
}
