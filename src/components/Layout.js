import { Box } from "@mui/system";

export default function Layout({ children }) {
  return (
    <div>
      {/* app bar */}

      {/* side drawer */}
      
      <Box
        sx={{
          background: '#f9f9f9',
          width: '100%'
        }}>
        {children}
      </Box>
    </div>
  )
}
