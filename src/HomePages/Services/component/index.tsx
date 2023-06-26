import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import JioImage from "../../../assets/images/Jio.jpg";
import ViImage from "../../../assets/images/Vi.png";
import AirtelImage from "../../../assets/images/airtel.jpg";
import UninorImage from "../../../assets/images/uninor.webp";
import VerizoneImage from "../../../assets/images/verizon.jpg";
import BsnlImage from "../../../assets/images/bsnl.avif";

let ServicesMenu = [
  {
    image: JioImage,
    title: "Jio",
    heading: "Jio",
    information:
      "Reliance Jio Infocomm Limited, doing business as Jio, is an Indian telecommunications company and a subsidiary of Jio Platforms, headquartered in Navi Mumbai, Maharashtra, India. It operates a national LTE network with coverage across all 22 telecom circles.",
  },
  {
    image: ViImage,
    title: "Vi",
    heading: "VI",
    information:
      "Vodafone Idea or Vi (stylised as V!) is an Indian mobile network operator with its headquarters based in Mumbai and Gandhinagar.[12][13] It is an all-India integrated GSM operator offering 2G, 3G, 4G, LTEA, Voice Over LTE, and VoWiFi service",
  },
  {
    image: AirtelImage,
    title: "Airtel",
    heading: "AIRTEL",
    information:
      "Bharti Airtel Limited, commonly known as (d/b/a) Airtel, is an Indian multinational telecommunications services company based in New Delhi. It operates in 18 countries across South Asia and Africa, as well as the Channel Islands.",
  },
  {
    image: UninorImage,
    title: "Telenor",
    heading: "TELENOR",
    information:
      "Telenor (India) Communications Private Limited, formerly known as Uninor, was an Indian mobile network operator. The company was a wholly owned subsidiary of Norwegian telecommunications company Telenor Group.",
  },
  {
    image: VerizoneImage,
    title: "verizone Image",
    heading: "VERIZONE ",
    information:
      "Verizon Communications Inc., commonly known as Verizon (/vəˈraɪzən/), is a multinational telecommunications conglomerate and a corporate component of the Dow Jones Industrial Average.",
  },
  {
    image: BsnlImage,
    title: "Bsnl Image",
    heading: "BSNL LTD",
    information:
      "Bharat Sanchar Nigam Limited (d/b/a BSNL) is a central public sector undertaking headquartered in New Delhi, India. It is under the ownership of the Department of Telecommunications, Ministry of Communications. ",
  },
];

const Services = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "4rem",
          padding: "2rem 0",
          background: "linear-gradient(to right top, #ee9ca7, #ffdde1)",
          color: "#fefefe",
          transform: "0.5s ease-in",
          "&:hover": {
            color: "#f0e0e0",
          },
        }}
      >
        OUR SERVICES
      </Box>
      <Grid
        container
        spacing={10}
        sx={{
          marginTop: "0.125rem",
          paddingTop: "2rem",
          background:
            "linear-gradient(to right bottom, #ef768e ,#ffedbc,#ffffff)",
        }}
      >
        {ServicesMenu.map((item) => {
          return (
            <Grid
              sm={12}
              md={6}
              lg={4}
              sx={{
                marginBottom: "2rem",
              }}
            >
              <Card
                sx={{
                  maxWidth: 405,
                  // marginTop: "10rem",
                  marginLeft: "10rem",
                  border: "3px solid white",
                  borderRadius: "5px",
                  borderBottomRightRadius: "5rem 2.5rem",
                }}
              >
                <CardMedia sx={{ height: 350 }} image={item.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.heading}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.information}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
