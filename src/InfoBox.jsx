import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=679&auto=format&fit=crop";
  const COLD_URL =
    "https://images.unsplash.com/photo-1641672222794-536ad524a929?q=80&w=735&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=735&auto=format&fit=crop";

  const getIcon = () => {
    if (info.weather === 0) return <WbSunnyIcon />;
    if (info.weather >= 51 && info.weather <= 67) return <ThunderstormIcon />;
    if (info.temp < 10) return <AcUnitIcon />;
    return <WbSunnyIcon />;
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.temp > 20 ? HOT_URL : COLD_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {getIcon()}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} component="span">
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Wind Speed = {info.windspeed} km/h</p>
              <p>Weather Code = {info.weather}</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
