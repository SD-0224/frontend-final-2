import { Box, Container } from "@mui/material";

export default function TestPage() {
    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "3rem",
                    margin: "7rem 0",
                }}
            >
                <h1>Test Page</h1>

            </Box>
        </Container>
    );
}