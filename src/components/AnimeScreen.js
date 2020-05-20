import React from "react";
import { Bar } from "react-chartjs-2";

const AnimeScreen = (props) => {
  return (
    <div className="anime-list">
      {props.results && props.ratings
        ? props.results.map((result, index) => {
            if (result.attributes.posterImage) {
              return (
                <div className="anime" key={result.id}>
                  <img src={result.attributes.posterImage.tiny} alt="Cover" />
                  <p>{result.attributes.canonicalTitle}</p>
                  <Bar
                    data={{
                      labels: Object.keys(props.ratings[index]),
                      datasets: [
                        {
                          label: "Rating Frequency",
                          data: Object.values(props.ratings[index]),
                          backgroundColor: "rgba(54, 162, 235, 0.8)",
                          borderColor: "rgba(0,0,0,1)",
                          borderWidth: 2,
                        },
                      ],
                    }}
                  />
                </div>
              );
            }
            return null;
          })
        : "Loading data"}
    </div>
  );
};

export default AnimeScreen;
