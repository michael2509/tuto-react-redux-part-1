import React from 'react';

const Lists = ({ nameList, deleteUser }) => {
    const users = nameList.map((data, index) => {
        return data.age > 20 ? (
            <div key={index} className="App">
                <div>Name: {data.name}</div>
                <div>Age: {data.age}</div>
                <div>Sexe: {data.sexe}</div>
                <button onClick={() => deleteUser(data.id)}>Supprimer</button>
            </div>
        ) : null;
    });
    return <div className="name-list">{users}</div>
}

export default Lists;
