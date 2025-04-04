import express from "express";
import { addLectures, createCource, deleteCourse, deleteLecture, getAllstats } from "../controllers/admin.js";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import { uploadFiles } from "../middlewares/multer.js";

const router=express.Router();

router.post('/course/new',isAuth ,isAdmin, uploadFiles,createCource);

router.post("/course/:id",isAuth,isAdmin,uploadFiles,addLectures);

router.delete("/lecture/:id",isAuth,isAdmin, deleteLecture);

router.delete("/lecture/:id",isAuth,isAdmin, deleteCourse);

router.get('/stats', isAdmin,isAuth,getAllstats);

export default router;
