import React from "react";
import { Chip, Typography, Grid, Paper } from "@mui/material";
import { FaEdit } from "react-icons/fa";

const GridChip = ({ data = [], onEdit }) => {
  // Group data alphabetically by the first letter
  const groupedData = data.reduce((acc, item) => {
    const firstLetter = item[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  // Get sorted letters
  const letters = Object.keys(groupedData).sort();

  return (
    <Grid container columnSpacing={3} rowSpacing={3} sx={{ width: "100%", margin: "0 auto" }}>
      {letters.map((letter) => (
        <Grid key={letter}>
          <Paper
            sx={{
              padding: 2,
              textAlign: "center",
              boxShadow: 2,
              borderRadius: 2,
              backgroundColor: "#ff9800",
              color: "#000000",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              height: "100%",
            }}
          >
            {/* Letter Header */}
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              {letter}
            </Typography>

            {/* Chips for Each Letter */}
            <Grid container spacing={1} direction="column" sx={{ flexGrow: 1 }}>
              {groupedData[letter].map((item, index) => (
                <Grid key={index}>
                  <Chip
                    label={item}
                    onDelete={() => onEdit && onEdit(item)} // Trigger edit callback
                    deleteIcon={<FaEdit />}
                    sx={{
                      fontSize: "14px",
                      padding: "10px 18px",
                      backgroundColor: "#2A959C",
                      color: "#ffffff",
                      borderRadius: "25px",
                      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      "& .MuiChip-deleteIcon": {
                        color: "#ffffff",
                        fontSize: "18px",
                        "&:hover": { color: "#ccc" },
                      },
                      "&:hover": {
                        backgroundColor: "darkblue",
                        cursor: "pointer",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridChip;