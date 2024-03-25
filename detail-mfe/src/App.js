import React from "react";
import { Button, Fab, Chip } from "@mui/material";
import "./App.scss";

const sampleItemDetails = [
  {
    name: "Kawasaki Ninja 400",
    price: "7950,95",
    rating: "4",
    label: "Save with Plus",
    tags: ["Pickup", "Delivery", "1 day-shipping"],
    img: "https://www.shutterstock.com/shutterstock/photos/1250784583/display_1500/stock-photo-bangkok-thailand-december-green-kawazaki-ninja-on-the-gokart-track-1250784583.jpg",
  },
  {
    name: "Kawasaki Ninja 400",
    price: "7950,95",
    rating: "4",
    label: "Save with Plus",
    tags: ["Pickup", "Delivery", "1 day-shipping"],
    img: "https://www.shutterstock.com/shutterstock/photos/1250784583/display_1500/stock-photo-bangkok-thailand-december-green-kawazaki-ninja-on-the-gokart-track-1250784583.jpg",
  },
  {
    name: "Kawasaki Ninja 400",
    price: "7950,95",
    rating: "4",
    label: "Save with Plus",
    tags: ["Pickup", "Delivery", "1 day-shipping"],
    img: "https://www.shutterstock.com/shutterstock/photos/1250784583/display_1500/stock-photo-bangkok-thailand-december-green-kawazaki-ninja-on-the-gokart-track-1250784583.jpg",
  },
  {
    name: "Kawasaki Ninja 400",
    price: "7950,95",
    rating: "4",
    label: "Save with Plus",
    tags: ["Pickup", "Delivery", "1 day-shipping"],
    img: "https://www.shutterstock.com/shutterstock/photos/1250784583/display_1500/stock-photo-bangkok-thailand-december-green-kawazaki-ninja-on-the-gokart-track-1250784583.jpg",
  },
  {
    name: "Kawasaki Ninja 400",
    price: "7950,95",
    rating: "4",
    label: "Save with Plus",
    tags: ["Pickup", "Delivery", "1 day-shipping"],
    img: "https://www.shutterstock.com/shutterstock/photos/1250784583/display_1500/stock-photo-bangkok-thailand-december-green-kawazaki-ninja-on-the-gokart-track-1250784583.jpg",
  },
];

export default function () {
  return (
    <div className="item-details-container">
      <Fab className="mr-10" variant="extended">
        Active filter 1
      </Fab>

      <Fab className="mr-10" variant="extended">
        Active filter 2
      </Fab>

      <Fab className="mr-10" variant="extended">
        Active filter 3
      </Fab>

      <Fab className="mr-10" variant="extended">
        Active filter 4
      </Fab>

      <a>Clear All</a>

      <div className="item-box-container">
        {sampleItemDetails.map((item, index) => (
          <div className="item-box" key={index}>
            <div className="item-box-content">
              <img src={item.img} />
              <div>
                <Button variant="contained">Add</Button>
              </div>
              <h2 className="mb-10">€{item.price}</h2>
              <h3 className="mb-10">{item.name}</h3>
              <div className="mb-10">Rating {item.rating}/5</div>
              <div className="mb-10 label">{item.label}</div>
              {item.tags.map((tag) => (
                <Chip key={tag} className="tag" label={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
