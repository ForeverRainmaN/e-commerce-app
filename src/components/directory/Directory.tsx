import React, {FC, useState} from 'react'
import MenuItem from "../menu-item/MenuItem";

import {Identifiable} from "../../common/types";

import './directory.scss'
import DIRECTORY_DATA from "./directoryState";

interface Section extends Identifiable {
    title: string,
    imageUrl: string,
    size?: string,
    linkUrl: string
}

type DirectoryState = Section[]

const Directory: FC = () => {
    const [sections,] = useState<DirectoryState>(DIRECTORY_DATA)
    return (
        <div className='directory-menu'>
            {
                sections.map(({id, ...rest}) => (
                    <MenuItem
                        key={id}
                        {...rest}
                    />
                ))
            }
        </div>
    )
}

export default Directory
