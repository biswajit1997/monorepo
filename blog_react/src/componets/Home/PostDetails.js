import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Jumbotron, Button, Container } from "reactstrap";
import axios from "axios";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const PostDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  //   console.log(details.id);
  useEffect(() => {
    axios
      .post("https://devawstest.in.net/api/comments", { id })
      .then(function (response) {
        setDetails(response.data);
        // console.log(details[0]);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  }, []);

  const [data, setdata] = useState("");
  //   console.log(data.id);
  useEffect(() => {
    axios
      .post("https://devawstest.in.net/api/postdetails", { id })
      .then(function (response) {
        setdata(response.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  }, []);
  let username = localStorage.getItem("name");
  const [saveData, setSaveData] = useState({
    post_id: { id },
    username,
    comment: "",
    title: "",
    user_id: "",
  });
  console.log(saveData);
  const onComment = (e) => {
    e.preventDefault();
    setSaveData({ ...saveData, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    let id = localStorage.getItem("id");
    let title = data.title;
    setSaveData({ ...saveData, title: title });
    setSaveData({ ...saveData, user_id: id });

    axios
      .post("https://devawstest.in.net/api/comment", {
        saveData,
      })
      .then((response) => {
        // console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div>
      <div className="">
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="#">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/home">Posts</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Post Details</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Jumbotron className=" bg-white">
        <div className="text-center">
          <h3>
            <b>Post Details</b>
          </h3>
        </div>
        <div className="mt-5">
          <h5>
            <b>Title : </b>
            {data.title}
          </h5>
        </div>
        <div className="mt-5">
          <h5>
            <b>Description : </b>
            <p className="mt-3">{data.description}</p>
          </h5>
        </div>
        <div className="mt-5">
          <h5>
            <b>Tags : </b>
            {data.tags_id}
          </h5>
        </div>

        <div className="mt-3">
          <label>Comment :</label>
          <textarea
            name="comment"
            onChange={onComment}
            className="form-control"
          ></textarea>
          <Button
            onClick={onSave}
            type="submit"
            className="btn btn-success mt-3"
          >
            Comment
          </Button>
        </div>
        <div className="mt-5">
          <h5>
            <b>Comments :</b>
          </h5>
          <div
            className="border"
            style={{ height: "200px", overflow: "scroll" }}
          >
            <div className="ml-2">
              {details.length > 0
                ? details.map((p, index) => {
                    let date = p.created_at;
                    var res = date.split("T", 1);
                    return (
                      <>
                        <Container>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="row">
                                <p>
                                  {p.user_name} : <b>{p.comment}</b>{" "}
                                </p>
                                <p></p>
                              </div>
                            </div>

                            <div className="text-right col-sm-6">{res}</div>
                          </div>
                        </Container>
                      </>
                    );
                  })
                : []}
            </div>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default PostDetails;
