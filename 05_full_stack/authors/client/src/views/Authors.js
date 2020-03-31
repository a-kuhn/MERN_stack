import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

//page to display table of all authors
export default props => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then(res => {
        setAuthors(res.data);
      })
      .catch(console.log);
  }, []);

  const deleteAuthor = deleteId => {
    axios
      .delete("http://localhost:8000/api/authors/" + deleteId)
      .then(res => {
        const filteredAuthors = authors.filter(
          author => author._id != deleteId
        );
        setAuthors(filteredAuthors);
      })
      .catch(console.log);
  };

  return (
    <div>
      <Link to="/authors/new" className="link">
        Add an author
      </Link>
      <p className="purple-font">We have quotes by: </p>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions available</th>
            </tr>
          </thead>
          <tbody>
            {authors.map(author => {
              return (
                <tr key={author._id}>
                  <td>
                    <p className="purple-font">{author.name}</p>
                  </td>
                  <td>
                    <button
                      onClick={e => navigate(`/authors/${author._id}/edit`)}
                      className="btn btn-secondary edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={e => {
                        deleteAuthor(author._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
