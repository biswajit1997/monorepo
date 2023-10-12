import React, { useState, useEffect } from "react";
import { Container, Row, Col, CardHeader } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Multiselect } from "multiselect-react-dropdown";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";
// import Datapost from "./Datapost";

const Posts = (props) => {
  const { idd } = useParams();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [tagsData, setTagsData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);
  const [tag, setTag] = useState({ tagname: "" });
  const tagData = (e) => {
    setTag({ [e.target.name]: e.target.value });
  };
  const [option, setOption] = useState({});
  //post adddata
  const [post, setPost] = useState({
    title: "",
    user_id: localStorage.getItem("id"),
    description: "",
    image: "",
    option: "",
  });
  //filter api call

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .post(process.env.REACT_BACKEND_URL + "/filter", { idd })
      .then(function (response) {
        console.log(response.data);
        // setPostData(response.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  });

  const handleChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  // add tag api
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { response } = await axios.post(
        process.env.REACT_BACKEND_URL + "/addtag",
        tag
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const [tags, setTags] = useState([]);
  // console.log(tags);
  //get all tags
  useEffect(() => {
    axios
      .get(process.env.REACT_BACKEND_URL + "/addtag")
      .then(function (response) {
        // console.log(response.data);
        setTags(response.data);
      })
      .catch(function (error) {
        console.error(error.message);
      });
  }, []);
  const [paystatus, setPayStatus] = useState({});
  //add post api calling
  const onClick = (e) => {
    e.preventDefault();
    let id = localStorage.getItem("id");

    axios
      .post(process.env.REACT_BACKEND_URL + "/addpost", { post })
      .then(function (response) {
        console.log(response.data);
        window.location.reload();
      })
      .catch(function (error) {
        console.error(error.message);
      });
  };
  // console.log(tagsData);
  useEffect(() => {
    const fetch = () => {
      setLoading(true);
      axios
        .get(process.env.REACT_BACKEND_URL + "/addpost")
        .then(function (response) {
          // console.log(response.data);
          setPosts(response.data);
          setTagsData(response.data.tags);
          // console.log(posts);
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error.message);
        });
    };
    fetch();
  }, []);

  const [addPost, setAddPost] = useState(false);

  const Addpost = async () => {
    try {
      let id = localStorage.getItem("id");

      const { data } = await axios.post(process.env.REACT_BACKEND_URL + "/userpay", {
        id,
      });
      console.log("res", data);

      if (data == "deactive") {
        alert("please payment $10");
        history.push("/stripe");
      } else {
        setAddPost(!addPost);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // useEffect(() => {
  //   console.log("object");
  // });
  const [addTag, setAddTag] = useState(false);

  const Addtag = () => setAddTag(!addTag);

  const dataModel = () => {
    return tags.map((tag, index) => (
      <Link to={`/home/${tag.id}`}>
        <CardBody className=" border">{tag.tagname}</CardBody>
      </Link>
    ));
  };
  //pagination slice
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const datapost = () => {
    return currentPosts.map((post, index) => (
      <CardBody className=" border mb-3">
        <Link to={`/postDetails/${post.id}`}>
          <h4>{post.title}</h4>
          <p style={{ color: "#000" }}>{post.description}</p>
        </Link>
        <div>
          Tags : <a className="text-primary">{post.tags.tagname}</a>
        </div>
      </CardBody>
    ));
  };
  // console.log(currentPosts[0]);

  const onSelect = (selectedList, selectedItem) => {
    setPost({ ...post, option: selectedList });
    console.log(post);
  };

  const onRemove = (selectedList, removedItem) => {};
  return (
    <>
      <Container className="mt-4">
        <div className="row">
          <div className="col-4">
            <Card>
              <CardHeader>
                <div className="row">
                  <div className="text-left col-6">
                    <h5>Tags</h5>
                  </div>
                  <div className="text-right col-6">
                    <Button color="danger" onClick={Addtag}>
                      Add Tags
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <span>{dataModel()} </span>
            </Card>
          </div>

          <div className="col-8">
            <Card>
              <CardHeader>
                <div className="row">
                  <div className="text-left col-6">
                    <h5>Posts</h5>
                  </div>
                  <div className="text-right col-6">
                    <Button color="danger" onClick={Addpost}>
                      Add Post
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardBody>
                {datapost()}

                <Pagination
                  questionsPerPage={postsPerPage}
                  totalQuestions={posts.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
      {/* posts modal   */}
      <Modal isOpen={addPost} toggle={Addpost}>
        <ModalHeader toggle={Addpost}>Add Post</ModalHeader>
        <ModalBody>
          <div>
            <label>Title :</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div className="mt-3">
            <label>Descripion :</label>
            <textarea
              name="description"
              className="form-control"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group mt-3">
            <label>Image :</label>
            <div className="custom-file">
              <label className="custom-file-label"></label>
              <input
                type="file"
                name="image"
                className="custom-file-input"
                onChange={handleChange}
                required
              ></input>
            </div>
          </div>
          <div>
            <label>Post Tags :</label>

            <Multiselect
              options={tags} // Options to display in the dropdown
              onSelect={onSelect} // Function will trigger on select event
              onRemove={onRemove} // Function will trigger on remove event
              displayValue="tagname" // Property name to display in the dropdown options
              style={{
                option: {
                  // To change css for dropdown options
                  color: "blue",
                },
              }}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onClick}>
            Send
          </Button>{" "}
          <Button color="secondary" onClick={Addpost}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* tag modal */}
      <Modal isOpen={addTag} toggle={Addtag}>
        <ModalHeader toggle={Addtag}>Add Tag</ModalHeader>
        <ModalBody>
          <div>
            <select className="form-control" name="tagname" onChange={tagData}>
              <option value="Technology">Technology</option>
              <option value="Media">Media</option>
              <option value="Jobs">Jobs</option>
              <option value="Web dev">Web dev</option>
              <option value="It">It</option>
              <option value="News">News</option>
              <option value="Weather">Weather</option>
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            Send
          </Button>
          <Button color="secondary" onClick={Addtag}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Posts;
