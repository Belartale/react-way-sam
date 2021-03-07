import React from "react";

// const Post = (props) => {
//   let PostElement = props.postData.map((data) => (
//     // <Post message={data.message} likes={data.likes} />

//     <div className="card">
//       <div className="row row--align_center">
//         <div className="cell cell--5">
//           <img
//             className="img img--sm img--radius"
//             src="https://svgsilh.com/svg/2098873.svg"
//             alt="img profiles"
//           />
//         </div>
//         <div className="cell cell--90">
//           <p className="caption caption--size_3">{data.message}</p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="cell cell--100">
//           <p className="caption caption--size_3">like {data.likes}</p>
//         </div>
//       </div>
//     </div>
//   ));

//   return <div>{PostElement}</div>;
// };

const Post = (props) => {
  return (
    <div className="card">
      <div className="row row--align_center">
        <div className="cell cell--5">
          <img
            className="img img--sm img--radius"
            src="https://svgsilh.com/svg/2098873.svg"
            alt="img profiles"
          />
        </div>
        <div className="cell cell--90">
          <p className="caption caption--size_3">{props.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="cell cell--100">
          <p className="caption caption--size_3">like {props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
