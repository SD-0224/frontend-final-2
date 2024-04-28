import { Box, Container } from "@mui/material";
import UserImageUploader from "../components/user/components/UserImageUploader/UserImageUploader";

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
                <UserImageUploader />

            </Box>
        </Container>
    );
}