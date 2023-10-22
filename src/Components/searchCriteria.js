import React from "react";

function searchCriteria() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label for="stores">Choose a store:</label>
            <select name="stores" id="stores" >
                <option value="">&nbsp;</option>
                <option value="plaisio">Plaisio</option>
            </select>

            <label for="prodCategory">Choose a product category:</label>
            <select name="prodCategory" id="prodCategory">
                <option value="">&nbsp;</option>
                <option value="tv">TV</option>
                <option value="Cameras">Cameras</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    );

}

export default searchCriteria;