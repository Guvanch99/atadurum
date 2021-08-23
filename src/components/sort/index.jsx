import { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import {
  onChangeHandler,
  filterProducts
} from '../../redux/menu/actionCreators'
import { DATA } from '../../data'

import './index.scss'

const { sortOptions, buttonKeys } = DATA

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
  const { t } = useTranslation('translation')

  return (
    <div className="sort-container">
      <div className="sort-container__views">
        <button className="views__button" onClick={viewHandler}>
          <i className={`${view ? 'fas fa-th' : 'fas fa-list'} views__icon`} />
        </button>
      </div>
      <div className="sort-container__buttons">
        {buttonKeys.map(key => {
          return (
            <button
              onClick={updateSort}
              key={key}
              name="sortCategory"
              className="sort__button"
              value={key}
            >
              {t(`sort.buttonNames.${key}`)}
            </button>
          )
        })}
      </div>
      <form className="sort-container__select">
        <label className="sort__text" htmlFor="sort">
          {t('sort.sortLabel')}
        </label>
        <select
          onChange={updateSort}
          className="sort__input"
          value={sort}
          name="sort"
        >
          {sortOptions.map(({ value, keyName }, index) => (
            <option
              key={index}
              value={value}
              disabled={index === 0 ? true : false}
            >
              {t(`sort.sortOptions.${keyName}.name`)}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
Sort.propTypes = {
  view: PropTypes.bool.isRequired,
  viewHandler: PropTypes.func.isRequired
}
export default memo(Sort)
