import React from 'react'
import ArrowDropDownIcon from './icons/Polygon 5.svg';
import ArrowDropUpIcon from './icons/Polygon 2.svg';


const downIcon = <img src={ArrowDropDownIcon} alt="sort down" />
const upIcon = <img src={ArrowDropUpIcon} alt="sort up" />
const noneIcon = '↕'


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // sort: (click) => down -> (click) => up -> (click) => '' ------> (click) => down ...
    if (sort === '') {
        return down;
    } else if (sort === down) {
        return up;
    } else if (sort === up){
        return '';
    }
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
             <span id={id + '-icon-' + sort}>
                {icon}
            </span>
        </span>
    )
}

export default SuperSort
