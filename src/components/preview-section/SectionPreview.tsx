import React, {FC} from 'react';

import SectionItem from "../section-item/SectionItem";
import {ShopPageSection} from "../../common/types";

import './section-preview.scss';

type SectionPreviewProps = ShopPageSection

const SectionPreview: FC<SectionPreviewProps> =
    ({title, items}) => (
        <div className='section-preview'>
            <h1>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((item, i) => i < 4)
                        .map(({...props}) => (
                            <SectionItem key={props.id} {...props} />
                        ))
                }
            </div>
        </div>
    )

export default SectionPreview
