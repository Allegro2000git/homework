import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import type {AppStoreType} from "../hw10/bll/store";
import {changeThemeId} from "./bll/themeReducer";

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    const themeId = useSelector((state: AppStoreType) => state.theme.themeId)
    const dispatch = useDispatch()

    const change = (id: number) => {
        dispatch(changeThemeId(id))

    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    value={themeId}
                    onChangeOption={change}
                    options={themes}
                />
            </div>
        </div>
    )
}

export default HW12
