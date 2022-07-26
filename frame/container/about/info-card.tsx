import _ from 'lodash-es'
import { Descriptions } from 'antd'
import UPhoto from '@assets/photo.png'
const MainDom = () => {
  const mapTree = [
    {
      label: '年龄',
      txt: '27'
    },
    {
      label: '参加工作时间',
      txt: '2017年7月'
    },
    {
      label: '工作年限',
      txt: '5年'
    },
    {
      label: '居住地',
      txt: '深圳市宝安区'
    },
    {
      label: '手机号码',
      txt: '13266701191'
    },
    {
      label: '邮箱',
      txt: 'rekozxm@outlook.com'
    },
    {
      label: '毕业院校',
      txt: '商丘师范学院'
    },
    {
      label: '专业',
      txt: '广告学'
    },
    {
      label: '学历',
      txt: '全日制本科'
    }
  ]

  return (
    <>
      <div className="r-aboutme-info">
        <div className="pdh60 pt40">
          <div className="r-aboutme-title">
            <p className="r-aboutme-title_txt name">满意的个人网站</p>
            <p className="r-aboutme-title_txt en">PERSONAL WEBSITE</p>
          </div>
          <div
            className="r-aboutme-card pdv40 pdh50"
            style={{ width: 'calc(100% - 120px)' }}
          >
            <div className="r-aboutme-card_left">
              <img className="photo" src={UPhoto} alt="photo" />
              <p className="name mt18">张满意</p>
              <p className="job mt6 pd2">前端开发工程师</p>
            </div>
            <Descriptions className="r-aboutme-card_right ml20">
              {_.map(mapTree, (el, idx) => {
                return (
                  <Descriptions.Item key={idx} label={el.label}>
                    {el.txt}
                  </Descriptions.Item>
                )
              })}
            </Descriptions>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainDom
