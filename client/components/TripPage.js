import React from 'react';
import queryString from 'query-string';
import { useParams } from "react-router-dom";


export default function TripPage() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { place } = useParams();
  
    return (
      <div>
        Hello Neens. This page is also under construction=/ BUT when it's done it'll be used to view/update details for our trip to {place}!
      </div>
    );
  }

