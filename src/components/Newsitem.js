import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill btn-read">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://t4.ftcdn.net/jpg/05/77/93/31/360_F_577933182_HG2bJO5rvKYKjFS6xJeVLbcaokhVoamh.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body m-2 ">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {!author ? "unknown" : author} On{" "}
              {new Date(date).toGMTString()} {/* to show exact time */}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-read"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
