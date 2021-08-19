import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  onChangeHandler,
  filterProducts
} from '../../redux/menu/actionCreators'
import { DATA } from '../../data'

import './index.scss'

const { buttonsSort, sortOptions } = DATA

const Sort = ({ view, viewHandler }) => {
  const dispatch = useDispatch()
  const { sort, sortCategory } = useSelector(state => state.menu)

  const updateSort = ({ target }) => {
    const { value, name } = target
    const payload = {
      name,
      value
    }

    dispatch(onChangeHandler(payload))
  }
  useEffect(() => {
    dispatch(filterProducts())
  }, [sort, sortCategory, dispatch])

  return (
    <div className="sort-container">
      <div className="sort-container__views">
        <button className="views__button" onClick={viewHandler}>
          <i className={`${view ? 'fas fa-th' : 'fas fa-list'} views__icon`} />
        </button>
      </div>
      <div className="sort-container__buttons">
        {buttonsSort.map((text, index) => (
          <button
            onClick={updateSort}
            key={index}
            name="sortCategory"
            className="sort__button"
            value={text}
          >
            {text}
          </button>
        ))}
      </div>
      <form className="sort-container__select">
        <label className="sort__text" htmlFor="sort">
          sort by
        </label>
        <select
          onChange={updateSort}
          className="sort__input"
          value={sort}
          name="sort"
        >
          {sortOptions.map(({ value, name, disabled }, index) => (
            <option value={value} disabled={disabled}>
              {name}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Sort
