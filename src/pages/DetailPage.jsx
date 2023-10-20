import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImageURL, options } from "../constans/apiConstans";
import Loading from "../components/Loading";
import Badget from "../components/Badget";

const DetailPage = () => {
  const { movie_id } = useParams();

  const [detail, setDetail] = useState(null);
  useEffect(() => {
    axios
      .get(`/movie/${movie_id}`, options)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err));
  }, []);

  const sum = detail?.revenue - detail?.budget;

  if (!detail) return <Loading />;
  return (
    <div className="movie-detail row p-4">
      <div className="col-md-4 d-flex align-items-center justify-content-center ">
        <div className="position-relative ">
          <img
            className="img-fluid rounded "
            src={baseImageURL.concat(detail.poster_path)}
            alt=""
          />
          <span className=" vote bg-warning rounded shadow position-absolute ">
            {detail.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="col-md-8">
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className="row">
          <div className="col-6 col-md-12">
            <p>Maliyet: {detail.budget}$</p>
            <p>Hasılat: {detail.revenue}$</p>
            <p>Kar: {sum}$</p>
          </div>
          <div className="col-6 col-md-12">
           <Badget barTitle={'Kategoriler'} badgetTitle={detail.genres}/>

           <Badget barTitle={'Diller'} badgetTitle={detail.spoken_languages}/>

           <Badget barTitle={'Yapımcı Şirketler'} badgetTitle={detail.spoken_languages}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
