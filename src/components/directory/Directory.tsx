import React, {Component} from 'react'
import MenuItem from "../menu-item/MenuItem";
import {Identifiable} from "../../common/types";

import DIRECTORY_DATA from "./directoryState";
import './directory.scss'

type DirectoryState = {
    sections: Section[];
}

interface Section extends Identifiable {
    title: string,
    imageUrl: string,
    size?: string,
    linkUrl: string
}

class Directory extends Component<{}, DirectoryState> {
    readonly state: Readonly<DirectoryState> = {
        sections: DIRECTORY_DATA
    }

    render() {
        const {sections} = this.state
        return (
            <div className='directory-menu'>
                {
                    sections
                        .map(({id, ...rest}) => (
                            <MenuItem
                                key={id}
                                {...rest}
                            />
                        ))
                }
            </div>
        )
    }
}

export default Directory

