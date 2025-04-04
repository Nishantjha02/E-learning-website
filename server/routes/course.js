import express from "express";
import { checkout, fetchLecture, fetchLectures, getAllCourses, getMycourses, getSingleCoure, paymentverification } from "../controllers/course.js";
import {isAuth} from '../middlewares/isAuth.js';

const router=express.Router();

router.get("/course/all",getAllCourses);

router.get("/course/:id",getSingleCoure);

router.get("/lectures/:id",isAuth,fetchLectures);

router.get("/lecture/:id",isAuth, fetchLecture);

router.get("/mycourse",isAuth,getMycourses);

router.post('/course/checkout/:id',isAuth,checkout);

router.post("/verification/:id",isAuth,paymentverification);

export default router;
