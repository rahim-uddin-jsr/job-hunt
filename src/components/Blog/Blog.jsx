import React from "react";
import Header from "../../sheared/Header";

const Blog = () => {
  return (
    <div>
      <Header>Blog Page</Header>
      <div className="flex gap-3 flex-col items-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">When should you use context API?</h2>
            <p>
              যখন আমরা প্রপস ড্রিলিং ছাড়া পেরেন্ট কম্পোনেন্ট থেকে চিল্ড্রেন
              কম্পোনেন্ট গুলোতে এ কোন ডাটা পাঠানোর দরকার পরে তখন আমরা কনটেস্কট
              এপিয়াই ব্যবহার করে থাকি। এটি ব্যবহার এর মাধ্যমের ফলে আমরা যেকোন
              চিল্ড্রেন কম্পোনেন্ট এ উক্ত ডাটাকে এক্সেস করতে পারি।
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is a custom hook?</h2>
            <p>
              যখন আমরা নিজেরাই কোন হুক বানিয়ে থাকি তাকেই কাস্টম হুক বলা হয়। এটি
              সাধারণত একটি জাভাস্ক্রিপ্ট ফাংশন যেটি কাজের সুবিধার্থে বিভিন্ন
              প্রজেক্ট এর বিভিন্ন ফাইল থেকে ব্যবহার করা যায়।
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is useRef?</h2>
            <p>
              এটি রিয়্যাক্ট এর একটি হুক যা একটি ইনিশিয়াল মাণ নিয়ে থাকে এবং একটি
              রেফারেন্স রিটার্ন করে। JSX ইলিমেন্ট এর মধ্যে ref{} প্রপার্টি
              ব্যবহার করে উক্ত রেফারেন্স সেট করা হয়।
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">What is useMemo?</h2>
            <p>
              এটি রিয়্যাক্ট এর একটি হুক যা ব্যবহার করে আমরা অপরিবর্তনীয় কোন
              কাজকে রি রেন্ডার হয়া থেকে থামাতে পারি। কোন ভারি কাজ যাতে পরিবর্তন
              না হলেও রিরেন্ডার নবা হয় সে জন্য useMemo হুক এর ভিতরে রাখতে হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
