import React, { useContext, useMemo } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Row } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    const handleBrandClick = (brand) => {
        device.setSelectedBrand(brand);
    };

    const renderBrands = useMemo(() => {
        return device.brands.map(brand => (
            <Card
                key={brand.id}
                className="p-3 brand-card"
                onClick={() => handleBrandClick(brand)}
                style={{
                    cursor: 'pointer',
                    border: brand.id === device.selectedBrand.id ? '2px solid red' : '2px solid transparent'
                }}
            >
                {brand.name}
            </Card>
        ));
    }, [device.brands, device.selectedBrand.id]);

    return (
        <div>
            <h5>Виберіть бренд пристрою:</h5>
            <Row className="d-flex">
                {renderBrands}
            </Row>
        </div>
    );
});

export default BrandBar;
