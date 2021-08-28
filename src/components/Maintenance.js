import React from 'react';

function Maintenance() {

    const styles = {
        padding: "17vh",
        textAlign: "center"
    }

    const imgStyles = {
        width: "80%"
    }

    return (
        <div style={styles}>
            <h2>Page Under Maintenance</h2>
            <img src="images/maintenance.jpg" style={imgStyles} alt="Under Maintenance"/>
        </div>
    )
}

export default Maintenance
