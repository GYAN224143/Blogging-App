import { firestore } from "../firebase";
import { useFormInput } from "../hooks";
import styled from "styled-components";
import "../index.css";
//import classes from "./Button.module.css";
const Styledbutton = styled.button`
  height: 33px;
  background: ${(props) => (props.primary ? "#3d1766" : "#6F1AB6")};
  border: 0;
  color: #fff;
  padding: 8px;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
`;

function CreatePost() {
  const title = useFormInput("");
  const subTitle = useFormInput("");
  const content = useFormInput("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("title", title);
    console.log("subTitle", subTitle);
    console.log("content", content);

    firestore.collection("posts").add({
      title: title.value,
      subTitle: subTitle.value,
      content: content.value,
      createdAt: new Date(),
    });
  }

  return (
    <div>
      <div className="createPost">
        <div className="createPostWrapper">
          <div className="postHeadeingConatiner">
            <h1>CREATE POST</h1>
          </div>
          <form onSubmit={handleSubmit} className="formConatiner">
            <div className="form-field">
              <label>TITLE</label>
              {/* <br /> */}
              <input {...title} />
            </div>
            <br />
            <div className="form-field">
              <label>SUB TITLE</label>
              {/* <br /> */}
              <input {...subTitle} />
            </div>
            <br />
            <div className="form-field">
              <label>CONTENT</label>
              {/* <br /> */}
              <textarea {...content}></textarea>
            </div>
            <br />
            <Styledbutton primary>SUBMIT POST</Styledbutton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
