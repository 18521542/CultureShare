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
    <div className="container-fluid">
      <Breadcrumb title="Blog Edit" parent="Home" active="Edit" />
      <div className="card m-0 border-light shadow w-100">
        <div className="card-body">
          <Avatar title="Johnny" image="/img/avatar-1.png" />
          <form>
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
            </div>
            <div className="row">
              <div className="mb-3 col-md-6 fs-6">
                <label className="form-label">Slug</label>
                <input type="text" className="form-control fw-light" placeholder="johny blog" />
              </div>
              <div className="mb-3 col-6">
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
            </div>
            <div className="mb-3">
              <label className="form-label">Slug</label>
              <Editor
                editorClassName="border border-1"
                toolbarClassName="border border-1 border-bottom-0 mb-0"
                editorState={content}
                onEditorStateChange={(data) => setContent(data)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogEdit;
