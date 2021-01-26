import express from "express";
import mongoose from "mongoose";

import geoCase from "../models/geoCase.js";

const router = express.Router();

export const getGeoCases = async (req, res) => {
  try {
    const geoCases = await geoCase.find();

    res.status(200).json(geoCases);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

export const createGeoCase = async (req, res) => {
  const padle = req.body;
  console.log(padle);

  const newGeoCase = new geoCase({
    ...padle,
    createdAt: new Date().toISOString(),
  });

  try {
    await newGeoCase.save();

    res.status(201).json(newGeoCase);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export default router;
