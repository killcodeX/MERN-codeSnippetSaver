// import {
//     GetProducts,
//     GetSingleProducts,
//     BuyProduct,
//     CartProduct,
//     RemovefromCart,
//     TotalAmount,
//     TotalproductToBuy,
//   } from "../actions/actionConstant";

const initialState = {
  Codes: [
    {
      id: 1,
      title: "Apply Redux to a Modern React Hooks Application",
      desc: "You will learn how to apply Redux to a modern React Hooks application. Enabling you to effectively implement Redux and test your application at a high level.",
      language: "CSS",
      code: "Sexy",
    },
    {
      id: 2,
      title: "Add Github Login to Your Web App with OAuth 2.0",
      desc: "Learn the fundamental building blocks of Authentication and Authorization on the web using the OAuth 2.0 protocol.",
      language: "Java",
      code: "Sexy",
    },
    {
      id: 3,
      title: "Build a Serverless API with Cloudflare Workers",
      desc: "You will learn how to build and deploy a Serverless API with Cloudflare Workers. Enabling you to effectively manage a highly available backend for your projects.",
      language: "Python",
      code: `import SyntaxHighlighter from 'react-syntax-highlighter';
      import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
      const Component = () => {
        const codeString = '(num) => num + 1';
        return (
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        );
      };`,
    },
    {
      id: 4,
      title: "10 Things To Know About Azure Static Web Apps 🎉",
      desc: "This course gets you up and running with react in under a minute by using codesandbox.io to skip the painful process of setting up your dev environment.",
      language: "C#",
      code: "Sexy",
    },
    {
      id: 5,
      title: "Frontend Performance Optimization with Code Splitting using React.Lazy & Suspense 🔥",
      desc: "Learn how developers successfully use marketing to spread the word about their projects, blogs, and more, often without trying to sell anything.",
      language: "JavaScript",
      code: `import React from "react";
      import { Tag } from "../layout/theme";
      import { Modal, Button } from "react-bootstrap";
      import SyntaxHighlighter from "react-syntax-highlighter";
      import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
      
      export default function CodeModal({ data={title:'test', desc:'dada',language:'papa',code:'sexy'}, show, handleClose }) {
          console.log('from data', data)
        return (
          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>{data.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tag>Description</Tag>
              <p className="mt-3 mb-3">{data.desc}</p>
              <Tag>{data.language}</Tag>
              <SyntaxHighlighter
                className="mt-3"
                showLineNumbers={true}
                language={data.language}
                style={atomOneDark}
              >
                {data.code}
              </SyntaxHighlighter>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }
      `,
    },
  ],
  theme:'dark',
  TotalProduct: [],
  buyProduct: [],
  TotalAmount: null,
  TotalProductBuy: null,
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    //   case GetProducts:
    //     return {
    //       ...state,
    //       Products: action.payload,
    //     };

    //   case GetSingleProducts:
    //     return {
    //       ...state,
    //       Product: action.payload,
    //     };

    //   case BuyProduct:
    //     return {
    //       ...state,
    //       buyProduct: [action.payload, ...state.buyProduct],
    //     };

    //   case CartProduct:
    //     const totalItemBuy = state.Products.filter((data1) =>
    //       state.buyProduct.some((data2) => data1.id === data2.id)
    //     );
    //     return {
    //       ...state,
    //       TotalProduct: totalItemBuy,
    //     };

    //   case TotalproductToBuy:
    //     const data = state.buyProduct.reduce(
    //       (acc, currentValue) => acc + currentValue.numberOfProduct,
    //       0
    //     );
    //     return {
    //       ...state,
    //       TotalProductBuy: data,
    //     };

    //   case TotalAmount:
    //     const total = [];
    //     state.TotalProduct.map(product => {
    //       state.buyProduct.map(item => {
    //         if(item.id === product.id){
    //           total.push(product.price * item.numberOfProduct)
    //         }
    //       })
    //     })
    //     const newTotal = total.reduce((acc, curr) => acc+curr,0)
    //     return {
    //       ...state,
    //       TotalAmount: newTotal,
    //     };

    //   case RemovefromCart:
    //     return {
    //       ...state,
    //       TotalProduct: state.TotalProduct.filter(
    //         (product) => product.id !== action.payload
    //       ),
    //       buyProduct: state.buyProduct.filter(
    //         (product) => product.id !== action.payload
    //       ),
    //     };

    default:
      return state;
  }
};

export default ProductReducer;
