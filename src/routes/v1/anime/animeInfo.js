import { Router } from "express";
import g from "../../../scraper/sites/anime/animeflv/getAnimeInfo.js.js";
const r = Router();

r.get("/anime/:name", (req, res) => {
  g.animeInfo(req.params.name).then((f) => {
    if (f) {
      res.send(f);
    } else {
      res.status(404).send({
        message: "Invalid path",
        code: 404
      });
    }
  });
});

export default r;
