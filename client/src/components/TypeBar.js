import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div>
            <h5>Виберіть тип пристрою:</h5>
            <ListGroup>
                {device.types.map(type => (
                    <ListGroup.Item
                        key={type.id}
                        style={{ cursor: 'pointer' }}
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
});

export default TypeBar;
