// App.tsx
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import {
    Handle,
    Position
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React from "react";
import type { WorkflowNodeData } from "../types/work-flow-data";

export const WorkflowNode: React.FC<{ data: WorkflowNodeData }> = ({ data }) => {
  const actionIcon =
    data.action === "Create" ? (
      <EditIcon sx={{ color: "#FF9800" }} />
    ) : data.action === "Review" ? (
      <VisibilityIcon sx={{ color: "#2196F3" }} />
    ) : (
      <CheckCircleIcon sx={{ color: "#4CAF50" }} />
    );

  const actionColor =
    data.action === "Create"
      ? "#FF9800"
      : data.action === "Review"
        ? "#2196F3"
        : "#4CAF50";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Avatar
        src={data.avatar}
        alt={data.name}
        sx={{ width: 56, height: 56, mb: 1, border: `2px solid ${actionColor}` }}
      />
      <Box sx={{ width: 2, height: 12, bgcolor: "grey.400", mb: -1 }} />
      <Card
        sx={{
          width: 240,
          borderRadius: 3,
          boxShadow: 5,
          p: 1.5,
          textAlign: "center",
          position: "relative",
          bgcolor: "#fff",
          borderTop: `4px solid ${actionColor}`,
        }}
      >
        <CardContent sx={{ p: 1 }}>
          {/* Action */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 1.5,
              gap: 1,
            }}
          >
            {actionIcon}
            <Typography
              variant="subtitle1"
              sx={{ color: actionColor, fontWeight: "bold" }}
            >
              {data.action}
            </Typography>
          </Box>

          {/* Name */}
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ mb: 0.5, color: "#333" }}
          >
            {data.name}
          </Typography>

          {/* Status */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 0.5 }}
          >
            {data.status}
          </Typography>

          {/* Date */}
          <Typography variant="caption" color="text.secondary" display="block">
            {data.date}
          </Typography>
        </CardContent>

        {/* Handles */}
        <Handle type="target" position={Position.Top} />
        <Handle type="source" position={Position.Bottom} />
      </Card>
      <Box sx={{ width: 2, height: 12, bgcolor: "grey.400", mt: -1 }} />
    </Box>
  );
};
