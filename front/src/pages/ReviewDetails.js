import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        id
        attributes {
          title
          rating
          body
          video {
            data {
              id
              attributes {
                hash
                size
                width
                previewUrl
                url
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function ReviewDetails() {
  const { id } = useParams();
  //const { loading, error, data } = useFetch('http://localhost:1337/reviews/' + id)

  const { loading, error, data } = useQuery(REVIEW, {
    variables: { id: id },
  });
  const reviewDetail = data?.review?.data?.attributes;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className='review-card'>
      <div className='rating'>{reviewDetail.rating}</div>
      <h2>{reviewDetail.title}</h2>
      {reviewDetail.categories.data.map((c) => (
        <small key={c.id}>{c.attributes.name}</small>
      ))}

      <ReactMarkdown>{reviewDetail.body}</ReactMarkdown>
    </div>
  );
}
