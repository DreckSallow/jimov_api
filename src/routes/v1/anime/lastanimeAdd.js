import { Router } from "express";
import g from "../../../scraper/sites/anime/animeflv/getPageMain.js";
const r = Router();

r.get("/anime/last-anime", (req, res) => {
  g.getLastAdd().then((f) => {
    if (f) {
      res.send(f);
    } else {
      res.status(404).send({
        message: "Invalid path",
        code: 404,
      });
    }
  });
});

export default r;