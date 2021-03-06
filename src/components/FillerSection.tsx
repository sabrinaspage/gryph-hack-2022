import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
// import TwoLeaf from "../images/leaf-02-03 1.png";

export const FillerSection = () => {
  const now = new Date();
  const dayOfWeek = now.toLocaleDateString("default", { weekday: "long" });
  const month = now.toLocaleDateString("default", { month: "long" });
  const cDate = `${dayOfWeek}, ${month} ${now.getDate()}, ${now.getFullYear()}`;

  const [cTime, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Grid item xs={12} md={8}>
      <Card
        sx={{
          pb: 13,
          minWidth: 275,
          borderRadius: 10,
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        }}
      >
        <CardContent>
          <Typography
            variant="h2"
            color="#F3694D"
            fontWeight="bold"
            component="div"
          >
            {cTime} EST
          </Typography>
          <Typography variant="h5" fontWeight="thin" color="#F3694D">
            {cDate}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
