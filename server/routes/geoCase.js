import express from "express";

import { getGeoCases, createGeoCase } from "../controllers/geoCase.js";

const router = express.Router();

router.get("/", getGeoCases);
router.post("/", createGeoCase);

export default router;
