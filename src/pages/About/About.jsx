import aboutBanner from "../../../assets/AboutPageImg/banner-image.svg";
import Rectangle1 from "../../../assets/AboutPageImg/Rectangle1.png";
import Rectangle2 from "../../../assets/AboutPageImg/Rectangle2.png";
import Rectangle3 from "../../../assets/AboutPageImg/Rectangle3.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TextImageSection({ title, content, imageSrc }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          marginTop: "40px",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        <Typography
          sx={{
            maxWidth: { xs: "100", sm: "40%" },
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
            marginBottom: { xs: "10px", sm: "0" },
            marginRight: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px" },
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            {title}
          </Typography>
          {content}
        </Typography>

        <Box
          sx={{
            width: "150%",

            maxWidth: "100%",
            marginLeft: "0",
            marginTop: "20px",
          }}
        >
          <img
            src={imageSrc}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
            }}
            alt={title}
          />
        </Box>
      </Box>
    </>
  );
}
export default function About() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <img src={aboutBanner} alt="aboutBanner" style={{ width: "100%" }} />
      </Box>
      <Box sx={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px" },
            fontWeight: "600",
            marginBottom: "5px",
            textAlign: "center",
          }}
        >
          About Coral's
        </Typography>
        <Typography
          sx={{
            marginLeft: "20px",
            marginRight: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
          }}
        >
          Coral's designs, manufactures and markets hand-finished and
          contemporary jewelry made from high-quality materials at affordable
          prices. Coral's jewelry is sold in more than 100 countries on six
          continents through more than 7,700 points of sale, including more than
          2,600 concept stores.
        </Typography>
      </Box>

      <TextImageSection
        title=" Coral's Foundation"
        content=" Founded in 1982 and headquartered in Copenhagen, Denmark,  Coral's  employs more than 27,700 people worldwide of whom more than 14,000 are located in Thailand, where the Company manufactures its jewelry.  Coral's  is publicly listed on the Nasdaq Copenhagen stock exchange in Denmark. In 2017,  Coral's  total revenue was DKK 22.8 billion (approximately EUR 3.1 billion)."
        imageSrc={Rectangle1}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          marginTop: "40px",
          marginLeft: "15px",
          marginRight: "15px",
        }}
      >
        <Box
          sx={{
            width: "150%",
            maxWidth: "100%",
            marginLeft: "0",
            marginTop: "20px",
          }}
        >
          <img
            src={Rectangle2}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
            }}
          />
        </Box>
        <Typography
          sx={{
            maxWidth: { xs: "100", sm: "40%" },
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: "400",
            marginBottom: { xs: "10px", sm: "0" },

            marginLeft: { xs: "0", sm: "20px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "20px" },
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Coral's Newsletter
          </Typography>
          Manufactures and markets hand-finished and contemporary jewelry made
          from high-quality materials at affordable prices. Pandora jewelry is
          sold in more than 100 countries on six continents through more than
          7,700 points of sale, including more than 2,600 concept stores.
        </Typography>
      </Box>
      <TextImageSection
        title=" Coral's Foundation"
        content=" Founded in 1982 and headquartered in Copenhagen, Denmark,  Coral's  employs more than 27,700 people worldwide of whom more than 14,000 are located in Thailand, where the Company manufactures its jewelry.  Coral's  is publicly listed on the Nasdaq Copenhagen stock exchange in Denmark. In 2017,  Coral's  total revenue was DKK 22.8 billion (approximately EUR 3.1 billion)."
        imageSrc={Rectangle3}
      />
    </>
  );
}
