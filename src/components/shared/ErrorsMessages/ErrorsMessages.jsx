import { Alert } from "@mui/material"
import Box from "@mui/material/Box"


export const ErrorMessages = ({ errors }) => {

    if (!errors || errors.length === 0) {
        return null;
    }
    return (
        <>
            <Alert severity="error" sx={{ marginBottom: '10px', width: '100%' }}>
                <Box component="ul" sx={{ padding: 0, margin: 0 }}>
                    {
                        errors.map((error, index) => <li key={index}>{error}</li>)
                    }
                </Box>

            </Alert>

        </>
    )
}