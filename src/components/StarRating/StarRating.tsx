import {FC} from "react";

import {Rate} from "rsuite";
import "rsuite/dist/rsuite.min.css";

import {IRating} from "../../interfaces";

interface IProps {
    ratingProps: IRating;
}

const StarRating: FC<IProps> = ({ratingProps}) => {
    const {defaultValue, size, readOnly} = ratingProps;
    return (
        <div>
            <Rate
                style={{ color: '#38415D'}}
                defaultValue={defaultValue}
                size={size}
                readOnly={readOnly}
            />
        </div>
    );
};

export {StarRating};