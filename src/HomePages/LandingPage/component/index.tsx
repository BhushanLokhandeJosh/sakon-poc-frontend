import "./styles/styles.css";
//@ts-ignore
import videoBg from "../../../assets/videoBg.mp4";
import botImage from "../../../assets/images/voicebot.jpg";
import { Grid } from "@mui/material";

const Landingpage = () => {
  return (
    <div>
      <div className="landingpage">
        <video src={videoBg} autoPlay muted loop className="video-bg" />
      </div>
      <Grid
        container
        columnSpacing={2}
        sx={{
          border: "1px solid black",
          padding: "1rem",
        }}
      >
        <Grid item xs={6}>
          <img
            src={botImage}
            alt="Can't Load"
            style={{
              width: "95%",
              height: "80vh",
              textAlign: "center",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            color: "black",
          }}
        >
          <div className="bot-description">
            <h1>BOT POC</h1>
            <div className="bot-details">
              The File Validation and SFTP Upload Bot is an intelligent
              automation tool designed to streamline the process of downloading
              files, performing validation checks, and securely uploading them
              to an SFTP (SSH File Transfer Protocol) server. This versatile bot
              combines the power of data validation and secure file transfer,
              enabling efficient and reliable file management.
            </div>
            <div className="bot-features">
              <h3>KEY FEATURES</h3>
              <ul>
                <li>File Download</li>
                <li>Validation Checks</li>
                <li>Secure SFTP Upload</li>
                <li>Logging and Reporting</li>
                <li>Error Handling</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landingpage;
