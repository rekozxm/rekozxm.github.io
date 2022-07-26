import _ from 'lodash-es'
import { Carousel } from 'antd'
import type { CarouselRef } from 'antd/es/carousel'
import { useState, useEffect, useRef, CSSProperties } from 'react'

const MainDom = () => {
  const carouselRef = useRef<CarouselRef>(null)
  const [carouselActive, setCarouselActive] = useState(1)
  const contentStyle: CSSProperties = {
    height: '200px',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#fff'
  }
  const mapTree = [
    {
      label: 'Vue',
      description: 'js掌握能力'
    },
    {
      label: 'Vite',
      description: 'js掌握能力'
    },
    {
      label: 'React',
      description: 'js掌握能力'
    },
    {
      label: 'Webpack',
      description: 'build'
    },
    {
      label: 'nginx',
      description: 'web server'
    },
    {
      label: 'Element-UI',
      description: 'UI框架'
    },
    {
      label: 'Quasar-framework',
      description: 'UI框架'
    }
  ]

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.goTo(carouselActive)
    }
  }, [carouselActive])

  // 切换事件
  const handleBeforeChange = (from: number | null, to: number) => {
    setCarouselActive(to)
  }
  return (
    <div className="pdh60 r-aboutme-wrap_ability">
      <ul className="r-aboutme-wrap_ability_list pdv8">
        <li className="active-txt">
          PERSONAL SKILL - <span>{mapTree[carouselActive].label}</span>
        </li>
        {_.map(mapTree, (el, idx) => {
          return (
            <li
              key={idx}
              className={`item animate__animated ${
                carouselActive === idx ? 'active animate__fadeInUp' : ''
              }`}
              onClick={() => handleBeforeChange(carouselActive, idx)}
            >
              {el.label}
            </li>
          )
        })}
      </ul>
      <Carousel
        className="r-aboutme-wrap_ability_banner"
        autoplay
        dots={false}
        dotPosition="right"
        ref={carouselRef}
        beforeChange={handleBeforeChange}
      >
        {_.map(mapTree, (el, idx) => {
          return (
            <div key={idx}>
              <h3 style={contentStyle}>{el.label}</h3>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default MainDom
