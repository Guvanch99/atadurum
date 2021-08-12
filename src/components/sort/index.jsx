import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  onChangeHandler,
  filterProducts
} from '../../redux/menu/actionCreators'
import { DATA } from '../../data'

import './index.scss'

const { buttonsSort } = DATA

const Sort = ({ view, viewHandler }) => {
  const dispatch = useDispatch()
  const { sort, sortCategory } = useSelector(state => state.menu)

  const updateSort = e => {
    const { value, name } = e.target
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
        {view ? (
          <button className="views__button" onClick={viewHandler}>
            <i className="fas fa-th views__icon" />
          </button>
        ) : (
          <button className="views__button" onClick={viewHandler}>
            <i className="fas fa-list views__icon" />
          </button>
        )}
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
          <option value="" disabled>
            Not selected
          </option>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">Alphabet (a-z)</option>
          <option value="name-z">Alphabet (z-a)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort
