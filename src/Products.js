import React from "react";
import PropTypes from "prop-types";

const Products = ({ data = [] }) => {
    return (
        <div className="row">
            {data.map((dataItem, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img 
                            className="card-img-top" 
                            src={dataItem.recipe.image} 
                            alt="Card image cap" 
                        />
                        <div className="card-body">
                            <center>
                                <h5 className="card-title">{dataItem.recipe.label}</h5>
                                <p className="card-text">
                                    Total Amount Of Calories: {dataItem.recipe.calories}
                                </p>
                                <a href="#" className="btn btn-primary">Buy</a>
                            </center>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

Products.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Products;
