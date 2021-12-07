import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import Select from "react-select";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import Breadcrumb from "../components/Breadcrumb";
import Avatar from "../components/Avatar";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function BlogEdit() {
  const initialContent = `
  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>
  <p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
  `;
  const categories = [
    { value: "fashion", label: "Fashion" },
    { value: "gaming", label: "Gaming" },
    { value: "quote", label: "Quote" },
    { value: "video", label: "Video" },
    { value: "food", label: "Food" }
  ];

  const contentBlock = htmlToDraft(initialContent);
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  const editorState = EditorState.createWithContent(contentState);

  const [data, setData] = useState(null),
    [title, setTitle] = useState(""),
    [slug, setSlug] = useState(""),
    [status, setStatus] = useState(""),
    [content, setContent] = useState(editorState),
    [blogCategories, setBlogCategories] = useState([]),
    [featuredImg, setFeaturedImg] = useState(null),
    [imgPath, setImgPath] = useState("banner.jpg");

  return (
    <div className="container-fluid" style={{ color: "#5e5873", lineHeight: 1.2 }}>
      <Breadcrumb title="Blog Edit" parent="Home" active="Edit" />
      <div className="card mx-0 border-light shadow w-100 mb-3">
        <div className="card-body">
          <Avatar title="Johnny" image="/img/avatar-1.png" />
          <form className="my-3">
            <div className="row">
              <div className="mb-3 col-md-6 fs-6">
                <label className="form-label">Title</label>
                <input type="text" className="form-control fw-light" placeholder="johny blog" />
              </div>
              <div className="mb-3 col-md-6 fs-6">
                <label className="form-label">Category</label>
                <Select
                  id="blog-edit-category"
                  isClearable={false}
                  value={blogCategories}
                  isMulti
                  name="colors"
                  options={categories}
                  className="react-select"
                  classNamePrefix="select"
                  onChange={(data) => setBlogCategories(data)}
                />
              </div>
              <div className="mb-3 col-md-6 fs-6">
                <label className="form-label">Slug</label>
                <input type="text" className="form-control fw-light" placeholder="johny blog" />
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label">Status</label>
                <select
                  className="form-control fw-light"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}>
                  <option value="Published">Published</option>
                  <option value="Pending">Pending</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
              <div className="mb-3 col-12">
                <label className="form-label">Content</label>
                <Editor
                  editorClassName="border border-1"
                  toolbarClassName="border border-1 border-bottom-0 mb-0"
                  editorState={content}
                  onEditorStateChange={(data) => setContent(data)}
                />
              </div>

              <div className="mb-2 col-12" sm="12">
                <div className="border rounded p-2">
                  <h4 className="mb-2">Featured Image</h4>
                  <div className="card border-0 flex-column flex-md-row">
                    <img
                      className="rounded mr-2 mb-1 mb-md-0 img-fluid"
                      src="./img/VietnamMountain.jpg"
                      alt="featured img"
                      width="170"
                      height="110"
                    />
                    <div className="card-body">
                      <small className="text-muted">
                        Required image resolution 800x400, image size 10mb.
                      </small>

                      <p className="my-50">
                        <a href="/" onClick={(e) => e.preventDefault()}>
                          {`C:/fakepath/${imgPath}`}
                        </a>
                      </p>
                      <div className="d-inline-block">
                        <div className="mb-0">
                          <input
                            className="form-control"
                            type="file"
                            id="exampleCustomFileBrowser"
                            name="customFile"
                            accept=".jpg, .png, .gif"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-50 col d-flex flex-row-reverse">
                <button color="primary" className="ms-3 btn btn-primary">
                  Save Changes
                </button>
                <button className="btn btn-outline-secondary">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
