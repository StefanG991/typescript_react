import React from "react";
import "./SingleMessage.css";

interface IProps {
  id: number;
  text: string;
  deleteMessage: (id: number) => void;
}

const SingleMessage: React.FC<IProps> = ({ id, text, deleteMessage }) => {
  function urlify(text: string) {
    const linkRegex =
      /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
    return text.replace(linkRegex, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + "</a>";
    });
  }
  return (
    <div className="message">
      <div dangerouslySetInnerHTML={{ __html: urlify(text) }}></div>
      <span onClick={() => deleteMessage(id)} className="delete_span">
        Delete
      </span>
    </div>
  );
};

export default SingleMessage;
